package com.example.BackendApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api")
public class EcxelController {

    @Autowired
    private ExcelService excelService;

    @GetMapping("/products/{id}")
    public ResponseEntity<ModelProduct> getProductById(@PathVariable int id) throws IOException {
        ModelProduct modelProduct = excelService.verifyClothe(id);
        if (modelProduct != null) {
            excelService.insertClothe(modelProduct);
            System.out.println("Aqui fue");
            return ResponseEntity.ok(modelProduct);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/venta")
    public ResponseEntity<String> venderProducto(@RequestBody ModelSale ventaRequest) {
        // Aquí procesas los datos de la venta, puedes almacenarlos en una base de datos u otros servicios
        String nombreComprador = ventaRequest.getNombreComprador();
        excelService.insertSale(ventaRequest);
        // Otros campos necesarios para el procesamiento
            System.out.println(nombreComprador);
        // Realiza el procesamiento y devuelve una respuesta (puede ser un mensaje de éxito)
        return ResponseEntity.ok("Venta exitosa");
    }


}
