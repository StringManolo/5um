"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const ffi_napi_1 = __importDefault(require("ffi-napi"));
const path_1 = __importDefault(require("path"));
const libHash5um = ffi_napi_1.default.Library(path_1.default.join(__dirname, 'c', 'hash5um'), {
    hash5um: ['ulonglong', ['string']],
});
module.exports = function hash5um(inputFile) {
    return BigInt(libHash5um.hash5um(inputFile));
};
