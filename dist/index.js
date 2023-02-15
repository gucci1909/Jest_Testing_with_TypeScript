"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// importing router from crud.ts
const crud_1 = require("./routes/crud");
// making app to express();
const app = (0, express_1.default)();
// making a port number
const PORT = +process.env.PORT || 3000;
// using express.json() for post request
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// assigning a route here
app.use("/testing_router", crud_1.router);
// listening port here
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map