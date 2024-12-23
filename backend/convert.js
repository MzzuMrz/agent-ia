const bs58 = require("bs58");

const privateKeyBytes = [44,127,63,60,3,5,4,181,162,42,63,1,121,108,52,226,35,192,222,10,82,208,28,52,39,14,54,35,243,254,184,21,106,179,230,75,122,145,108,120,139,54,145,5,255,47,232,143,76,217,241,69,133,252,177,84,216,115,114,233,29,159,97,32]

// Convertir a Base58
const privateKeyBase58 = bs58.default.encode(Buffer.from(privateKeyBytes));
console.log("Clave privada en Base58:", privateKeyBase58);
