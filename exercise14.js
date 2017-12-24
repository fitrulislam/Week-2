function dataHandling2(){
  //niatnya mau bikin fungsi for sama if-else tapi belom bisa bisa sampe sekarang
  input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
  input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
  console.log(input);

  var tgl = input.slice(3,4) + '';

  var bulan1 = tgl.split('/').slice(1, 2);
  var nyariBulan = bulan1.toString();
  switch (nyariBulan) {
  case '01': bulan2 = 'Januari';break;
  case '02': bulan2 = 'Februari';break;
  case '03': bulan2 = 'Maret';break;
  case '04': bulan2 = 'April';break;
  case '05': bulan2 = 'Mei';break;
  case '06': bulan2 = 'Juni';break;
  case '07': bulan2 = 'Juli';break;
  case '08': bulan2 = 'Agustus';break;
  case '09': bulan2 = 'September';break;
  case '10': bulan2 = 'Oktober';break;
  case '11': bulan2 = 'November';break;
  case '12': bulan2 = 'Desember';break;
  default:  bulan2 = 'kaga ade';
 }
 console.log(bulan2);

 var tglDescending = tgl.split('/').sort(function(a, b){return b-a});
 console.log(tglDescending);

 var tglFormatBaru = tgl.split('/').join('-');
 console.log(tglFormatBaru);

 var namaDoang = input[1].slice(0,15);
 console.log(namaDoang);

 return;
}

var input = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'];

console.log(dataHandling2(input));
