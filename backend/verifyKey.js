const bs58 = require("bs58");
const { Keypair } = require("@solana/web3.js");

// Reemplaza con tu nueva clave privada en Base58
const privateKeyBase58 = "tbkC4i3ZMLAL57rL2EoXAFsBqFZU1CRJXzz4fzQ81RxsJr27J6bodQSbVdrpmcEkhgSLB2nYqivX4ZTNEPxLpf1";

try {
  // Decodificar la clave privada
  const privateKeyBytes = bs58.default.decode(privateKeyBase58);

  // Crear un Keypair a partir de la clave privada
  const keypair = Keypair.fromSecretKey(Uint8Array.from(privateKeyBytes));

  // Mostrar la dirección pública asociada
  console.log("Dirección pública asociada:", keypair.publicKey.toString());
} catch (error) {
  console.error("Error al verificar la clave privada:", error.message);
}
