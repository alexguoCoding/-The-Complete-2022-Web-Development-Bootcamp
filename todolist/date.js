module.exports.getDate = getDate;
function getDate() {
    let date = new Date();
    let options = {
        day: "numeric", month: "numeric",

    };
    var displayTime = date.toLocaleDateString("en-US", options);
    return displayTime;
}
module.exports.getweekDay = getweekDay;
function getweekDay() {
    let date = new Date();
    let options = {
        weekday:"long",

    };
    var displayTime = date.toLocaleDateString("en-US", options);
    return displayTime;
}

