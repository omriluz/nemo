export const utilService = {
    makeId,
    isValidUrl,
    isValidImg,
    getDateByTimestamp,
    timeSince
    
}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function isValidUrl(txt) {
    const urlExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g
    return urlExp.test(txt)
}


function isValidImg(filename) {
    return (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(filename)
}


function getDateByTimestamp(timestamp) {
    const currYear = new Date().getFullYear()
    const dueYear = new Date(timestamp).getFullYear()
    let strDate = ''
    strDate += `${new Date(timestamp).toLocaleString('en-GB', { day: 'numeric' })} `
    strDate += `${new Date(timestamp).toLocaleString('en-GB', { month: 'short' })} at `
    if (dueYear !== currYear) {
        strDate += `${dueYear} `
    }
    strDate += `${new Date(timestamp).toLocaleString('en-GB',
        { hour: 'numeric', minute: 'numeric', hour12: true }).toLocaleUpperCase()}`
    return strDate
}


function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        if (Math.floor(interval) === 1) return "a year ago";
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        if (Math.floor(interval) === 1) return "a month ago";
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        if (Math.floor(interval) === 1) return "a day ago";
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        if (Math.floor(interval) === 1) return "an hour ago";
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        if (Math.floor(interval) === 1) return "Just now";
        return Math.floor(interval) + " minutes ago";
    }
    if (Math.floor(seconds) === 0) return "Just now";
    return Math.floor(seconds) + " seconds ago";
}

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}