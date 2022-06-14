function saturdayFun(done = "roller-skate"){
    return `This Saturday, I want to ${done}!`
}

let mondayWork = function (done ="go to the office"){
    return `This Monday, I will ${done}.`
}

let wrapAdjective = function(drop="*"){
    return function (adject= "Good"){
    return `You are ${drop}${adject}${drop}!`
}
}