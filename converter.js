const XLSX = require("xlsx");
const fs = require("fs");

const workbook = XLSX.readFile("sheets.xlsx");

const sheet =
  workbook.Sheets[workbook.SheetNames[0]];

const data =
  XLSX.utils.sheet_to_json(sheet);

fs.writeFileSync(
  "knowledge.json",
  JSON.stringify(data, null, 2)
);

console.log("JSON criado com sucesso!");