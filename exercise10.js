//tugas 1
var total = 0;
for(var index = 1; index <= 100; index++) {
  if (index%2!==0) {
  total = total + index;
  } else if (index%2===0) {
  total = total - index;
  } else {}
}
console.log('Total: ' + total);
//kalo mau menampilkan deret angka, harusnya:
//1. else paling bawah dihapus
//2. else if diganti else aja
//3. console.log dimasukin setelah else


//tugas 2
var pagar = '';
for(var index1 = 1; index1 <= 10; index++) {
  for(index2 = 0; index2 <=10; index++) {
  pagar = pagar + '#';
  }
  console.log(pagar);
}


//tugas 3
var bintang = '';
for(var index1 = 1; index1 <= 10; index++) {
  for(index2 = 0; index2 <= index1; index++) {
  bintang = bintang + '*';
  }
  console.log(bintang);
}
