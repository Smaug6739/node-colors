"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorsConsole = exports.ResolveColor = exports.ColorsConverter = void 0;
var convert_1 = require("./converter/convert");
Object.defineProperty(exports, "ColorsConverter", { enumerable: true, get: function () { return convert_1.ColorsConverter; } });
var resolve_1 = require("./colors/resolve");
Object.defineProperty(exports, "ResolveColor", { enumerable: true, get: function () { return resolve_1.ResolveColor; } });
var bash_1 = require("./bash/bash");
Object.defineProperty(exports, "ColorsConsole", { enumerable: true, get: function () { return bash_1.ColorsConsole; } });
