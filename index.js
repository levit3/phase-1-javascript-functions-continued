function saturdayFun(activity = "roller-skate") {
    let sent = `This Saturday, I want to ${activity}!`
    return sent
}
function mondayWork(activity = "go to the office") {
    let sent = `This Monday, I will ${activity}.`
    return sent
}
function wrapAdjective(style= "*"){
    return function (msg= "a hard worker") {
        return `You are ${style}${msg}${style}!`
    }
}
function wrapAdjective(style = "|") {
    return function(msg="a dedicated programmer") {
        return `You are ${style}${msg}${style}!`
    }
}
