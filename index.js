// var name - Tidak digunakan var (let dan const yang dipakai di project besar)
// var, let, const
//Perbedaan: let bisa diubah data nya, const tidak bisa
// prompt("Masukkan Nama Anda: ");
// prompt("Masukkan Umur Anda: ");

// function ShowPopUp() {
//   alert("ini nama mahasiswa" + " " + nama + " " + "umurnya" + " " + umur); //Menampilkan Pop Up di atas
// }

// ShowPopUp();

// const res = document.querySelector(".ress");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
//   res.innerHTML = "<h1>halo</h1>";
// });

// btn.addEventListener("click", function () {
//   alert("Hello Partner");
// });
//addEventListener -> menambahkan apa yang dilakukan di html, direkam di JavaScript (Cth. Klik button)

// //Terakhir:
// function tambah() {
//   res.innerHTML = <h1>halo</h1>;
// }

// function hitung(a, b, c) {
//   let HasilAwal = a + b;
//   let HasilAkhir = HasilAwal - c;
//   return HasilAkhir; //Mengembalikan nilai, dimunculkan
// }

// res.textContent = hitung(
//   prompt("Enter a number: "),
//   prompt("Enter another number: "),
//   prompt("Enter a number to subtract: "),

// let buah = ["apel", "mangga", "pisang", "semangka"];
// console.log(buah);
// console.log(buah[0]);
// console.log(buah.length);

// let DataOrang = ["Hello", "Gibe", "World"];
// DataOrang.push("Mem"); //Kasih masuk data ke Array
// DataOrang.sort(); //Mengatur dari A-Z (Sesuai alfabet)
// console.log(DataOrang);

// let AngkaOrang = [2, 5, 7, 3, 4];
// AngkaOrang.sort((a) => a - 1); // a adalah semua array itu (?)
// console.log(AngkaOrang);

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
