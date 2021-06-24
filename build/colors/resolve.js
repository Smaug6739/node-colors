"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolveColor = void 0;
const list_json_1 = __importDefault(require("./list.json"));
class ResolveColor {
    constructor() {
        this.colors = list_json_1.default;
    }
    find(arg, options) {
        const match = list_json_1.default.filter(c => c.name.toLocaleLowerCase().match(arg) || c.hex.toLocaleLowerCase().match(arg) || c.rgb.toLocaleLowerCase().match(arg));
        return this.prepar(match, options);
    }
    findByName(arg, options) {
        const match = list_json_1.default.filter(c => c.name.toLocaleLowerCase().match(arg));
        return this.prepar(match, options);
    }
    findByHex(arg, options) {
        const match = list_json_1.default.filter(c => c.hex.toLocaleLowerCase().match(arg));
        return this.prepar(match, options);
    }
    findByRgb(arg, options) {
        const match = list_json_1.default.filter(c => c.rgb.toLocaleLowerCase().match(arg));
        return this.prepar(match, options);
    }
    prepar(results, options) {
        if (options === null || options === void 0 ? void 0 : options.sortBy) {
            if (options.sortBy.toLocaleLowerCase() === 'hex')
                results.sort((a, b) => (a.hex > b.hex) ? 1 : ((b.hex > a.hex) ? -1 : 0));
            if (options.sortBy.toLocaleLowerCase() === 'name')
                results.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
            if (options.sortBy.toLocaleLowerCase() === 'rgb')
                results.sort((a, b) => (a.rgb > b.rgb) ? 1 : ((b.rgb > a.rgb) ? -1 : 0));
        }
        if (options === null || options === void 0 ? void 0 : options.limit) {
            if (isNaN(options.limit))
                throw new TypeError('[INVALID_TYPE] options.limit must be a number.');
            if (typeof options.limit !== 'number')
                options.limit = parseInt(options.limit, 10);
            if (!isNaN(options.limit))
                results.splice(0, (results.length - options.limit));
        }
        return results;
    }
}
exports.ResolveColor = ResolveColor;
