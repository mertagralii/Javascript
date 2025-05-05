// alert("Bu bir uyarı mesajı"); --> Uyarı veriyor
// console.error("Hata mesaji verdiyor"); --> Hata mesajı
// console.log("Merhaba Dünya"); --> Ekrana Yazdırma

//String "" veya '' kullanılır.
// int tam sayılar
// float küsüratlı sayılar 10.5
// bool true yada false
// not : js ile date işlemleri çok sıkıntılıdır. mümkün olduğu kadar kaçının
// ben genelde backend tarafında çözüp, js'de string çalışmayı severim

// Dizi  ve liste aynı şey ek olarak es6 set eklendi
// objeler doğrudan tip olmadan dinamik formatta yazılır
// Js ile nesne tabanlı programcılık yapabilirsiniz ama çoğu web uygulamasında buna ihtiyaç duyulmuyor
// Objeler ile çalışacağımız zaman ise doğrudan dinamik obje yapıyoruz.
// çoğunlukla fonksiyon kullanıyoruz. js'de isimlendirmeler eğer nesne kullanmıyorsak hep camelCase'dir.

//Let sonradan değiştirilebilir değişken tanımı yapar
let isim = "Mert";
console.log(isim);

// cons ile içeriği değiştirilemeyen sabit -constant değişkenler
const soyisim = "Ağralı";
console.log(soyisim);

// Karar veremiyorsan let yaz geç.

// console.log(typeof isim); --> değişkenin türünü söyler typeof ama float bir değere de number der. buna dikkat etmelisin

// String İnterpolation Backtick `` --> AltGr ile ünlem işaretine 2 kere bas
// Backtick yaptıktan sonra entere basıp alt satıra atabilir ve yapıyı bozmazsın
console.log(`Merhaba ${isim} ${soyisim}`);

let ogrenciler = ["Elif", "Gizem", "ishak", "Mert", "Onur", "Rojin", "Umut"];

console.clear();
// uzun yazılımlı foreach yok onun yerine forof
// Örnek Foreach yazılımı
for (let ogrenci of ogrenciler) {
  console.log(ogrenci);
}
// program tamam tuşuna basılasıya kadar bekletir.
alert("Şimdi yeni ekleme yapıcam");

// diziler ve objeler ref tip
// eğer const ile ref tip tanımlarsak, içinde referansı tuttuğu için obje veya dizi içinde düzenleme yapılabilir

ogrenciler.push("Orhan"); // Dizinin sonuna elemanı ekler

// Consol temizlemek için
console.clear();

for (let i = 0; i < ogrenciler.length; i++) {
  console.log(ogrenciler[i]);
}

let inputAd = prompt("Adın Nedir?", "Mert"); // Ön tanımlı yapar ilk Mert yazısı gelir böyle yaparsan
console.log("merhaba" + inputAd);

ogrenciler.pop(); // Son elemanı diziden siler ve sildiğini bize döner.

ogrenciler.unshift("Furkan"); // Dizinin başına eleman ekler
ogrenciler.shift(); // Dizinin ilk elemanını siler ve döner.
// Bir elemanın indexsini bulmak için sonuna .indexOf yazarız.
// eğer o elemanı bulamazsa -1 döner
//aramaya soldan sağa doğru başlar, ilk bulduğunu döner.
// console.log(ogrenciler.indexOf('Mert')); // Kaçınçı indexte olduğumu söyler.

// ogrenciler.splice(3,1); // 3 elemandan başla 1 tane eleman sil

const mertinIndeksi = ogrenciler.indexOf("Mert");
ogrenciler.splice(mertinIndeksi, 1);

console.table(ogrenciler); // Table şeklinde getiriyor.

let uzunSayi = 10_000_000; // Böyle de yazabilirsin uzun sayıları
console.log(uzunSayi); // Ekrana yazdırdığımızda yine aynı şekilde 10000000 olarak yazar.

console.clear();

function topla(sayi1, sayi2) {
  // Tür belirtmiyorsun
  return sayi1 + sayi2; // istediğimiz tarza dönüş verebiliriz.
}
console.log(topla(20, 50));

function tumunuTopla(sayilar) {
  let toplam = 0;
  for (const sayi of sayilar) {
    topla += sayi;
  }
  return toplam;
}
console.log(tumunuTopla([5, 20, 85, 70, 275]));

// 'Orhan Ekici'.split(' ') ==> [Orhan Ekici] // boşluk oluşturur, parçalar.
// [Orhan,    Ekici].Join() ==> [Orhan,Ekici] // boşluk siler.

//TİP DÖNÜŞTÜRME
//String dönüştürmek için
//ToString()

// numaraya dönüştürmek için
// Number('string number')
//int parseInt('string numara')
// float parseFloat('küsüratlı string numara')

// NaN -> not a number

let inputYas = prompt("Yaşını Gir");
let yas = Number(inputYas);

// if (!Number.isNaN(yas))
// {
//     return;
// }

// if (yas >= 18)
// {
//     console.log("Reşitsin");
// }

console.clear();

// js obj proplar camelCase yazılır
const orhan = {
  ad: "Orhan",
  soyad: "Ekici",
  yas: 36,
  ad: "Kıvanç", // ilk yazdığım prop aşağıda ezildi
  kendiniTanıt: function () {
    // obje method tanımı
    // içindeki proplara erişebilmek için this ifadesine ihtiyaç var.
    // console.log(`Merhaba, ben ${this.ad} ${this.soyad}`);
    return `Merhaba, ben ${this.ad} ${this.soyad}`; // Böyle de yazabilirsin.
  },
};

console.log(orhan.ad);

orhan.hobiler = ["Ödev vermek", "hızlı js anlatmak"]; // Ekstra prop ekleyebiliyorsun böyle çat diye

delete orhan.yas; // prop silmek için delete sonrasında prop yazılabilir.

console.log(orhan);

// Objeye ait methot çağrılması
orhan.kendiniTanıt();

console.clear();

// array methotları
// c#'da lambda expression, js'de anonim arrow func
ogrenciler.forEach((x) => console.log(x)); // foreeach her birinde işlem yapan void olan birşey

// linq where yerine js de filter
const filtered = ogrenciler.filter((x) => x.includes("i")); // İçinde i olanları getiricek
console.log(filtered); // yeni bir öğrenciler şeması açtı ve içine de sadece öğrenciler'deki i barındıran kelimeler geldi.

// Orjinali değiştirmeden yeni sıralanmış bir dizi oluşturur.
console.log(ogrenciler.toSorted());

ogrenciler.sort(); // Orjinal diziyi modifiye eder.

const sayilar = [2, 4, 6, 8];

console.log(sayilar);

// linq select, js'de map
const kareler = sayilar.map((x) => x * x);
console.log(kareler);

const kisiler = [
  { ad: "Orhan", soyad: "Ekici" },
  { ad: "Orhan", soyad: "Ekici" },
  { ad: "Orhan", soyad: "Ekici" },
  { ad: "Orhan", soyad: "Ekici" },
  { ad: "Orhan", soyad: "Ekici" },
  { ad: "Orhan", soyad: "Ekici" },
];

const evHalki = kisiler.map((x) => `${ad} ${x.soyad}`);
console.log(evHalki);

//destructuring -- referans kırma ve kopyasını oluşturma
// default ekleme

function handleClick() {
  alert("Bana Tıkladın!");
}

function listStudents() {
  console.clear();
  ogrenciler.forEach((x) => console.log(x));
}
