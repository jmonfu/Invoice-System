'use strict';

angular.module("invoicesystem")
    .service("ReceiptService", function() {
       
       var receiptData = []; 
        
        return{
            addToReceipt: function(item) {
                var alreadyAdded = false;
                for(var i=0; i < receiptData.length; i++)
                {
                    if (receiptData[i].id == item.id) {
                        receiptData[i].qty += 1;
                        receiptData[i].count++;
                        alreadyAdded = true;
                        break;
                    }
                }
                if (!alreadyAdded) {
                    receiptData.push({
                        id: item.id, item: item.name, qty: 1, price: item.price
                    });
                }
            },
            
            removeFromReceipt: function(id) {
                for (var i = 0; i < receiptData.length; i++) {
                    if (receiptData[i].id == id) {
                        console.log(receiptData[i].qty);
                        if(receiptData[i].qty > 0) {
                            receiptData[i].qty - 1;
                        }
                        else{
                            receiptData.splice(i, 1);
                        }
                    }
                }
                
            },
            
            getReceiptProducts: function() {
                return receiptData;
            },

            getReceiptTotal: function() {
                    var total = 0;
                    for (var i = 0; i < receiptData.length; i++) {
                        total += (receiptData[i].price * receiptData[i].qty);
                    }
                    return total;
                }
        }            
    });