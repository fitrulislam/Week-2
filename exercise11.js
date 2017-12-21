var nama = 'Miya'; //namanya bisa Gatotkaca, Miya, Rafaela, atau Aurora
var peran = 'Healer'; //peran bisa Marksman, Healer, atau Mage (khusus Gatotkaca tidak ada peran)
var tahunLahir = 2000;
var umur = 2017 - tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));

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

for (var index=1; index<=tahunLahir; index++) {
  if (index%umur===0){
    console.log(peran + ' ' + nama + ' menyerang monster!');
    monsterHealth = monsterHealth - umur;
  } else if (index%kodeMonster===0) {
    console.log('Monster menyerang ' + peran + ' ' + nama + '!');
    playerHealth = playerHealth - kodeMonster;
  } else if (index%(umur * kodeMonster)===0) {
    console.log('Health keduanya bertambah');
    playerHealth = playerHealth + kodeMonster;
    monsterHealth + umur;
  } else if (playerHealth > monsterHealth) {
    console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
  } else {
    console.log ('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
  }
}
