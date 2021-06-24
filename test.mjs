// import { ResolveColor } from './build/colors/resolve.js'

// const convert = new ResolveColor();

// console.log(convert.findByName('orange', { sortBy: 'name', limit: 'Infinity' }));

import { ColorsConsole } from './build/bash/bash.js';

console.log(
	ColorsConsole.reverse(
		ColorsConsole.bold(
			ColorsConsole.color('test', 'fgred')
		)
	)
);
