export interface IFormatRGB {
	r: number;
	g: number;
	b: number;
}

export interface IColor {
	hex: string;
	name: string;
	rgb: string;
}

export interface IFindOptions {
	limit: number;
	sortBy: string;
}
export interface IColorsBash {
	name: string;
	value: string;
}

export interface IColorAdd {
	name: string;
	value: IFormatRGB;
}
export interface IObject {
	[index: string]: any
}