# simple-of-simple-excel-js

I made it for a very simple excel download

look at the **simpleExcel.js(.ts)**

## demo install with start

```
npm i
npm run dev
```

## Example Code

1. import simpleExcel

```javascript
import { downLoadExcelFile } from "./simpleExcel";
```

2. end

```javascript
 const cellData = {
    columns: ["name", "age"],
    rows: [
      ["GilDong Hong", 28],
      ["HeungKook Kim", 19],
    ]
  };
downLoadExcelFile(cellData, "fileName")
```

## TMI

#### downloadExcelFile(excelData, fileName)

```typescript
interface excelData {
  columns: string[];
  rows: Array<Array<string | number | undefined | null>>;
}
```

good luck