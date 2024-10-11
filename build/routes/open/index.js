"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openRoutes = void 0;
const express_1 = __importDefault(require("express"));
const tickets_1 = require("./tickets");
const openRoutes = express_1.default.Router();
exports.openRoutes = openRoutes;
openRoutes.use('/tickets', tickets_1.ticketsRouter);
//# sourceMappingURL=index.js.map