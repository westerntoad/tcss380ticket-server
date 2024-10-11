"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const open_1 = require("./open");
const routes = express_1.default.Router();
exports.routes = routes;
routes.use(open_1.openRoutes);
//# sourceMappingURL=index.js.map