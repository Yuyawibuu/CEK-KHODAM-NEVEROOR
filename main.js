function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
        alert('Masukkan nama terlebih dahulu!');
    } else {
        let status = [
            'isi',
            'kosong',
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus === 0) {
            let khodam = [
                'BANTENG MERAH',
                'KUDA PERANG KUNO',
                'POCONG TOBRUT',
                'MONYET MULET',
                'NAGA VOID',
                'RAJA IBLIS',
                'CUCURUT SOLOKAN',
                'KUNTI BOGEL',
                'SILUMAN OYO',
                'TUYUL RESING',
                'Harimau ompong Euweuh Huntuan'
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
            $('#search').val('');
        }
        else {
            $('#result').html(`${nama.toUpperCase()} - KOSONG`);
            $('#search').val('');
        }
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekKhodam);
});