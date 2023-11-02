package com.example.BackendApi;

public class ModelSale {

        private String productId;
        private String nombreComprador;
        private String numeroIdentificacion;
        private double efectivoEntregado;
        private double total;

        public String getProductId() {
            return productId;
        }

        public void setProductId(String productId) {
            this.productId = productId;
        }

        public String getNombreComprador() {
            return nombreComprador;
        }

        public void setNombreComprador(String nombreComprador) {
            this.nombreComprador = nombreComprador;
        }

        public String getNumeroIdentificacion() {
            return numeroIdentificacion;
        }

        public void setNumeroIdentificacion(String numeroIdentificacion) {
            this.numeroIdentificacion = numeroIdentificacion;
        }

        public double getEfectivoEntregado() {
            return efectivoEntregado;
        }

        public void setEfectivoEntregado(double efectivoEntregado) {
            this.efectivoEntregado = efectivoEntregado;
        }

        public double getTotal() {
            return total;
        }

        public void setTotal(double total) {
            this.total = total;
        }
    }


