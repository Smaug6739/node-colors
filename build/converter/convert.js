"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorsConverter = void 0;
class ColorsConverter {
    /**
     *
     * @param {string} hex hex - The color in hexadecimal format.
     * @returns {}
     */
    convertHexToRGB(hex) {
        if (typeof hex !== 'string')
            throw new TypeError('Hex must be a string.');
        hex.replace('#', '');
        const args = hex.split('');
        if (hex.length == 3) {
            const r = parseInt(`${args[0]}${args[0]}`, 16);
            const g = parseInt(`${args[1]}${args[1]}`, 16);
            const b = parseInt(`${args[2]}${args[2]}`, 16);
            return {
                r: r,
                g: g,
                b: b
            };
        }
        else if (args.length == 6) {
            const r = parseInt(`${args[0]}${args[1]}`, 16);
            const g = parseInt(`${args[2]}${args[3]}`, 16);
            const b = parseInt(`${args[4]}${args[5]}`, 16);
            return {
                r: r,
                g: g,
                b: b
            };
        }
        else {
            throw new TypeError('Invalid hex format :' + hex);
        }
    }
    componentToHex(c) {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    convertRGBToHex(rgb) {
        if (!rgb.r || !rgb.g || !rgb.b)
            throw new TypeError('Invalid RGB format : ' + rgb);
        return "#" + this.componentToHex(rgb.r) + this.componentToHex(rgb.g) + this.componentToHex(rgb.b);
    }
}
exports.ColorsConverter = ColorsConverter;
