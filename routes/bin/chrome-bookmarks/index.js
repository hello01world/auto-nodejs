/**
 * google 浏览器书签生成json
 */
const fs = require('fs');

/**
 *
 * @param {*} sourceFilePath 指定 Chrome Bookmarks 书签文件路径（不同的操作系统和浏览器配置可能会有所不同）
 * Windows: %LocalAppData%\Google\Chrome\User Data\Default\Bookmarks
 * macOS: ~/Library/Application Support/Google/Chrome/Default/Bookmarks
 * Linux: ~/.config/google-chrome/Default/Bookmarks
 * @param {*} destFilePath
 */
function chromeBookmarks(sourceFilePath, destFilePath) {
  let data = fs.readFileSync(sourceFilePath, 'utf8');
  try {
    const result = JSON.stringify(JSON.parse(data), null, 2);
    fs.writeFileSync(destFilePath, result, 'utf8');
    console.log('chromeBookmarks success');
  } catch (error) {
    console.error('chromeBookmarks fail:', error);
  }
}

module.exports = chromeBookmarks;
