var input = document.getElementById("display");
function addNumber(character){
    if(input.value==0 || input.value.lenght==0){
        input.value= character;
    }
    else{
        input.value+= character;
    }
}
function addResult (){
    input.value= eval(input.value);
}
function hilang() {
    input.value = 0;
}
function hapus(){
    input.value= input.value.slice(0,-1);
}