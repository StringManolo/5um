#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hash5um_1 = __importDefault(require("./hash5um"));
const inputFile = process.argv[2];
const hash = (0, hash5um_1.default)(inputFile);
console.log(hash.toString(16));
