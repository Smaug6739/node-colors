import colors from './list.json';
import type { IColor, IFindOptions } from '../typescript/interfaces'
export class ResolveColor {
	colors: Array<IColor>
	constructor() {
		this.colors = colors
	}
	find(arg: string, options: IFindOptions) {
		const match = colors.filter(c => c.name.toLocaleLowerCase().match(arg) || c.hex.toLocaleLowerCase().match(arg) || c.rgb.toLocaleLowerCase().match(arg))

		return this.prepar(match, options);
	}
	findByName(arg: string, options: IFindOptions) {
		const match = colors.filter(c => c.name.toLocaleLowerCase().match(arg))

		return this.prepar(match, options);
	}
	findByHex(arg: string, options: IFindOptions) {
		const match = colors.filter(c => c.hex.toLocaleLowerCase().match(arg))

		return this.prepar(match, options);
	}
	findByRgb(arg: string, options: IFindOptions) {
		const match = colors.filter(c => c.rgb.toLocaleLowerCase().match(arg))

		return this.prepar(match, options);
	}
	private prepar(results: Array<IColor>, options: IFindOptions) {
		if (options?.sortBy) {
			if (options.sortBy.toLocaleLowerCase() === 'hex') results.sort((a, b) => (a.hex > b.hex) ? 1 : ((b.hex > a.hex) ? -1 : 0))
			if (options.sortBy.toLocaleLowerCase() === 'name') results.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
			if (options.sortBy.toLocaleLowerCase() === 'rgb') results.sort((a, b) => (a.rgb > b.rgb) ? 1 : ((b.rgb > a.rgb) ? -1 : 0))
		}
		if (options?.limit) {
			if (isNaN(options.limit)) throw new TypeError('[INVALID_TYPE] options.limit must be a number.')
			if (typeof options.limit !== 'number') options.limit = parseInt(options.limit, 10)
			if (!isNaN(options.limit)) results.splice(0, (results.length - options.limit))
		}
		return results;
	}
}