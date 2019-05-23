// 1. Melakukan Looping Menggunakan While

var count = 0;
console.log('LOOPING PERTAMA:')
while (count < 20) {
    count += 2;
    console.log(count + ' i love coding')

}

console.log('LOOPING KEDUA:')
while (count > 0) {
    console.log(count + ' i will become fullstack developer');
    count -= 2;
}

// 2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA:')
for (i = 1; i <= 20; i++) {
    console.log(i, 'I love coding')
}

console.log('LOOPING KEDUA:')
for (i = 20; i >= 1; i--) {
    console.log(i, 'I will become fullstack developer');
}

// 3. Angka Ganjil dan Genap

for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
}

for (var i = 1; i <= 100; i += 2) {
    if (i % 3 === 0) {
        console.log(i + ' kelipatan 3');
    }
}

for (var i = 1; i <= 100; i += 5) {
    if (i % 6 === 0) {
        console.log(i + ' kelipatan 6');
    }
}

for (var i = 1; i <= 100; i += 9) {
    if (i % 10 === 0) {
        console.log(i + ' kelipatan 10');
    }
}