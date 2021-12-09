import { utils, writeFile } from "xlsx";

export function downloadExcelFile(excelData, fileName) {
  const { rows, columns } = excelData;
  const book = utils.book_new();

  utils.book_append_sheet(book,
    utils.aoa_to_sheet([
      columns,
      ...rows,
    ])
    , "sheet1");
  writeFile(book, `${fileName}.xlsx`);
}
