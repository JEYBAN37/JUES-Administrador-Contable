package com.example.BackendApi;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;


@Service
public class ExcelService {
    FileInputStream archivoExcel = new FileInputStream("D:/Portafolio Esteban/JUES/BackendApi/src/main/resources/databaseEcxel/DataBase.xlsx/");
    XSSFWorkbook workbook = new XSSFWorkbook(archivoExcel);
    Sheet stock = workbook.getSheetAt(0);
    Sheet sales = workbook.getSheetAt(1);
    Sheet Factory = workbook.getSheetAt(2);

    //    Sheet formules = workbook.getSheetAt(2);
    public ExcelService() throws IOException {

    }

    public ModelProduct verifyClothe(int id) throws IOException {


        ModelProduct modelProduct = new ModelProduct();
        boolean encontrado;
        try {

            int columnaId = 0;
            int columnaName = 1;
            int columnaValue = 2;
            int columnaSize = 3;

            encontrado = false;

            for (int i = stock.getFirstRowNum(); i <= stock.getLastRowNum(); i++) {
                Row fila = stock.getRow(i);

                if (fila != null) {
                    Cell celda = fila.getCell(columnaId);
                    if (celda != null && celda.getCellType() == CellType.NUMERIC) {
                        modelProduct.setId(celda.getNumericCellValue());
                        if (modelProduct.getId() == id) {
                            // Elimina la fila que contiene el valor coincidente
                            modelProduct.setNameClothe(fila.getCell(columnaName).getStringCellValue());
                            modelProduct.setValue(fila.getCell(columnaValue).getNumericCellValue());
                            modelProduct.setSizeClothe(fila.getCell(columnaSize).getStringCellValue());
                            System.out.println(modelProduct.getSizeClothe());
                            //stock.removeRow(fila);
                            encontrado = true;
                            break;
                        }
                    }
                }
            }

            archivoExcel.close();

            if (encontrado) {
                // Guarda los cambios en el archivo Excel
                FileOutputStream salida = new FileOutputStream("D:/Portafolio Esteban/JUES/BackendApi/src/main/resources/databaseEcxel/DataBase.xlsx/");
                workbook.write(salida);
                salida.close();
                System.out.println("Fila eliminada con éxito.");
            } else {
                System.out.println("No se encontró ninguna fila para eliminar.");
            }

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return modelProduct;
    }
    public void insertClothe(ModelProduct modelProduct) throws IOException {
        try {
            Row newRow = sales.createRow(sales.getLastRowNum() + 1); // Crea una nueva fila en la hoja

            // Obtén la fecha y hora actual en Java
            Cell dateTimeCell = newRow.createCell(0); // Supongamos que la fecha y hora se insertarán en la columna 4

// Obtén la fecha y hora actual en Java
            java.util.Date fechaHoraActual = new java.util.Date();

// Crea un estilo de celda para formatear la fecha y hora
            CellStyle dateCellStyle = workbook.createCellStyle();
            CreationHelper createHelper = workbook.getCreationHelper();
            dateCellStyle.setDataFormat(createHelper.createDataFormat().getFormat("MM/dd/yyyy HH:mm"));
            dateTimeCell.setCellStyle(dateCellStyle);

// Establece la fecha y hora actual en la celda
            dateTimeCell.setCellValue(fechaHoraActual);

            newRow.createCell(1).setCellValue(modelProduct.getId());
            newRow.createCell(2).setCellValue(modelProduct.getNameClothe());
            newRow.createCell(3).setCellValue(modelProduct.getValue());
            newRow.createCell(4).setCellValue(modelProduct.getSizeClothe());
            newRow.createCell(5).setCellValue(modelProduct.getBox());
            // Guarda los cambios en el archivo Excel
            FileOutputStream salida = new FileOutputStream("D:/Portafolio Esteban/JUES/BackendApi/src/main/resources/databaseEcxel/DataBase.xlsx/");
            workbook.write(salida);
            salida.close();
            System.out.println("Datos insertados con éxito.");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public void insertSale (ModelSale modelSale){
        try {
            Row newRow = Factory.createRow(Factory.getLastRowNum() + 1); // Crea una nueva fila en la hoja

            // Obtén la fecha y hora actual en Java
            Cell dateTimeCell = newRow.createCell(0); // Supongamos que la fecha y hora se insertarán en la columna 4

// Obtén la fecha y hora actual en Java
            java.util.Date fechaHoraActual = new java.util.Date();

// Crea un estilo de celda para formatear la fecha y hora
            CellStyle dateCellStyle = workbook.createCellStyle();
            CreationHelper createHelper = workbook.getCreationHelper();
            dateCellStyle.setDataFormat(createHelper.createDataFormat().getFormat("MM/dd/yyyy HH:mm"));
            dateTimeCell.setCellStyle(dateCellStyle);

// Establece la fecha y hora actual en la celda
            dateTimeCell.setCellValue(fechaHoraActual);

            newRow.createCell(1).setCellValue(modelSale.getProductId());
            newRow.createCell(2).setCellValue(modelSale.getNombreComprador());
            newRow.createCell(3).setCellValue(modelSale.getNumeroIdentificacion());
            newRow.createCell(4).setCellValue(modelSale.getTotal());
            newRow.createCell(5).setCellValue(modelSale.getEfectivoEntregado());
            // Guarda los cambios en el archivo Excel
            FileOutputStream salida = new FileOutputStream("D:/Portafolio Esteban/JUES/BackendApi/src/main/resources/databaseEcxel/DataBase.xlsx/");
            workbook.write(salida);
            salida.close();
            System.out.println("Datos insertados con éxito.");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}

