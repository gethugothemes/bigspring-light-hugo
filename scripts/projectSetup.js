const fs = require("fs");
const path = require("path");

const readConfigFile = (configPath) => {
  return fs.readFileSync(configPath, "utf8");
};

const extractThemeFromConfig = (content) => {
  const match = content.match(/theme\s*=\s*\[?"([^"\]]+)"\]?/);
  return match ? match[1] : null;
};

const getFolderName = (rootfolder) => {
  const configPath = path.join(rootfolder, "exampleSite/hugo.toml");
  const configFileContent = readConfigFile(csonfigPath);
  return extractThemeFromConfig(configFileContent);
};

const deleteFolder = (folderPath) => {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
  }
};

const createNewfolder = (rootfolder, folderName) => {
  const newFolder = path.join(rootfolder, folderName);
  fs.mkdirSync(newFolder, { recursive: true });
  return newFolder;
};

const readDirectory = (directory) => {
  return fs.readdirSync(directory, { withFileTypes: true });
};

const ensureFolderExists = (folder) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
};

const moveFile = (source, destination) => {
  fs.renameSync(source, destination);
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

const setupProject = () => {
  const rootfolder = path.join(__dirname, "../");

  if (!fs.existsSync(path.join(rootfolder, "themes"))) {
    moveThemeFolders(rootfolder);
    moveExampleSite(rootfolder);
  }
};

const moveThemeFolders = (rootfolder) => {
  const folderList = ["layouts", "assets", "static"];
  const folderName = getFolderName(rootfolder);
  const newfolderName = createNewfolder(
    path.join(rootfolder, "themes"),
    folderName
  );

  folderList.forEach((folder) => {
    const source = path.join(rootfolder, folder);
    const destination = path.join(newfolderName, folder);
    if (fs.existsSync(source)) {
      ensureFolderExists(destination);
      iterateFilesAndFolders(source, destination);
      deleteFolder(source);
    }
  });
};

const moveExampleSite = (rootfolder) => {
  const exampleSite = path.join(rootfolder, "exampleSite");
  iterateFilesAndFolders(exampleSite, rootfolder);
  deleteFolder(exampleSite);
};

setupProject();
