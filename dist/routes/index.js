"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const index_1 = __importDefault(require("./user/index"));
const router = new router_1.default({
    prefix: '/api'
});
router.use(index_1.default.routes());
exports.default = router;
//# sourceMappingURL=index.js.map