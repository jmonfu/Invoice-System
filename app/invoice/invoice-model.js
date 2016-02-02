'use strict';

//this model will be used to populate the products from the API
angular.module('invoicesystem')
    .service('InvoiceModel', function ($http, APIENDPOINT_URI) {
    
    var service = this;    
    var invoices = [];

        invoices = [
        {id: "2345", name: "IPod", qty: 3, price: "75.50"},
        {id: "1125", name: "IPhone6", qty: 24, price: "699.99"},
        {id: "2292", name: "Macbook", qty: 3, price: "800"},
        {id: "1999", name: "IPhone Plus", qty: 10, price: "800.00"},
        {id: "7676", name: "Google Glass", qty: 5, price: "2475.50"}
    ]

    service.getProducts = function() {
        return invoices;    
    }
    

    //angThirdParty.then(function(currentStockData){
})

