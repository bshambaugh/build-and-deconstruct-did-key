import { rawKeyInHexfromUncompressed, compressedKeyInHexfromRaw, encodeDIDfromHexString, encodeDIDfromBytes } from 'did-key-creator'
import varint from 'varint'
import { base58btc } from 'multiformats/bases/base58'

const multicodecName = 'p256-pub';
const rawKey = 'f9c36f8964623378bdc068d4bce07ed17c8fa486f9ac0c2613ca3c8c306d7bb61cd36717b8ac5e4fea8ad23dc8d0783c2318ee4ad7a80db6e0026ad0b072a24f';
const compressedKey = compressedKeyInHexfromRaw(rawKey);

const didkey = encodeDIDfromHexString(multicodecName,compressedKey);

const splitkey = didkey.split(':');

const didkeyid = splitkey[2];

console.log(didkeyid);


