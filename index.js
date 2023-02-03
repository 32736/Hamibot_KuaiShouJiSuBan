// import _util from './util'
// console.log(_util)

const _util = {
    click: target => {
        const clickable = target.clickable()

        return clickable ? clickable : click(target.bounds().centerX(), target.bounds().centerY())
    }
}

// 启动 app
const launchAppAction = appName => {
    const launchResult = launchApp(appName);

    launchResult ? console.log(appName + '启动成功!') : console.error(appName + '启动失败!')

    return launchResult
}

// 点击 "去赚钱" 底部页签
const clickToMakeMoneyTab = () => {
    const Tab_ToMakeMoney = textContains('去赚钱').findOne()

    _util.click(Tab_ToMakeMoney)
}

// 每日挑战
const dailyChallenges = () => {
    // className("android.view.View").text("每日挑战").findOne().parent().parent()
    const dailyChallengesText = className("android.view.View").text("每日挑战").findOne().waitFor()
}

// 日常任务
const dailyTasks = () => {
    const dailyTasksBtn = textContains("到饭点领饭补").findOne()
    // console.log(dailyTasksBtn)
    console.log(dailyTasksBtn.parent().parent().findOne(textContains('去领取')))
    click(dailyTasksBtn.parent().parent().findOne(textContains('去领取')))
}

const playVideo = () => {
    const { width, height } = device
    console.log(width, height);
    // swipe()
}

const init = () => {
    // 启动 app
    if (!launchAppAction('快手极速版')) {
        return false
    }

    // 等待 app 启动
    // sleep(5000)
    // 点击 "去赚钱" 底部页签
    // clickToMakeMoneyTab()
    // 每日挑战
    // dailyTasks()
    playVideo()
}

auto.waitFor()
console.clear()
console.show()

init()

sleep(3000)
console.hide()
