'use strict';

angular.module('invoicesystem')

    .controller("receiptCtrl", function($scope) {

    $scope.data = {};

    $scope.data.receipts = [
        {id: "2345", item: "IPod", qty: "3", price: "75.50"},
        {id: "1125", item: "IPhone6", qty: "1", price: "699.99"},
        {id: "2292", item: "Macbook", qty: "1", price: "800"},
        {id: "7676", item: "Google Glass", qty: "1", price: "2475.50"},
    ]
})