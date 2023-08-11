#!/usr/bin/env node

import hash5um from "./hash5um";

const inputFile = process.argv[2];
const hash = hash5um(inputFile);

console.log(hash.toString(16));
