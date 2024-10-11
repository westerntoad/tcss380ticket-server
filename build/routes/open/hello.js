"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloRouter = void 0;
// express is the framework we're going to use to handle requests
const express_1 = __importDefault(require("express"));
// retrieve the router object from express
const helloRouter = express_1.default.Router();
exports.helloRouter = helloRouter;
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
helloRouter.get('/', (request, response) => {
    response.send({
        message: 'Hello, you sent a GET request',
    });
});
/**
 * @api {post} /hello Request a Hello World message
 * @apiName PostHello
 * @apiGroup Hello
 *
 * @apiDescription TL;DR Use the HTTP POST methods when creating a new resource on
 * an http server/service. The HTTP POST maps to the (C - create) in the acronym CRUD for the
 * common operations performed on a database.
 *
 * @apiSuccess {String} message the String: "Hello, you sent a POST request"
 */
helloRouter.post('/', (request, response) => {
    response.send({
        message: 'Hello, you sent a POST request',
    });
});
/**
 * @api {put} /hello Request a Hello World message
 * @apiName PutHello
 * @apiGroup Hello
 *
 * @apiDescription TL;DR Use the HTTP PUT methods when altering/changing aa exsisting resource on
 * an http server/service. The HTTP PUT maps to the (U - update) in the acronym CRUD for the
 * common operations performed on a database.
 *
 * @apiSuccess {String} message the String: "Hello, you sent a PUT request"
 */
helloRouter.put('/', (request, response) => {
    response.send({
        message: 'Hello, you sent a PUT request',
    });
});
/**
 * @api {delete} /hello Request a Hello World message
 * @apiName DeleteHello
 * @apiGroup Hello
 *
 * @apiDescription TL;DR Use the HTTP DELETE methods when delteing an exsiting resource on
 * an http server/service. The HTTP DELETE maps to the (D - delete) in the acronym CRUD for the
 * common operations performed on a database.
 *
 * @apiSuccess {String} message the String: "Hello, you sent a DELETE request"
 */
helloRouter.delete('/', (request, response) => {
    response.send({
        message: 'Hello, you sent a DELETE request',
    });
});
//# sourceMappingURL=hello.js.map