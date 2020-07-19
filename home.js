    function insert(num){
        document.getElementById("temp").value+=num;
    }
    function clean(){
        console.log(document.getElementById("temp").value);
        document.getElementById("temp").value=" ";
        console.log(document.getElementById("temp").value);
    }
    function backspace(){
        var value = document.getElementById("temp").value;
        document.getElementById("temp").value = value.substr(0, value.length - 1);
    }
    function done(){
        var helo = document.getElementById("temp").value;
        document.getElementById("temp").value = eval(helo);
    }
