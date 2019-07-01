var numField1= document.getElementById('numField1');
var numField2= document.getElementById('numField2');
var resultDisplay= document.getElementById('resultDisplay');
numField1.value="0";
numField2.value="0";
var form = document.getElementById('calculateForm');

form.addEventListener('submit',function(event) {
    var X=numField1.value;
    var Y=numField2.value;
    if(X == undefined || X == null || X <=0) {
        alert('Enter the values in the X');
    } else if (Y == undefined || Y == null || Y <=0) {
        alert('Enter the values in the Y');
    } else {
        var result = parseFloat(X)/parseFloat(Y);
        var percent = result * 100;
        resultDisplay.innerText = "Answer :"+percent+"%";
    }
    event.preventDefault();
});