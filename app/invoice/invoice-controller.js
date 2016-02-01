'use strict';

angular.module('invoicesystem')

    .controller("invoiceCtrl", function($scope, $timeout, Gridster) {
    var ctrl = this;

    ctrl.invoices = [
        {id: "2345", name: "IPod", qty: "3", price: "75.50"},
        {id: "1125", name: "IPhone6", qty: "24", price: "699.99"},
        {id: "2292", name: "Macbook", qty: "3", price: "800"},
        {id: "1999", name: "IPhone Plus", qty: "10", price: "800.00"},
        {id: "7676", name: "Google Glass", qty: "5", price: "2475.50"}
    ]
    
    ctrl.gridsterOpts = Gridster.getOptions();

    $scope.addToBasket = function(id){
        //add this item to the receipts template
        //reduce the quantity of this item
    };

    
});


                