'use strict';

angular.module("invoicesystem")
    .service("InvoiceService", function(InvoiceModel) {
    
           var invoiceData = []; 

            return{
                
            getProducts: function() {
                return InvoiceModel.getProducts();
            },

            addStockItem: function(item) {
                invoiceData = InvoiceModel.getProducts();
                for(var i=0; i < invoiceData.length; i++)
                {
                    if (invoiceData[i].id == item.id) {
                        invoiceData[i].qty += 1;
                    }
                }
                return invoiceData;
            },
     }
});