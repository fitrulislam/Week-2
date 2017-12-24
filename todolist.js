//Judul kegiatan
console.log('To Do List di Hari Minggu! (24 Desember 2017)');
console.log('');

//fungsi untuk menampilkan to do list
function toDoList(kegiatan) {
  for(var jam = 4; jam <= 22; jam++){
    if(jam===4){
      console.log('Jam ' + jam + ':00 WIB: Bangun ' + kegiatan[0] + ', ' + kegiatan[7] + ' bentar');
      console.log();
    } else if(jam===5 ||jam===12||jam===15||jam===18||jam===19){
      console.log('Jam ' + jam + ':00 WIB: Saatnya ' + kegiatan[1] + '!');
      console.log();
    } else if(jam===7||jam===13||jam===20) {
      console.log('Jam ' + jam + ':00 WIB: Isi tenaga coy, ' + kegiatan[2] + ' dulu~');
      console.log();
    } else if(jam===6||jam===17) {
      console.log('Jam ' + jam + ':00 WIB: ' + kegiatan[3] + ' dulu pak, biar ga bau.');
      console.log();
    } else if(jam===8||jam===9||jam===14) {
      console.log('Jam ' + jam + ':00 WIB: Latihan ' + kegiatan[4] + ', biar pinter.');
      console.log();
    } else if(jam===10||jam===16) {
      console.log('Jam ' + jam + ':00 WIB: ' + kegiatan[5]);
      console.log();
    } else if(jam===11){
      console.log('Jam ' + jam + ':00 WIB: ' + kegiatan[8] + ' biar ga stress');
      console.log();
    } else if(jam===21){
      console.log('Jam ' + jam + ':00 WIB: ' + kegiatan[6] + ' atau ' + kegiatan[4] + ' lagi~');
      console.log();
    } else {
      console.log('Jam ' + jam + ':00 WIB: Saatnya ' + kegiatan[0]);
      console.log();
    }
  }
  return;
}

//deklarasi variabel
var kegiatan = ['tidur', 'ibadah', 'makan', 'Mandi', 'ngoding', 'Bantu-bantu di rumah', 'Nonton TV', 'olahraga', 'Ngegame'];

//menampilkan hasil
console.log(toDoList(kegiatan));

console.log('nb: Jangan lupa main game kalo ada waktu kosong tiap selese satu kegiatan :v');

//pseudocode ada di repository, namanya todolist.md
