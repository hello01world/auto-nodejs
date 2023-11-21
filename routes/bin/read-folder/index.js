/**
 * 读取文件夹生成json
 */

const fs = require("fs");
const path = require("path");

/**
 *
 * @param {*} dir 文件夹路径
 * @param {*} level 读取层级
 * @param {*} onlyFolders 是否仅读取文件夹
 * @param {*} excludeItems 排除文件和文件夹
 * @returns
 */
function readFolder(dir, level, onlyFolders, excludeItems = []) {
  const files = fs.readdirSync(dir);
  const result = [];

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    const item = {
      name: file,
      // url: filePath,
      type: stats.isDirectory() ? "dir" : "file", // 添加 type 属性表示文件或文件夹类型
    };

    if (excludeItems.includes(file)) {
      // 如果文件或文件夹在排除列表中，则跳过递归
      // result.push(item);
      return;
    }

    if (stats.isDirectory() && (level === undefined || level > 0)) {
      // 如果是文件夹且未指定层级或层级大于0，则递归读取文件夹内的内容，并减少层级
      item.children = readFolder(
        filePath,
        level !== undefined ? level - 1 : undefined,
        onlyFolders,
        excludeItems
      );
    }

    // 如果包含app-history文件夹，则多读取一层
    if (file === "history") {
      if (stats.isDirectory() && (level === undefined || level > -1)) {
        // 如果是文件夹且未指定层级或层级大于0，则递归读取文件夹内的内容，并减少层级
        item.children = readFolder(
          filePath,
          level !== undefined ? level - 1 : undefined,
          onlyFolders,
          excludeItems
        );
      }
    }

    if (!onlyFolders || stats.isDirectory()) {
      // 如果不限制只输出文件夹或当前项为文件夹，则将当前项添加到结果中
      result.push(item);
    }
  });

  return result;
}

function readFolders(outputs) {
  try {
    outputs.forEach((item) => {
      let result = readFolder(
        item.directoryPath,
        item.maxLevel,
        item.onlyFolders,
        item.excludeItems
      );
      let data = JSON.stringify(result, null, 2);

      if (item.genPath) {
        if (item.genFile) {
          fs.writeFileSync(item.genPath + "/" + item.genFile, data, "utf8");
        } else {
          fs.writeFileSync(
            item.genPath +
              "/" +
              item.directoryPath.split("/").slice(3).join("_") +
              ".json",
            data,
            "utf8"
          );
        }
      }
    });

    console.log("readFolders success");
  } catch (error) {
    console.log("readFolders fail:" + error);
  }
}

module.exports = readFolders;
