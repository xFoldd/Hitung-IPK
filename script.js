function buatFormMataKuliah() {
    const jumlahMataKuliah = document.getElementById('jumlahMataKuliah').value;
    const container = document.getElementById('mataKuliahForms');
    container.innerHTML = '';

    for (let i = 0; i < jumlahMataKuliah; i++) {
        const formHTML = `
            <div class="mataKuliah">
                <h3>Mata Kuliah ${i + 1}</h3>
                <label for="nama${i}">Nama Mata Kuliah:</label>
                <input type="text" id="nama${i}" required>
                <label for="sks${i}">SKS:</label>
                <input type="number" id="sks${i}" min="1" required>
                <label for="uts${i}">Nilai UTS:</label>
                <input type="number" id="uts${i}" min="0" max="100" required>
                <label for="uas${i}">Nilai UAS:</label>
                <input type="number" id="uas${i}" min="0" max="100" required>
                <label for="tugas${i}">Nilai Tugas:</label>
                <input type="number" id="tugas${i}" min="0" max="100" required>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', formHTML);
    }
}

function hitungIPK() {
    const jumlahMataKuliah = document.getElementById('jumlahMataKuliah').value;
    let totalBobotNilai = 0;
    let totalSKS = 0;

    for (let i = 0; i < jumlahMataKuliah; i++) {
        const sks = parseFloat(document.getElementById(`sks${i}`).value);
        const nilaiUTS = parseFloat(document.getElementById(`uts${i}`).value);
        const nilaiUAS = parseFloat(document.getElementById(`uas${i}`).value);
        const nilaiTugas = parseFloat(document.getElementById(`tugas${i}`).value);

        const nilaiAkhir = (nilaiUTS + nilaiUAS + nilaiTugas) / 3;
        let bobotNilai = 0;

        if (nilaiAkhir >= 85) bobotNilai = 4;
        else if (nilaiAkhir >= 80) bobotNilai = 3.5;
        else if (nilaiAkhir >= 70) bobotNilai = 3;
        else if (nilaiAkhir >= 65) bobotNilai = 2.5;
        else if (nilaiAkhir >= 60) bobotNilai = 2;
        else if (nilaiAkhir >= 50) bobotNilai = 1;
        else bobotNilai = 0;

        totalBobotNilai += bobotNilai * sks;
        totalSKS += sks;
    }

    const ipk = totalBobotNilai / totalSKS;
    document.getElementById('hasilIPK').textContent = `IPK Anda adalah: ${ipk.toFixed(2)}`;
}
