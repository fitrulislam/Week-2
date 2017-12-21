var nama = 'Rafaela'; //namanya bisa Gatotkaca, Miya, Rafaela, atau Aurora
var peran1 = '';
var peran2 = 'Marksman';
var peran3 = 'Healer';
var peran4 = 'Mage';

if (nama == 'Gatotkaca') {
  console.log('Halo '+ nama + ', pilih peranmu untuk memulai game!');
} else if (nama == 'Miya') {
  console.log('Selamat datang di dunia Proxytia, '+ nama);
  console.log('Halo '+ peran2 + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!');
} else if (nama == 'Rafaela') {
  console.log('Selamat datang di dunia Proxytia, '+ nama);
  console.log('Halo '+ peran3 + ' ' + nama + ', kamu akan membantu temanmu yang terluka.');
} else if (nama == 'Aurora') {
  console.log('Selamat datang di dunia Proxytia, '+ nama);
  console.log('Halo '+ peran4 + ' ' + nama + ', ciptakan keajaiban yang akan membantu kemenanganmu!');
} else {
  console.log ('Ganti game aja');
}
