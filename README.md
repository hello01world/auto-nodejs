# auto-nodejs

### Description

auto-nodejs is an automation project based on Node.js, featuring multiple daily scripts and supporting various execution methods (click execution, script execution, scheduled execution). The scripts are customizable, aiming to help you automate daily tasks, improve efficiency, and reduce repetitive work.

### Installation And Run

```bash
git clone 
cd auto-nodejs
yarn 
yarn start
http://localhost/
```

### Nodejs Script

Click execution: Click the [genAutoNodejsJson] button to initialize the interface data.

Script execution: cd routes/auto-nodejs/bin && node chrome-bookmarks/chrome-bookmarks-demo.js.

Scheduled execution: schedule/auto-nodejs [Project run indicator is enabled].

```
chrome-bookmarks/index.js: Backup Google Chrome bookmarks.
copy-folder/index.js: Backup a folder.
deploy/index.js: Execute sh deployment (custom deploy.sh required).
multi/index.js: Execute multiple scripts simultaneously.
gitupdate/index.js: Execute sh submission (custom gitupdate.sh required).
read-folder/index.js.
start-end/close-volume.js: Mute the computer.
schedule/auto-nodejs: Scheduler.
```

Additional custom scripts can be added in /routes/bin.

### Technology Stack

Koa backend service.

Koa-static static service.

Koa-routers routing service.

Koa-view ejs view.

### Why Auto-NodeJS?

Do something for yourself: Create a project for daily tasks such as backup and data submission.

Embrace automation: Simple repetitive tasks can be automated, and many tasks follow patterns that can be standardized and automated.

One-time development, multiple uses.


