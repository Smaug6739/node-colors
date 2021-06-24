"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorsConsole = void 0;
const bashColors_1 = __importDefault(require("./bashColors"));
class ColorsConsole {
    static color(word, name) {
        const color = this.colors[name.toLocaleLowerCase()];
        if (!color)
            throw new Error('Color ' + name + 'no exist.');
        return color + word + this.colors.reset;
    }
    static addColor(name, rgb) {
        if (!name)
            throw new Error('[MISSING_PARAMETER] Missing name parameter.');
        if (!rgb || !rgb.r || !rgb.g || !rgb.b)
            throw new TypeError('Invalid rgb format received : ' + rgb);
        if (rgb.r < 0 || rgb.r > 255)
            throw new Error('Invalid rgb format received : ' + rgb);
        if (rgb.g < 0 || rgb.g > 255)
            throw new Error('Invalid rgb format received : ' + rgb);
        if (rgb.b < 0 || rgb.b > 255)
            throw new Error('Invalid rgb format received : ' + rgb);
        this.colors.name = `\x1B[48;${rgb.r};${rgb.g};${rgb.b};0m`;
    }
    static addColors(arg) {
        if (!Array.isArray(arg))
            throw new TypeError('Argument must be a string received ' + arg);
        if (!arg[0])
            throw new TypeError('[INVALID_PARAMETER] Array is empty.');
        return arg.every(i => this.addColor(i.name, i.value));
    }
    static bold(str) {
        const atribute = this.colors.bold;
        return atribute + str + this.colors.reset;
    }
    static italic(str) {
        const atribute = this.colors.italic;
        return atribute + str + atribute;
    }
    static underline(str) {
        const atribute = this.colors.underline;
        return atribute + str + this.colors.reset;
    }
    static reverse(str) {
        const atribute = this.colors.reverse;
        return atribute + str + this.colors.reset;
    }
    static reset(str) {
        const atribute = this.colors.reset;
        return atribute + str + atribute;
    }
}
exports.ColorsConsole = ColorsConsole;
ColorsConsole.colors = bashColors_1.default;
exports.default = { ColorsConsole };
