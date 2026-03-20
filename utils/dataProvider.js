require("dotenv").config();
const { readExcel } = require("./excelReader");
const fs = require("fs");

function getTestData(type) {
  const source = (process.env.DATA_SOURCE || "json").trim().toLowerCase();
  console.log("RAW:", process.env.DATA_SOURCE);
  console.log("FINAL:", source);

  switch (source) {
    case "excel":
      return readExcel(`./test-data/${type}.xlsx`, "Sheet1");

    case "json":
      return JSON.parse(fs.readFileSync(`./test-data/${type}.json`, "utf-8"));

    case "api":
      // sync wrapper or pre-fetch before tests
      return require(`../test-data/${type}.api.mock.json`);

    default:
      throw new Error(`Unsupported data source: ${source}`);
  }
}

module.exports = { getTestData };
