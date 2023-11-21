
# auto-nodejs

### 描叙

auto-nodejs 是一个基于Node.js自动化项目，多个日常脚本，多种方式运行（点击执行，脚本执行，定时执行），脚本能够自定义，帮助您自动化日常任务，提高效率和减少重复性工作。

### 安装和运行

```bash
git clone 
cd auto-nodejs
yarn 
yarn start
http://localhost/
```

### Node.js 脚本

点击执行，点击[genAutoNodejsJson]按钮，初始化界面数据

脚本执行，cd routes/auto-nodejs/bin && node chrome-bookmarks/chrome-bookmarks-demo.js

定时执行，schedule/auto-nodejs[项目运行代表开启]

```
chrome-bookmarks/index.js 备份google chrome的书签
copy-folder/index.js 备份文件夹
deploy/index.js 执行sh部署（需自写deploy.sh）
multi/index.js 同时执行多个
gitupdate/index.js 执行sh提交（需自写gitupdate.sh）
read-folder/index.js
start-end/close-volume.js 电脑静音   
schedule/auto-nodejs 定时器
```

cd /routes/bin 可添加更多自定义脚本

### 技术栈

koa 后端服务
koa-static 静态服务
koa-routers 路由服务
koa-view ejs视图

### 为什么选择 Auto-NodeJS？

为自己做点东西：为了日常备份，提交资料等日常工作，写一个属于自己的项目。

拥抱自动化：简单重复的工作可以自动化，很多工作有规律性，有规律就可以标准化，标准化就可以自动化。

一次开发，多次使用。
