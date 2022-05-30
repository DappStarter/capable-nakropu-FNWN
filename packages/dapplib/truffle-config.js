require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note ridge coin include knee bubble gas'; 
let testAccounts = [
"0x3825090375f3d800539083fd1067305a4aecc67cc994de73c705bf7e36db1c03",
"0x9ad75304cfee218a9754cd0d0f8b59af1add12648125bd921855b4b0abcc3617",
"0x1aac455fec82f4d56adf75a11e7042a70925e39e6e8fcf0042d31e54f96e6af7",
"0x8f8ff133822a0c43f1c80dfbca9e589b4a44f287087fe57e758eac9bb1e6ea92",
"0xd50483308001fe11da87c3444f3a574d84840cc83f37b5d3d63162687a755f5d",
"0x3fdc6ffe51c06226cb7ab00087cff0db8d8dd66485a5bef5621e7112d07c970d",
"0xce612f966b25ceaf810ef4be5b53da31cfd50db27e39e156f796a16b1c7a9af4",
"0xe67d6964462f2a2dd726e25fc024e70f0e1c09115c690caf2eadb34ad85baffb",
"0x75c8683994b67a49006774ed9606d0cbc656b9a251bf134c14f042e686bfba7c",
"0x9c3e35fabe344f5b41387d901b5391d9a0ac02136c45b5afb9c03e29799d4860"
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

