
 var addButton = document.getElementById('add');
 console.log(addButton);


addButton.addEventListener("click",function(){
    var a = document.getElementById('val1').value;
    console.log(a);
    var b = document.getElementById('val2').value;
    console.log(b);
    var c = document.getElementById('val3').value;
    console.log(c);
    if(a+b==c){
        res.value="+";
    }
    else if(a-b==c){
        res.value="-";
    }
    else if(a*b==c){
        res.value="*";
    }
    else if(a/b==c){
        res.value="/";
    }
    else{
        res.value="!";
    }



})