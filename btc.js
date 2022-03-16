const bitcoinjs = require( 'bitcoinjs-lib' );

const pubkey = Buffer.from( '0250863ad64a87ae8a2fe83c1af1a8403cb53f53e486d8511dad8a04887e5b2352', 'hex' );
const { address } = bitcoinjs.payments.p2pkh({ pubkey });
console.log( address ); // 1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs