const fs = require("fs");
const path = require("path");

const createNewfolder = (rootfolder, folderName) => {
  const newFolder = path.join(rootfolder, folderName);
  fs.mkdirSync(newFolder, { recursive: true });
  return newFolder;
};

const deleteFolder = (folderPath) => {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
  }
};

const readConfigFile = (configPath) => {
  return fs.readFileSync(configPath, "utf8");
};

const extractThemeFromConfig = (content) => {
  const match = content.match(/theme\s*=\s*\[?"([^"\]]+)"\]?/);
  return match ? match[1] : null;
};

const getFolderName = (rootfolder) => {
  const configPath = path.join(rootfolder, "exampleSite/hugo.toml");
  const configFileContent = readConfigFile(configPath);
  return extractThemeFromConfig(configFileContent);
};

const readDirectory = (directory) => {
  return fs.readdirSync(directory, { withFileTypes: true });
};

const moveFile = (source, destination) => {
  fs.renameSync(source, destination);
};

const ensureFolderExists = (folder) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
};

const iterateFilesAndFolders = (sourceDir, destDir) => {
  const items = readDirectory(sourceDir);

  items.forEach((item) => {
    const sourcePath = path.join(sourceDir, item.name);
    const destPath = path.join(destDir, item.name);

    if (item.isDirectory()) {
      ensureFolderExists(destPath);
      iterateFilesAndFolders(sourcePath, destPath);
    } else {
      moveFile(sourcePath, destPath);
    }
  });
};

const setupTheme = () => {
  const rootFolder = path.join(__dirname, "../");

  if (!fs.existsSync(path.join(rootFolder, "exampleSite"))) {
    createExampleSiteStructure(rootFolder);
    moveThemeFiles(rootFolder);
  }
};

const createExampleSiteStructure = (rootFolder) => {
  const includesFiles = [
    "tailwind.config.js",
    "postcss.config.js",
    "go.mod",
    "hugo.toml",
    "assets",
    "config",
    "data",
    "content",
    "i18n",
    "static",
  ];

  const folder = createNewfolder(rootFolder, "exampleSite");

  fs.readdirSync(rootFolder, { withFileTypes: true }).forEach((file) => {
    if (includesFiles.includes(file.name)) {
      if (file.isDirectory()) {
        const destination = path.join(rootFolder, "exampleSite", file.name);
        ensureFolderExists(destination);
        iterateFilesAndFolders(path.join(rootFolder, file.name), destination);
        deleteFolder(path.join(rootFolder, file.name));
      } else {
        moveFile(
          path.join(rootFolder, file.name),
          path.join(folder, file.name)
        );
      }
    }
  });
};

const moveThemeFiles = (rootFolder) => {
  const themes = path.join(rootFolder, "themes");
  const themeName = getFolderName(rootFolder);
  iterateFilesAndFolders(path.join(themes, themeName), rootFolder);
  deleteFolder(themes);
};

setupTheme();
