import React from "react";
import { downloadExcelFile } from "./simpleExcel";

const App = () => {
  const cellData = {
    columns: ["name", "age"],
    rows: [
      ["GilDong Hong", 28],
      ["Heung Kook Kim", 19],
    ]
  }

  return (
    <div className="app">
      <button onClick={() => downloadExcelFile(cellData, "fileName")}>download xlsx File</button>
    </div>)
}

export default App