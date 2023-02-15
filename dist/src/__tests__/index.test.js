"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../index");
describe("testing routes", () => {
    describe("get testing route", () => {
        describe("given the testing route does not exist", () => {
            it("should return a 404", async () => {
                const Id = "123***";
                await (0, supertest_1.default)(index_1.app).get(`/testing_router/${Id}`).expect(404);
            });
        });
        describe("given the testing route does exist", () => {
            it("should return a 200 status and China birth data", async () => {
                const { body, statusCode } = await (0, supertest_1.default)(index_1.app).get(`/testing_router?birth=China`);
                expect(statusCode).toBe(200);
                expect(body).not.toContain({
                    id: 61,
                    name: "Justinn",
                    gender: "Female",
                    birth: "Japan",
                    current: "France",
                    visited: [
                        {
                            name: "Oman",
                        },
                        {
                            name: "Sweden",
                        },
                    ],
                });
            });
            describe("given the testing route does exist", () => {
                it("should return a 200 status and 100 id object", async () => {
                    const { body, statusCode } = await (0, supertest_1.default)(index_1.app).get(`/testing_router/100`);
                    expect(statusCode).toBe(200);
                    expect(body).toEqual({
                        id: 100,
                        name: "Lombard",
                        gender: "Male",
                        birth: "China",
                        current: "France",
                        visited: [
                            {
                                name: "China",
                            },
                            {
                                name: "Nicaragua",
                            },
                            {
                                name: "China",
                            },
                            {
                                name: "Kenya",
                            },
                            {
                                name: "Japan",
                            },
                        ],
                    });
                });
            });
            it("should return a 200 status and Japan birth data", async () => {
                const { body, statusCode } = await (0, supertest_1.default)(index_1.app).get(`/testing_router?birth=Japan`);
                expect(statusCode).toBe(200);
                expect(body).not.toContain({
                    id: 1,
                    name: "Ellissa",
                    gender: "Female",
                    birth: "China",
                    current: "Japan",
                    visited: [
                        {
                            name: "Azerbaijan",
                        },
                        {
                            name: "Cameroon",
                        },
                        {
                            name: "Morocco",
                        },
                        {
                            name: "Indonesia",
                        },
                        {
                            name: "China",
                        },
                    ],
                });
            });
        });
    });
    describe("deleting testing route", () => {
        describe("route deleting", () => {
            it("should return a 200 and delete data", async () => {
                const { statusCode, body } = await (0, supertest_1.default)(index_1.app)
                    .delete("/testing_router/999");
                expect(statusCode).toBe(200);
            });
        });
    });
    describe("post testing route", () => {
        describe("route posting", () => {
            it("should return a 201 and create new data", async () => {
                const { statusCode, body } = await (0, supertest_1.default)(index_1.app)
                    .post("/testing_router")
                    .send({
                    name: "Giacobo",
                    gender: "Male",
                    birth: "United States",
                    current: "United States",
                    visited: [
                        { name: "Uzbekistan" },
                        { name: "Argentina" },
                        { name: "Portugal" },
                    ],
                });
                expect(statusCode).toBe(201);
            });
        });
    });
    describe("post testing route", () => {
        describe("route posting", () => {
            it("should return a 201 and create new data", async () => {
                const { statusCode, body } = await (0, supertest_1.default)(index_1.app)
                    .post("/testing_router")
                    .send({
                    name: "Robin",
                    gender: "FeMale",
                    birth: "UK",
                    current: "United States",
                    visited: [
                        { name: "Argentina" },
                        { name: "Portugal" },
                        { name: "Uzbekistan" },
                    ],
                });
                expect(statusCode).toBe(201);
            });
        });
    });
});
//# sourceMappingURL=index.test.js.map