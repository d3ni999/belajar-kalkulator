let operasi       = "";
let angka_pertama = 0;
let angka_kedua   = 0;


const input =document.getElementById("hasil");
const tombol=document.getElementsByClassName("tombol");
const reset =document.getElementById("reset");

for (let i = 0; i < tombol.length; i++){
  tombol [i].addEventListener("click", function() {
    if (
      tombol[i].innerText === "+"||
      tombol[i].innerText === "-"||
      tombol[i].innerText === "x"||
      tombol[i].innerText === "/"
    ) {
        operasi       = tombol[i].innerText;
        angka_pertama = input.value;
        input.value   = 0;

    } else if (tombol[i].innerText === "="){
      angka_kedua  = input.value;
      if (operasi ==="+")
        input.value = parseInt(angka_pertama)  + parseInt (angka_kedua);
      if (operasi ==="-")
        input.value = parseInt(angka_pertama)  - parseInt (angka_kedua);
      if (operasi ==="x")
        input.value = parseInt(angka_pertama)  * parseInt (angka_kedua);
      if (operasi ==="/")
        input.value = parseInt(angka_pertama)  / parseInt (angka_kedua);
    
    } else  {
      const currentValue  = parseInt (input.value);
      if (currentValue === 0){
        input.value  = tombol[i].innerText;
    } else {
        input.value = currentValue + tombol[i].innerText;
      }
    }
  });
}

    reset.addEventListener("click", function () {
      operasi = "";
      angka_pertama = 0;
      angka_kedua = 0;
      input.value = 0;
});