import type { IColorAdd, IObject, IFormatRGB } from '.././typescript/interfaces';
import colors from './bashColors';
export class ColorsConsole {
	public static colors: IObject = colors;

	static color(word: string, name: string) {
		const color = this.colors[name.toLocaleLowerCase()]
		if (!color) throw new Error('Color ' + name + 'no exist.')
		return color + word + this.colors.reset
	}
	static addColor(name: string, rgb: IFormatRGB) {
		if (!name) throw new Error('[MISSING_PARAMETER] Missing name parameter.')
		if (!rgb || !rgb.r || !rgb.g || !rgb.b) throw new TypeError('Invalid rgb format received : ' + rgb)
		if (rgb.r < 0 || rgb.r > 255) throw new Error('Invalid rgb format received : ' + rgb)
		if (rgb.g < 0 || rgb.g > 255) throw new Error('Invalid rgb format received : ' + rgb)
		if (rgb.b < 0 || rgb.b > 255) throw new Error('Invalid rgb format received : ' + rgb)
		this.colors.name = `\x1B[48;${rgb.r};${rgb.g};${rgb.b};0m`;
	}
	static addColors(arg: Array<IColorAdd>) {
		if (!Array.isArray(arg)) throw new TypeError('Argument must be a string received ' + arg)
		if (!arg[0]) throw new TypeError('[INVALID_PARAMETER] Array is empty.')
		return arg.every(i => this.addColor(i.name, i.value))
	}
	public static bold(str: string) {
		const atribute = this.colors.bold
		return atribute + str + this.colors.reset
	}
	public static italic(str: string) {
		const atribute = this.colors.italic
		return atribute + str + atribute
	}
	public static underline(str: string) {
		const atribute = this.colors.underline
		return atribute + str + this.colors.reset
	}
	public static reverse(str: string) {
		const atribute = this.colors.reverse
		return atribute + str + this.colors.reset
	}
	public static reset(str: string) {
		const atribute = this.colors.reset
		return atribute + str + atribute
	}
}
export default { ColorsConsole }