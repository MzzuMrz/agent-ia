const { SolanaAgentKit } = require("solana-agent-kit");
require("dotenv").config();

// Inicializa el agente con las credenciales del entorno
const agent = new SolanaAgentKit(
  process.env.SOLANA_PRIVATE_KEY_BASE58, // Clave privada de tu wallet
  process.env.SOLANA_RPC_URL, // URL del nodo RPC
  process.env.OPENAI_API_KEY // API Key de OpenAI (opcional si usas integraciones de IA)
);

module.exports = agent;
