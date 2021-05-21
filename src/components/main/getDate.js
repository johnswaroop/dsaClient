function getDate() {
    var today = new Date();
    var month = today.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    var day = today.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    var currentDate = today.getFullYear() + '-' + month + '-' + day;

    return currentDate
}


export default getDate;