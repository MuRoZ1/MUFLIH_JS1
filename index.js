// Contoh if-else
let score = 75;

if (score >= 80) {
    console.log("Nilai Anda sangat baik!");
} else {
    console.log("Anda perlu lebih banyak belajar untuk meningkatkan nilai Anda.");
}

// Contoh nested if
let time = "siang";
let weather = "cerah";

if (time === "siang") {
    if (weather === "cerah") {
        console.log("Cuaca sangat bagus hari ini!");
    } else {
        console.log("Cuaca tidak begitu baik hari ini.");
    }
} else {
    console.log("Ini bukan waktu yang tepat untuk menilai cuaca.");
}

// contoh switch case
let dayOfWeek = "senin";

switch (dayOfWeek) {
    case "senin":
        console.log("minggu baru telah dimulai! hore");
        break;
    case "selasa":
    case "rabu":
    case "kamis":
        console.log("sebentar lagi weekend coy!");
        break;
    case "jumat":
        console.log("besok mulai weekend!");
        break;
    case "sabtu":
        console.log("hahhhh waktunya istirahat 1");
        break;
    case "minggu":
        console.log("hahhhh waktunya istirahat 2");
        break;
    default:
        console.log("masih belum libur");
}

// Contoh for statement sederhana
for (let x = 1; x <= 5; x++) {
    console.log("Iterasi ke-" + x);
}

// Contoh while, dan do while sederhana
let hitung = 1;

while (hitung <= 5) {
    console.log("Iterasi ke-" + hitung);
    hitung++;
}

let hitung1 = 1;

do {
    console.log("Iterasi ke-" + hitung1);
    hitung1++;
} while (hitung1 <= 5);

// contoh function sederhana
function menyapa() {
    console.log("Halo bro! lu sehat.");
}

// Memanggil function
menyapa();






