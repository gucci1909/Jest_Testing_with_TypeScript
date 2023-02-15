"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// importing fs from built-in library
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
// Made a dummy data from https://www.mockaroo.com/
const data_json_1 = __importDefault(require("../data.json"));
const router = (0, express_1.Router)();
exports.router = router;
const outputPath = path_1.default.join(__dirname, '../data.json');
// Route get method
router.get("/", (req, res) => {
    // writing if else for making a jest test case according to the situation
    let { birth, current } = req.query;
    if (birth) {
        // filtering data according to the condition
        let new_data = data_json_1.default.filter((el) => el.birth === birth);
        res.status(200).send(new_data);
    }
    else if (current) {
        // filtering data according to the condition
        let new_data = data_json_1.default.filter((el) => el.current === current);
        res.send(new_data);
    }
    else {
        // Sending the default data if no condition is there
        res.status(200).set("content-type", "application/json").send(data_json_1.default);
    }
});
router.get("/:id", (req, res) => {
    // taking id of the object of the data from params
    const id = req.params.id;
    const numID = Number(id);
    // using find function for matching the id
    const new_data = data_json_1.default.find((el) => el.id === numID);
    // using if else , as if there is any error we can send a response
    if (new_data) {
        res.status(200).set("content-type", "application/json").send(new_data);
    }
    else {
        res.status(404).send(`this is a invalid ${id} request`);
    }
});
router.delete("/:id", (req, res) => {
    // taking id from which we can delete any object
    let id = req.params.id;
    let numID = Number(id);
    let found = data_json_1.default.map((el) => el.id === numID);
    if (found) {
        let new_data = data_json_1.default.filter((el) => el.id !== numID);
        // writing new data
        fs.writeFile(outputPath, JSON.stringify(new_data), "utf-8", () => {
            res.status(200).send(`Deleted Successfully ${id}`);
        });
    }
    else {
        // sending error
        res.status(404).send(`invalid ${id}`);
    }
});
router.post("/", (req, res) => {
    // taking out object from req
    let new_data = {
        ...req.body,
        id: Date.now(),
    };
    // pushing the new_data into data
    data_json_1.default.push(new_data);
    // writingFile with use of fs
    fs.writeFile(outputPath, JSON.stringify(data_json_1.default), "utf-8", () => {
        res.status(201).send(data_json_1.default);
    });
});
// making a patch request
router.patch("/:id", (req, res) => { });
//# sourceMappingURL=crud.js.map