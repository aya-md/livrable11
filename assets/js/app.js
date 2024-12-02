function getDonValue() {
    return document.getElementById("don").value;
}
paypal.Buttons({
createOrder : function(data,actions){
return actions.order.create({
purchase_units:[{
    amount : {
        value : getDonValue()
    }
}]
});
},
onApprove: function(data,actions){
return actions.order.capture().then(function(details){
alert("transaction validé");
})
},
onError: function(data,actions){
},

}).render("#paypal-button-container");
// Example function to show a result to the user. Your site's UI library can be used instead.
function resultMessage(message) {
const container = document.querySelector("#result-message");
container.innerHTML = message;
}