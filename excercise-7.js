// 1. Menyusun Barisan Bintang
var rows1 = 5;
while (rows1 > 0) {
    console.log('*');
    rows1--;
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5;
var bintang = '';
for (var i = 0; i < rows2; i++) {
    for (var j = 0; j < rows2; j++) {
        bintang += '*';
    }
    console.log(bintang);
    bintang = '';
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var bintang = '';
var rows3 = 5;
for (var i = 0; i < rows3; i++) {
    for (var j = 0; j <= i; j++) {
        bintang += '*';
    }
    console.log(bintang);
    bintang = '';
}