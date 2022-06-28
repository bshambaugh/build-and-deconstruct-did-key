//import * as varint from 'varint'
import { compressedKeyInHexfromRaw, encodeDIDfromHexString } from 'did-key-creator'
import varint from 'varint'
import { base58btc } from 'multiformats/bases/base58'
import * as u8a from 'uint8arrays'
//import { getResolver } from "key-did-resolver";

import * as KeyDIDResolver from '/home/ubuntu/Downloads/nov22nd/js-ceramic/packages/key-did-resolver/lib/index.js'
//import('key-did-resolver')

//import * as keydidresolver from 'key-did-resolver'

//import KeyDIDResolver from 'key-did-resolver'

//import('/home/ubuntu//Downloads/nov22nd/js-ceramic/packages/key-did-resolver/lib/index.js');

const didkey = 'did:key:z82Lm1MpAkeJcix9K8TMiLd5NMAhnwkjjCBeWHXyu3U4oT2MVJJKXkcVBgjGhnLBn2Kaau9';

const splitkey = didkey.split(':');

const didkeyid = splitkey[2];

console.log(didkeyid);

const multicodecPubKey = base58btc.decode(didkeyid);

console.log(multicodecPubKey);

varint.decode(multicodecPubKey);

const keyType = varint.decode(multicodecPubKey);

console.log(keyType);


const pubKeyBytes = multicodecPubKey.slice(varint.decode.bytes);

console.log(pubKeyBytes);


//console.log(raffiki.nist_weierstrass_common.pubKeyBytesToHex(pubKeyBytes));

//const keyDidResolver = KeyDIDResolver.getResolver()

/*
console.log(pubKeyBytesToHex(pubKeyBytes));
console.log(rawKey);
*/

//console.log(KeyDIDResolver.nist_weierstrass_common.testHexString('fla'));

console.log(KeyDIDResolver.nist_weierstrass_common.pubKeyBytesToHex(pubKeyBytes));

const uncompressedKey = KeyDIDResolver.secp384r1.ECPointDecompress(pubKeyBytes)

const uncompressedKeyInt = KeyDIDResolver.nist_weierstrass_common.publicKeyIntToUint8ArrayPointPair(uncompressedKey);

console.log(uncompressedKeyInt);

const uncompressedKeyHex = u8a.toString(uncompressedKeyInt.xOctet,'base16') + u8a.toString(uncompressedKeyInt.yOctet,'base16')

console.log(uncompressedKeyHex);

const multicodecName = 'p384-pub';
const compressedKey = compressedKeyInHexfromRaw(uncompressedKeyHex);
const didkeyRebuilt = encodeDIDfromHexString(multicodecName,compressedKey);

console.log(didkey);
console.log(didkeyRebuilt);
/*
function pubKeyBytesToHex(pubKeyBytes: Uint8Array) : string {
    if(!testUint8Array(pubKeyBytes)) {
      throw new TypeError('input must be a Uint8Array');
    }
   const bbf = u8a.toString(pubKeyBytes,'base16')
   return bbf;
}

function testUint8Array(param: Uint8Array) : boolean {
    if(param == null) {
       return false;
    }
    if(param.constructor === Uint8Array) {
       return true;
    } else {
       return false;
    }
}
*/

/*
interface BigIntPoint {
    x: BigInt,
    y : BigInt
 }

 interface octetPoint {
    xOctet: Uint8Array,
    yOctet: Uint8Array
  }

function publicKeyIntToUint8ArrayPointPair(ecpoint: BigIntPoint) : octetPoint {
    if(ecpoint == null) { throw new TypeError('input cannot be null or undefined.'); }

    if(typeof ecpoint !== "object") { throw new TypeError("Input must be an object with properties x and y"); }

    if(!Object.prototype.hasOwnProperty.call(ecpoint, "x") ||  !Object.prototype.hasOwnProperty.call(ecpoint, "y")) { throw new Error("Input must have properties x and y"); }

    if(typeof ecpoint.x !== "bigint" &&  typeof ecpoint.y !== "bigint") { throw new Error("Input coordinates must be BigInt");  }

      const xHex = (ecpoint.x).toString();
      const yHex = (ecpoint.y).toString();
      const xOctet = u8a.fromString(xHex,'base10');
      const yOctet = u8a.fromString(yHex,'base10');
      return { xOctet, yOctet };
}

function ECPointDecompress( comp : Uint8Array ) : BigIntPoint {
    if(!testUint8Array(comp)) {
      throw new TypeError('input must be a Uint8Array');
     }
    // two, prime, b, and pIdent are constants for the P-256 curve
    const two = BigInt(2);
    const prime = (two ** 256n) - (two ** 224n) + (two ** 192n) + (two ** 96n) - 1n;
    const b = 41058363725152142129326129780047268409114441015993725554835256314039467401291n;
    const pIdent = (prime + 1n) / 4n;
  
    const signY = BigInt(comp[0] - 2);
    const x = comp.subarray(1);
    const xBig = BigInt(u8a.toString(x,'base10'));
  
    const a = xBig**3n - xBig*3n + b;
    let yBig = bigintModArith.modPow(a,pIdent,prime);
  
    // "// If the parity doesn't match it's the *other* root"
    if( yBig % 2n !== signY)
      {
           // y = prime - y
           yBig = prime - yBig;
      }
  
      return {
        x: xBig,
        y: yBig
      };
  
  }
  */
