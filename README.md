# 5um
Fast "hash" algorithm designed for insecure hashing usage.  
Sometimes you need a fast hash but you don't care about the security of the hash. 

#### Use Cases
- Detect if a file has changed  
You can check if a file has changed by using this hash funcion.
- Fast Lookup in Large Data Sets    
If you need to compare large volumes of data and only require a quick match  
- Duplicate Detection  
You can employ "5um" to identify duplicates in extensive file collections where precision isn't critical, and you only need a fast way to identify similar files  
- Real-time Checksum Generation  
In applications where rapid data integrity checks are needed in real-time, "5um" could provide a balance between speed and simplicity  
- Cache Key Generation  
If you wish to use a hash for caching and retrieving data, and security isn't a concern, "5um" could be suitable  
- Search Algorithm Optimization  
Certain search algorithms, such as those based on hash tables, might benefit from a fast hash like "5um" to expedite the search process  

#### Installation
1. Install the package
```bash
npm install 5um
```

2. Compile the c function for your architecture
```bash
gcc -o ./node_modules/5um/dist/c/hash5um.so -shared -fPIC ./node_modules/5um/src/c/hash5um.c
```

#### Usage
- As a system command  

```bash
npx 5um hello.txt
```

- As a module
```javascript
const hash5um = require("5um");

const inputFile = process.argv[2];
const hash = hash5um('./hello.txt'); // returns a BigInt

console.log(hash.toString(16));
```


```typescript
// npm install --save-dev @types/ffi-napi

import hash5um from "5um";

const inputFile = process.argv[2];
const hash = hash5um('./hello.txt'); // returns a BigInt

console.log(hash.toString(16));
```

##### Characteristics
- Fast
- Easy to use
- Insecure
- Reversible
- Predictable
- Collisions
