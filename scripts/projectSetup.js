const fs = require("fs");
const path = require("path");



const getFolderName = (rootFolder) => {
  const configPath = path.join(rootFolder, "exampleSite/hugo.toml");
  const getConfig = fs.readFileSync(configPath, "utf8");
  const match = getConfig.match(/theme\s*=\s*\[?"([^"\]]+)"\]?/);
  let selectedTheme = null;
  if (match && match[1]) {
    selectedTheme = match[1];
  }
  return selectedTheme;
};

const deleteFolder = (folderPath) => {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
  }
};

const createNewFolder = (rootFolder, folderName) => {
  const newFolder = path.join(rootFolder, folderName);
  fs.mkdirSync(newFolder, { recursive: true });
  return newFolder;
};

const iterateFilesAndFolders = (rootFolder, { destinationRoot }) => {
  const directory = path.join(rootFolder);
  const items = fs.readdirSync(directory, { withFileTypes: true });
  items.forEach((item) => {
    if (item.isDirectory()) {
      createNewFolder(destinationRoot, item.name);
      iterateFilesAndFolders(path.join(directory, item.name), {
        currentFolder: item.name,
        destinationRoot: path.join(destinationRoot, item.name),
      });
    } else {
      const sourceFile = path.join(directory, item.name);
      const destinationFile = path.join(destinationRoot, item.name);
      fs.renameSync(sourceFile, destinationFile);
    }
  });
};

const updateSitepinsConfig = (rootFolder, folderName) => {
  const configPath = path.join(rootFolder, ".sitepins/config.json");
  if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
    config.content = "content";
    config.media = "assets/images";
    config.public = "static";
    config.code = `themes/${folderName}/layouts`;
    config.configs = ["config/_default", "hugo.toml", "data", "i18n"];
    fs.writeFileSync(
      configPath,
      JSON.stringify(config, null, 2) + "\n",
      "utf8",
    );
  }
};

const setupProject = () => {
  const rootFolder = path.join(__dirname, "../");
  if (!fs.existsSync(path.join(rootFolder, "themes"))) {

    const folderList = ["layouts", "assets", "static"];
    const folderName = getFolderName(rootFolder);
    const newFolderName = createNewFolder(
      path.join(rootFolder, "themes"),
      folderName,
    );

    folderList.forEach((folder) => {
      const source = path.join(rootFolder, folder);
      const destination = path.join(newFolderName, folder);
      if (fs.existsSync(source)) {
        fs.mkdirSync(destination, { recursive: true });
        iterateFilesAndFolders(source, {
          currentFolder: folder,
          destinationRoot: destination,
        });
        deleteFolder(source);
      }
    });

    const exampleSite = path.join(rootFolder, "exampleSite");
    iterateFilesAndFolders(exampleSite, { destinationRoot: rootFolder });
    deleteFolder(exampleSite);

    updateSitepinsConfig(rootFolder, folderName);
  } else {
    console.log("Project already setup");
  }
};

setupProject();