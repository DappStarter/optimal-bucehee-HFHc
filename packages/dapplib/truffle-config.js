require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth mean property grace drip flock gentle'; 
let testAccounts = [
"0x1b0c72a6313f60c2666909871460066af61a9b064ba9e180b56aa4b8b326a36d",
"0x890ee7dd3199ade68673b748abfd1fc46b25e95e4bdff3fce23a842858e6656f",
"0xf39fdb893df88e0cbbc8ec0d8f3cdc190414cb939e9c0a8b3c926b067f787424",
"0x120179b804fd34d747e33d5a65b7eba82660b447c449c03e81f2e1c2e52ba2b0",
"0xafc1451fa4a3ca0c78c944989267338df6791a0920730f3cae1ee7cf6bdae062",
"0x4ce25f46c5fb72b9d3cc0daba0b69f4ef1532a4c7024423b4173eb0e1699cd04",
"0x5072fcd5679f7c526d41102a0a2b2460f797a66acba6e60ef62d4b89822ca01f",
"0x70cc1dc698221f230196cc2259a0b400104da5dfcc6c85528d36335d150b5e18",
"0x7c6549c7070baf84b8a6ac37783af2f11881890e9ea6137aef21fe73213db4b3",
"0xf6213bcfc89775e4eef434bbfdd8cc5fbd19085814cb30959df1e9799552ab34"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

