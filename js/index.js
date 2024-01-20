function deleteMe () {
    document.getElementById("myResult").value = "";
    }
    
    
    function calculate (newValue) {
    document.getElementById("myResult").value  += newValue;
    }
    
    
    
    function answer () {
    let total = document.getElementById("myResult").value;
    let sum = eval(total);
    document.getElementById("myResult").value = sum;
    }