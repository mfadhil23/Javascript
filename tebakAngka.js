var nama = prompt("Masukkan nama Anda :");

// menyapa
alert("Hai " + nama + "!" + "\nSelamat Datang di Permainan Tebak Angka");

var lagi = true;
while(lagi) {
    // rules
    var kesempatan = 3;
    alert("Rules \nPilih angka dari 0-10 \nAnda memiliki " + kesempatan + " kesempatan");

    // permainan
    // generate angka
    var angka = Math.floor(Math.random() * 10 + 1);
    var pilih = prompt("Hai " + nama + "\nPilih angka dari 0-10");

    while(kesempatan >= 1) {
        if(kesempatan > 1) {
            if(pilih < angka) {
                alert("Pilihan Anda terlalu RENDAH \nAnda memiliki sisa " + Number(kesempatan - 1) + " kesempatan");
                kesempatan--;
                pilih = prompt("Pilih angka dari 0-10");
            } else if (pilih > angka) {
                alert("Pilihan Anda terlalu TINGGI \nAnda memiliki sisa " + Number(kesempatan - 1) + " kesempatan");
                kesempatan--;
                pilih = prompt("Pilih angka dari 0-10");
            } else {
                alert("Selamat Anda BERHASIL menebak angka");
                break;
            }
        } else {
            alert("Kesempatan Anda HABIS! \nAnda belum berhasil menebak");
            break;
        }
    }
    lagi = confirm("Mau bermain lagi?")
}
alert("Terimakasih...")