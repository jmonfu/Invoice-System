'use strict';

angular.module('invoicesystem')

    .controller("receiptCtrl", function($scope, ReceiptService, InvoiceService) {
    var ctrl = this;    
    
    ctrl.receipts = ReceiptService.getReceiptProducts();
    
    $scope.addItem = function(item) {
        item.qty += 1;
        item.itemTotal = item.price * item.qty
    };

    $scope.removeItem = function(item) {
        item.qty = item.qty-1;
        ReceiptService.removeFromReceipt(item.id);
        InvoiceService.addStockItem(item);
    };
    
    $scope.total = function() {
        return ReceiptService.getReceiptTotal();
    }

});