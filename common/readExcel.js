const XLSX = require('xlsx')
exports.readExcel = class readExcel {

    readExcelSheet(fileName, sheetIndex) {

        const  excelDataFolder = "./testData/";
        const excelFileName = fileName
        const excelFilePath = excelDataFolder.concat(excelFileName);

        const excelFile = XLSX.readFile(excelFilePath)
        const excelSheetName = excelFile.SheetNames[sheetIndex];
        const excelSheetData = excelFile.Sheets[excelSheetName];
        const excelSheetDatatooJson = XLSX.utils.sheet_to_json(excelSheetData);
        return excelSheetDatatooJson

    }

}