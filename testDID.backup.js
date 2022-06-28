import { rawKeyInHexfromUncompressed, compressedKeyInHexfromRaw, encodeDIDfromHexString, encodeDIDfromBytes } from 'did-key-creator'
import * as varint from 'varint'
import { base58btc } from 'multiformats/bases/base58'

import * as raffiki from '/home/ubuntu/Downloads/nov22nd/js-ceramic/packages/key-did-resolver/lib/index.js'

//import * as keydidresolver from 'key-did-resolver'

import KeyDIDResolver from 'key-did-resolver'
import { getVarintFromCode } from 'multicodec/src/'

//import('/home/ubuntu//Downloads/nov22nd/js-ceramic/packages/key-did-resolver/lib/index.js');

const multicodecName = 'p256-pub';
const rawKey = 'f9c36f8964623378bdc068d4bce07ed17c8fa486f9ac0c2613ca3c8c306d7bb61cd36717b8ac5e4fea8ad23dc8d0783c2318ee4ad7a80db6e0026ad0b072a24f';
const compressedKey = compressedKeyInHexfromRaw(rawKey);

const didkey = encodeDIDfromHexString(multicodecName,compressedKey);

const splitkey = didkey.split(':');

const didkeyid = splitkey[2];

console.log(didkeyid);

const multicodecPubKey = base58btc.decode(didkeyid);

console.log(multicodecPubKey);

//varint.decode(multicodecPubKey);

//const keyType = varint.decode(multicodecPubKey);

//console.log(keyType);

//const pubKeyBytes = multicodecPubKey.slice(varint.decode.bytes);

//console.log(pubKeyBytes);

console.log(raffiki.nist_weierstrass_common.pubKeyBytesToHex(multicodecPubKey));

//const keyDidResolver = KeyDIDResolver.getResolver()
