import { utils, writeFile } from "xlsx";

interface DownloadExcelFile {
  columns: string[];
  rows: Array<Array<string | number | undefined | null>>;
}

export function downloadExcelFile(excelData: DownloadExcelFile, fileName: string): void {
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
