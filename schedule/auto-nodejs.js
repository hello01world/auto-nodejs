const { exec, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

/**
 *
 * @param {*} outputs 任务组
 */
function runTasks(outputs) {
  try {
    outputs.forEach((item) => {
      runTask(item.binFile, item.logFile);
    });
    console.log("runTasks success");
  } catch (error) {
    console.log("runTasks fail:" + error);
  }
}

/**
 *
 * @param {*} binFile 脚本文件路径
 * @param {*} logFile 日志文件路径
 */
function runTask(binFile, logFile) {
  let output = execSync(`node ${binFile}`, {
    encoding: "utf-8",
    stdio: "pipe",
  });
  const stdout = output.toString();
  console.log(`执行成功，输出: ${stdout}`);

  let log = fs.readFileSync(logFile, "utf8");
  log = `${new Date(Date.now())}</br>${stdout}</br>${log}</br>`;
  fs.writeFileSync(logFile, log, "utf8");
}

/**
 *
 * @param {*} tasks 任务组
 * @param {*} runTasks 任务函数
 */
function runEvertyDayTask(tasks, runTasks) {
  // 计算距离下午5点还有多少毫秒
  const now = new Date(); // 不同的时区显示不同

  const executionTimes = [
    { hour: 11, minute: 0, second: 0 },
    { hour: 17, minute: 0, second: 0 },
    { hour: 22, minute: 0, second: 0 },
    // 添加更多时间点，例如 { hour: 8, minute: 30, second: 0 }
  ];

  // 找到下一个要执行的时间点
  let nextExecutionTime;
  for (const time of executionTimes) {
    console.log(
      `定时任务将在 ${time.hour}:${time.minute}:${time.second} 执行。`
    );
    const taskTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      time.hour,
      time.minute,
      time.second
    );
    if (taskTime > now) {
      nextExecutionTime = taskTime;
      break;
    }
  }

  if (!nextExecutionTime) {
    // 如果没有找到下一个执行时间点，等待到明天的第一个时间点
    nextExecutionTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      executionTimes[0].hour,
      executionTimes[0].minute,
      executionTimes[0].second,
      0
    );
  }

  const timeUntilNextExecution = nextExecutionTime - now;

  // 设置定时器，延迟执行任务
  setTimeout(() => {
    console.log(`定时任务执行时间: ${new Date()}`);
    // runTask(binFile, logFile);
    runTasks(tasks);
    runEvertyDayTask(); // 设置下一个定时器
  }, timeUntilNextExecution);
}

// 每天任务组
const evertyDayTask = [
  {
    binFile: path.join(
      __dirname,
      "../",
      "/routes/auto-nodejs/bin/multi/multi-demo.js"
    ),
    logFile: path.join(__dirname, "../", "/logs/auto-nodejs.log"),
  },
];

// 每天定时任务
runEvertyDayTask(evertyDayTask, runTasks);
