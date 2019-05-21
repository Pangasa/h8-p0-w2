var nama = 'Igenk';
var peran = 'Tabib';

if (nama === '' && peran === '') {
    console.log('Nama harus diisi');
} else if (nama === 'Igenk' && peran === '') {
    console.log('Halo ' + nama + ' Pilih peranmu untuk memulai game');
} else if (nama === 'Igenk' && peran === 'Ksatria') {
    console.log('Selamat datang di Dunia Proxytia ' + nama);
    console.log('Halo ' + peran + ' ' + nama + ' Kamu dapat menyerang dengan senjatamu');
} else if (nama === 'Igenk' && peran === 'Tabib') {
    console.log('Selamat datang di Dunia Proxytia ' + nama);
    console.log('Halo ' + peran + ' ' + nama + ' Kamu akan membantu temanmu yang terluka');
} else if (nama === 'Igenk' && peran === 'Penyihir') {
    console.log('Selamat datang di Dunia Proxytia ' + nama);
    console.log('Halo ' + peran + ' ' + nama + ' ciptakan keajaiban yang membantu kemenanganmu');
} else {
    console.log('Selamat datang di Dunia Proxytia ' + nama);
    console.log('Halo ' + peran + ' ' + nama);
}