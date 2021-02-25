const formatVolumeIconPath = require('../assets/scripts/main');
const format = require('../assets/scripts/main');

describe('volumeValue is ', () => {
    test('above 66', () => {
        expect(formatVolumeIconPath(67)).toBe('./assets/media/icons/volume-level-3.svg');
    });
    test('above 33', () => {
        expect(formatVolumeIconPath(34)).toBe('./assets/media/icons/volume-level-2.svg');
    });
    test('above 0', () => {
        expect(formatVolumeIconPath(1)).toBe('./assets/media/icons/volume-level-1.svg');
    });
    test('equal to 0', () => {
        expect(formatVolumeIconPath(0)).toBe('./assets/media/icons/volume-level-0.svg');
    });
})
