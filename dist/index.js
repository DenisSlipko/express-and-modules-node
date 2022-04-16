"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const config_1 = require("./config");
const app_1 = __importDefault(require("./routes/app"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(app_1.default);
const start = async () => {
    try {
        await mongoose_1.default.connect(config_1.MONGODB_URI);
        app.listen(config_1.PORT, () => {
            console.log(`server is listening on port ${config_1.PORT}`);
        });
    }
    catch (e) {
        console.log(e);
    }
};
start();
