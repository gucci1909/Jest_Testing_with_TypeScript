import express, { IRouter, Router, Request, Response } from "express";
// importing fs from built-in library
import * as fs from "fs";
import path from "path";
// Made a dummy data from https://www.mockaroo.com/
import data from "../data.json";

const router: IRouter = Router();
const outputPath = path.join(__dirname, "../data.json");

// Route get method
router.get("/", (req: Request, res: Response): void => {
  // writing if else for making a jest test case according to the situation
  let { birth, current } = req.query;
  if (birth) {
    // filtering data according to the condition
    let new_data: Array<details> = data.filter((el) => el.birth === birth);
    res.status(200).send(new_data);
  } else if (current) {
    // filtering data according to the condition
    let new_data: Array<details> = data.filter((el) => el.current === current);
    res.send(new_data);
  } else {
    // Sending the default data if no condition is there
    res.status(200).set("content-type", "application/json").send(data);
  }
});

router.get("/:id", (req: Request, res: Response) => {
  // taking id of the object of the data from params
  const id = req.params.id;
  const numID = Number(id);
  // using find function for matching the id
  const new_data: details = data.find((el) => el.id === numID);
  // using if else , as if there is any error we can send a response
  if (new_data) {
    res.status(200).set("content-type", "application/json").send(new_data);
  } else {
    res.status(404).send(`this is a invalid ${id} request`);
  }
});

router.delete("/:id", (req: Request, res: Response) => {
  // taking id from which we can delete any object
  let id: string = req.params.id;
  let numID: number = Number(id);
  let found = data.map((el) => el.id === numID);
  if (found) {
    let new_data: Array<details> = data.filter((el) => el.id !== numID);
    // writing new data
    fs.writeFile(outputPath, JSON.stringify(new_data), "utf-8", () => {
      res.status(200).send(`Deleted Successfully ${id}`);
    });
  } else {
    // sending error
    res.status(404).send(`invalid ${id}`);
  }
});

router.post("/", (req: Request, res: Response) => {
  // taking out object from req
  let new_data: details = {
    ...req.body,
    id: Date.now(),
  };
  // pushing the new_data into data
  data.push(new_data);
  // writingFile with use of fs
  fs.writeFile(outputPath, JSON.stringify(data), "utf-8", () => {
    res.status(201).send(data);
  });
});

// making a patch request
router.patch("/:id", (req: Request, res: Response) => {});

// details type of data.json
type details = {
  id: number;
  name: string;
  gender: string;
  birth: string;
  current: string;
  visited: {
    name: string;
  }[];
};

// Exporting router
export { router };
