import imageCompression from 'browser-image-compression';

export function compressFile(imageFile: any) {
    const options = {
        maxSizeMB: 5,
        maxWidthOrHeight: 1920,
        useWebWorker: true
    }
    return new Promise((resolve, reject) => {
        imageCompression(imageFile, options)
            .then(function (compressedFile) {
                resolve(compressedFile)
            })
            .catch(function (error) {
                reject(error.message)
            });
    })
}