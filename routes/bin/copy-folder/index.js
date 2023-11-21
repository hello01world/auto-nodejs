/**
 *  复制文件夹
 */
const fs = require('fs');
const path = require('path');

function copyFolder(source, target, exclude = []) {
  // Create the target folder if it doesn't exist
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }

  // Read the contents of the source folder
  const files = fs.readdirSync(source);

  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    // 获取文件的权限
    const stat = fs.statSync(sourcePath);
    const permissions = stat.mode;

    // Check if the file is a directory
    if (fs.lstatSync(sourcePath).isDirectory()) {
      // Exclude .git and node_modules folders
      if (!exclude.includes(file)) {
        // if (file !== ".git" && file !== "node_modules"  ) { //&& file !== "doc-ohter" && file !== "app-history"
        // Recursively copy subfolders
        copyFolder(sourcePath, targetPath);
        fs.chmodSync(targetPath, permissions);
      }
    } else {
      if (!exclude.includes(file)) {
        // Copy the file
        fs.copyFileSync(sourcePath, targetPath);
        fs.chmodSync(targetPath, permissions);
      }
    }
  });
}

// 批量复制文件夹
function copyFolders(outputs) {
  try {
    outputs.forEach(item => {
      copyFolder(item.sourceFolder, item.targetFolder, item.exclude);
    });
    console.log('copyFolders success');
  } catch (error) {
    console.log('copyFolders success:' + error);
  }
}

module.exports = copyFolders;
