//tugas 1
var nama = 'Riki';
var angkaPembilang = 6;
var angkaPenyebut = 3;
hasilBagi = angkaPembilang / angkaPenyebut;

console.log('Halo ' + nama + ', ' + angkaPembilang + ' dibagi ' + angkaPenyebut + ' adalah sama dengan ' + hasilBagi);

//tugas 2
var alas = 6;
var tinggi = 4;
luasSegitiga = (alas * tinggi) / 2;

console.log('Luas Segitiga: ' + luasSegitiga);

//tugas 3
var tahun = 2000;
if (tahun%4===0) {
  if(tahun%100!==0) {
    console.log(tahun + ' adalah tahun kabisat');
  } else if (tahun%400===0) {
    console.log(tahun + ' adalah tahun kabisat');
  } else {
    console.log(tahun + ' adalah bukan tahun kabisat');
  }
} else {
  console.log(tahun + ' adalah bukan tahun kabisat');
}
