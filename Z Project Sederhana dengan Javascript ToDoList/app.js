let daftarTugas = [];

function tambahTugas(id, tugas, tanggal, status = "Belum Selesai") {
  return daftarTugas.push({ id, tugas, tanggal, status });
}

function lihatTugas(status) {
  console.log(`Daftar Tugas\n 
            id\tnama\ttanggal\t \tstatus\n`);
  if (status == "Belum Selesai") {
    daftarTugas.forEach((data) => {
      if (data.status == "Belum Selesai") {
        console.log(`
            
            ${data.id}\t${data.tugas}\t${data.tanggal}\t${data.status}`);
      }
    });
  } else {
    daftarTugas.forEach((data) => {
      if (!(data.status == "Belum Selesai")) {
        console.log(`
            ${data.id}\t${data.tugas}\t${data.tanggal}\t${data.status}`);
      }
    });
  }
}

function tandaiSelesaiTugas(id) {
  daftarTugas.forEach((data) => {
    if (data.id == id) {
      data.status = "Selesai";
    }
  });
}
function tandaiBelumSelesaiTugas(id) {
  daftarTugas.forEach((data) => {
    if (data.id == id) {
      data.status = "Belum Selesai";
    }
  });
}

function editTugas(id, tugas, tanggal, status) {
  daftarTugas.forEach((data) => {
    if (data.id == id) {
      data.tugas = tugas;
      data.tanggal = tanggal;
      data.status = status;
    }
  });
}

function hapusTugas(id) {
  daftarTugas.forEach((data, index) => {
    if (data.id == id) {
      daftarTugas.splice(index, 1);
    }
  });
}

function cariTugas(tugas) {
  daftarTugas.forEach((data) => {
    if (data.tugas == tugas) {
      console.log(`Tugas ditemukan : ${data.id}\t${data.tugas}\t${data.tanggal}\t${data.status}`);
    }
  });
}

tambahTugas(1, "Masak", "20-06-2025");
tambahTugas(2, "Mandi", "21-06-2025", "Selesai");
tambahTugas(3, "Makan", "22-06-2025");
tambahTugas(5.5, "Coding", "23-06-2025", "Selesai");
tambahTugas(4, "Tidur", "23-06-2025");
tambahTugas(5, "Coding", "23-06-2025", "Selesai");

tandaiBelumSelesaiTugas(2);
tandaiSelesaiTugas(4);

editTugas(1, "Masak Edit", "tanggal edit", "Belum Selesai");

hapusTugas(6);
hapusTugas(5.5);

lihatTugas("Belum Selesai");
lihatTugas("Selesai");

cariTugas("Makan");

// console.table(daftarTugas)
