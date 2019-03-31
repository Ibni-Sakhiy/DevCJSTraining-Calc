var input = document.getElementById("display");
function addNumber(character){
    if(input.value==0 || input.value.length==0){
        input.value= character;
    }
    else{
        input.value+= character;
    }
}
function addResult (){
    // input.value= eval(input.value);
    if(input.value==0 || input.value.length==0){
        input.value= 0;
    } else {
        var result = eval(input.value).toFixed(2);
        for (i = 0; i < result.length;i++){
            if(result[i]=='.'){
                if(result[i+2]==0){
                    if(result[i+1]==0){
                        input.value = result.slice(0,-3);
                    } else {
                        input.value = result.slice(0,-1);
                    }
                } else {
                    input.value = result;
                }
            }
        }
    }
}
function hilang() {
    input.value = 0;
}
function hapus(){
    input.value= input.value.slice(0,-1);
}