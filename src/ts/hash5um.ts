import ffi from 'ffi-napi';
import path from 'path';

const libHash5um = ffi.Library(path.join(__dirname, 'c', 'hash5um'), {
  hash5um: ['ulonglong', ['string']],
});

export = function hash5um(inputFile: string): bigint {
  return BigInt(libHash5um.hash5um(inputFile));
}
