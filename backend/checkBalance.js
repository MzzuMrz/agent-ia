"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const solana_agent_kit_1 = require("solana-agent-kit");
const dotenv_1 = __importDefault(require("dotenv"));
// Cargar variables del archivo .env
dotenv_1.default.config();
// Configuración del agente
const agent = new solana_agent_kit_1.SolanaAgentKit(process.env.SOLANA_PRIVATE_KEY_BASE58, // Cast necesario porque env devuelve string | undefined
process.env.SOLANA_RPC_URL, process.env.OPENAI_API_KEY);
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Verificar el saldo de la billetera
        const balance = yield agent.getBalance();
        console.log(`Tu saldo en Devnet es: ${balance} SOL`);
    }
    catch (error) {
        console.error("Error al obtener el saldo:", error);
    }
}))();
