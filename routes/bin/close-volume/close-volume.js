/**
 * 静音
 */

const { execSync } = require("child_process");

execSync("osascript -e 'set volume output volume 0'");
console.log(`close-volume success`);
