"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketsRouter = void 0;
// express is the framework we're going to use to handle requests
const express_1 = __importDefault(require("express"));
// retrieve the router object from express
const ticketsRouter = express_1.default.Router();
exports.ticketsRouter = ticketsRouter;
let groups = [
    { "studentA": "Abe", "studentB": "Jeremiah", "needsHelp": false, "ticketSubmitted": undefined }
    //{"Ethan", "Conner", true, new Date() }
];
//   ~ TODO REPLACE WITH DATABASE ~
/**
 * @api {get} /hello Request a Hello World message
 * @apiName GetHello
 * @apiGroup Hello
 *
 * @apiDescription TL;DR Use the HTTP GET methods when requesting a resource from
 * an http server/service. The HTTP GET maps to the (R - read) in the acronym CRUD for the
 * common operations performed on a database.
 *
 * @apiSuccess {String} message the String: "Hello, you sent a GET request"
 */
ticketsRouter.get('/', (request, response) => {
    response.send(groups);
});
//# sourceMappingURL=tickets.js.map