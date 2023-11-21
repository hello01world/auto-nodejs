/**
 * 执行sh部署
 */

const { execSync } = require('child_process');
const https = require('https');

function runScript(scriptPath) {
  execSync(`sh ${scriptPath}`);
}

function isNetwork() {
  return new Promise((resolve, reject) => {
    try {
      const websiteToCheck = 'gitee.com'; // 可以替换为你想要测试的网站

      const options = {
        hostname: websiteToCheck,
        port: 443, // HTTP默认端口
        path: '/',
        method: 'HEAD' // 使用HEAD方法来发送请求，只检查是否能建立连接
      };

      const req = https.request(options, res => {
        if (res.statusCode === 200) {
          resolve();
          // console.log(`${websiteToCheck} 可以访问`);
        } else {
          console.log(`${websiteToCheck} 无法访问，状态码: ${res.statusCode}`);
        }
      });

      req.on('error', error => {
        console.error(`无法连接到 ${websiteToCheck}: ${error.message}`);
      });

      req.end();
    } catch (error) {
      reject(error);
    }
  });
}

async function runScripts(scriptPaths) {
  try {
    await isNetwork();
    scriptPaths.forEach(item => {
      runScript(item.scriptPath);
    });
    console.log('deploys success');
  } catch (error) {
    console.log('deploys success:' + error);
  }
}

module.exports = runScripts;
