'use strict';

angular.module('invoicesystem')

    .controller("invoiceCtrl", function($scope, $timeout, Gridster, InvoiceService, ReceiptService) {
    var ctrl = this;
        
    ctrl.invoices = InvoiceService.getProducts();
    
     ctrl.gridsterOpts = Gridster.getOptions();
// 
    $scope.addToBasket = function(item){
        //reduce the quantity of this item
        item.qty = item.qty-1;
        //add this item to the receipts template
        ReceiptService.addToReceipt(item);
        //if the item does not exist on the receipt, then add a new entry
        //if it exists, then add to the quantity and 
    };

    
});


                