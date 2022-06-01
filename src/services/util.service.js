export const utilService = {
    makeId,
    isValidUrl,
    isValidImg,
    addFile
    
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


function addFile(fileUrl){
    // attachs = []
    const attach = {
        id: makeId(),
        fileName: `${makeId(12)}.jpg`,
        url: fileUrl,
        createdAt: Date.now()
    }
}