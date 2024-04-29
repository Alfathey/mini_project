const tokoInfoDiv = document.getElementById('info-toko');
const bukuTable = document.getElementById('tabel-buku');
const bukuTableBody = bukuTable.querySelector('tbody');

const fetchBukuData = () => {
    fetch('toko_buku.json')
        .then(response => response.json())
        .then(data => {
            const { namaToko, pengarang, alamat, buku } = data;

            tokoInfoDiv.innerHTML = `
                <h2>${namaToko}</h2>
                <p>Pengarang: ${pengarang}</p>
                <p>Alamat: ${alamat}</p>
            `;

            buku.forEach(buku => {
                const row = bukuTableBody.insertRow();
                row.insertCell().textContent = buku.judul;
                row.insertCell().textContent = buku.tahunTerbit;
            });
        });
};

fetchBukuData();
