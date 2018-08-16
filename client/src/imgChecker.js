var isImg = function(uri) {
    uri = uri.split('?')[0];
    var parts = uri.split('.');
    var extension = parts[parts.length-1];
    var imgTypes = ['jpg', 'jpeg', 'tiff', 'png', 'gif', 'bmp'];
    if(imgTypes.indexOf(extension) !== -1) {
        return true;
    }
}

export default isImg;