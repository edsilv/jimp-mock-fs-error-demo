const mock = require('mock-fs');
const Jimp = require('jimp');

before(async () => {
    mock({
        '/cat': {
            'cat.jpg': new Buffer(require('./fixtures/cat-jpg'))
        }
    });
})

after(async () => {
    mock.restore();
});

it('can create a thumbnail', async () => {
    const image = await Jimp.read('c:\cat\cat.jpg');
    const thumb = image.clone();
    thumb.cover(100, 100);
});