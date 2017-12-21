var nama = 'Miya'; //namanya bisa Gatotkaca, Miya, Rafaela, atau Aurora
var peran = 'Healer'; //peran bisa Marksman, Healer, atau Mage (khusus Gatotkaca tidak ada peran)

if (nama == 'Gatotkaca') {
  console.log('Halo '+ nama + ', pilih peranmu untuk memulai game!');
} else if (nama == 'Miya') {
  console.log('Selamat datang di dunia Proxytia, '+ nama);
  console.log('Halo '+ peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!');
} else if (nama == 'Rafaela') {
  console.log('Selamat datang di dunia Proxytia, '+ nama);
  console.log('Halo '+ peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.');
} else if (nama == 'Aurora') {
  console.log('Selamat datang di dunia Proxytia, '+ nama);
  console.log('Halo '+ peran + ' ' + nama + ', ciptakan keajaiban yang akan membantu kemenanganmu!');
} else {
  console.log ('kacung');
}
