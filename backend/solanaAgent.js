"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agent = void 0;
const solana_agent_kit_1 = require("solana-agent-kit");
const PRIVATE_KEY_BASE58 = process.env.SOLANA_PRIVATE_KEY_BASE58;
const RPC_URL = process.env.SOLANA_RPC_URL || "https://api.devnet.solana.com";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
// Validar que las variables de entorno están definidas
if (!PRIVATE_KEY_BASE58 || !OPENAI_API_KEY) {
    throw new Error("Faltan variables de entorno necesarias. Revisa tu archivo .env.");
}
exports.agent = new solana_agent_kit_1.SolanaAgentKit(PRIVATE_KEY_BASE58, RPC_URL, OPENAI_API_KEY);
