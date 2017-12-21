var number = 1;
for(var number = 1; number <= 100; number++) {
  if (number%2===0) {
  console.log('Genap');
  } else {
    console.log('Ganjil');
  }
}

var number = 1;
for(var number = 1; number <= 100; number=number+2) {
  if (number%3===0) {
  console.log(number + ' kelipatan 3');
  } else {
  }
}

var number = 1;
for(var number = 1; number <= 100; number=number+5) {
  if (number%6===0) {
  console.log(number + ' kelipatan 6');
  } else {
  }
}

var number = 1;
for(var number = 1; number <= 100; number=number+9) {
  if (number%10===0) {
  console.log(number + ' kelipatan 10');
  } else {
  }
}
