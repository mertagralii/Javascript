
# 🟨 JavaScript Temel + İleri Seviye Notlar

## 🔹 Değişken Tanımlama

- `let`: Sonradan değeri değiştirilebilen değişkenler için.  
- `const`: Sabit, değiştirilemeyen değerler için.  
- Varsayılan olarak `let` tercih edilebilir.

```js
let isim = "Mert";
isim = "Ahmet"; // geçerli

const yas = 24;
// yas = 25; // ❌ Hata verir
```

---

## 🔹 Veri Türleri

- `string`: Metinsel ifadeler (`"Merhaba"`, `'Selam'`)
- `number`: Sayısal değerler (10, 3.14)
- `boolean`: true / false
- `object`: Anahtar-değer tutan yapılardır
- `array`: Liste tipi veri, köşeli parantez ile tanımlanır `[]`
- `typeof`: Değişkenin türünü verir
- `NaN`: Not a Number – geçersiz sayısal ifade

```js
const veri = 42;
console.log(typeof veri); // number

const sonuc = "abc" / 3;
console.log(sonuc); // NaN
```

---

## 🔹 Dizi (Array) İşlemleri

`.push()`: Dizi sonuna eleman ekler.

`.pop()`: Dizinin son elemanını siler.

`.unshift()`: Dizi başına eleman ekler.

`.shift()`: Dizinin ilk elemanını siler.

`.indexOf()`: Elemanın index'ini verir.

`.splice()`: Belirli index’ten itibaren eleman siler/ekler.

`.forEach()`: Dizi elemanları üzerinde döner.

`.filter()`: Koşula göre süzme yapar.

`for of`: Dizi üzerinde döngü kurmak için.

```js
let dizi = [1, 2, 3];

dizi.push(4);      // [1, 2, 3, 4]
dizi.pop();        // [1, 2, 3]
dizi.unshift(0);   // [0, 1, 2, 3]
dizi.shift();      // [1, 2, 3]
dizi.indexOf(2);   // 1

dizi.splice(1, 1); // 1. index’ten 1 eleman siler

dizi.forEach(e => console.log(e)); // Her elemanı yazdırır

const filtreli = dizi.filter(x => x > 1); // [2, 3]

for (const eleman of dizi) {
  console.log(eleman);
}
```

---

## 🔹 Giriş/Çıkış İşlemleri

`console.log()`: Konsola çıktı verir.

`console.error()`: Hata mesajı verir.

`console.table()`: Diziyi tablo şeklinde yazdırır.

`alert()`: Tarayıcı uyarısı gösterir.

`prompt()`: Kullanıcıdan input alır.

```js
console.log("Merhaba");
console.error("Bir hata oluştu");
console.table([1, 2, 3]);

alert("Hoşgeldin!");
let isim = prompt("Adınızı girin:");
```

---

## 🔹 Fonksiyonlar

`function`: Fonksiyon tanımı yapılır.

Parametreli fonksiyonlar ile işlemler yapılabilir.

Fonksiyonlar `return` ile değer dönebilir.

Arrow function `(()=>{})` ile kısa fonksiyon tanımı yapılabilir.
```js
function topla(a, b) {
  return a + b;
}

const sonuc = topla(3, 4); // 7

// Arrow Function
const carp = (x, y) => x * y;
console.log(carp(2, 5)); // 10
```

---

## 🔹 String İşlemleri

`Backtick ( )` ile string interpolation yapılır:
`Merhaba ${isim}`

`.split()`: String'i diziye çevirir (bölme).

`.join()`: Diziyi string’e çevirir (birleştirme).

```js
let isim = "Mert";
console.log(`Merhaba ${isim}`); // Backtick ile interpolasyon

const metin = "a,b,c";
const parcalar = metin.split(","); // ["a", "b", "c"]

const birlestir = parcalar.join("-"); // "a-b-c"
```

---

## 🔹 Tip Dönüştürme

`String()` veya `.toString()`: String’e çevirir.

`Number()`: Sayıya çevirir.

`parseInt()`: Tam sayıya çevirir.

`parseFloat()`: Ondalıklı sayıya çevirir.

`Number.isNaN()`: Sayı mı, değil mi kontrol eder.

```js
const sayiStr = "123";
const tamSayi = parseInt(sayiStr);     // 123
const ondalikli = parseFloat("3.14");  // 3.14
const sayi = Number("42");             // 42
const metin = String(123);             // "123"

Number.isNaN("abc" / 2); // true
```

---

## 🔹 Obje (Object) Kullanımı
`{}` ile obje tanımlanır.

`this`: Obje içindeki property’lere erişmek için kullanılır.

Obje içine `fonksiyon (method)` eklenebilir.

Sonradan property eklenebilir ` (obje.ad = değer)`

`delete obje.prop`: Property siler.

```js
const kisi = {
  ad: "Mert",
  yas: 24,
  selamla: function () {
    console.log(`Merhaba, ben ${this.ad}`);
  }
};

kisi.soyad = "Ağralı";      // Yeni property ekleme
delete kisi.yas;            // Property silme
kisi.selamla();             // Merhaba, ben Mert
```

---

## 🟦 Set
📌 Tanım:
Set, yalnızca benzersiz (tekrarsız) değerler tutan bir koleksiyondur.

✅ Özellikler:

`.add()` → Eleman ekler

`.has()` → Eleman içeriyor mu?

`.delete()` → Eleman siler

`.clear()` → Tüm elemanları siler

`.size` → Eleman sayısını verir

💡 Örnek:

```js
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // tekrar eklenmez
console.log(set); // Set {1, 2}
```

---

## 🟦 Map
📌 Tanım:
Map, her türden anahtar kullanarak anahtar-değer (key-value) yapısında veri tutar.

✅ Özellikler:

`.set(key, value)` => Belirtilen anahtar (key) için bir değer (value) tanımlar veya günceller.

`.get(key)` => Verilen anahtarın değerini döner.

`.has(key)` => Anahtarın Map içinde olup olmadığını kontrol eder. (true/false)

`.delete(key)` => Belirtilen anahtarı ve değerini siler.

`.clear()` => Tüm anahtar-değer çiftlerini siler.

`.size ` => Map içindeki eleman sayısını verir.

💡 Örnek:

```js
const map = new Map();

// Veri ekleme
map.set("ad", "Mert");
map.set("yas", 24);

// Veri çekme
console.log(map.get("ad")); // "Mert"
console.log(map.get("yas")); // 24

// Anahtar var mı?
console.log(map.has("ad")); // true

// Eleman sayısı
console.log(map.size); // 2

// Eleman silme
map.delete("yas");
console.log(map.has("yas")); // false

// Tümünü sil
map.clear();
console.log(map.size); // 0

```

---

## 🔹 Destructuring
📌 Tanım:
Dizi ya da objelerden verileri tek satırda çekip değişkenlere atama işlemidir.

```js
const [a, b] = [10, 20];
const { ad, yas } = { ad: "Mert", yas: 24 };

console.log(a, b); // 10 20
console.log(ad, yas); // Mert 24
```

---

## 🔹 Spread / Rest
📌 Spread: Değerleri dağıtır
📌 Rest: Değerleri toplar

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3]; // Spread

function topla(...sayilar) { // Rest
  return sayilar.reduce((x, y) => x + y, 0);
}
```

---

## 🔹 Callback Function
📌 Tanım:
Bir fonksiyona başka bir fonksiyon parametre olarak verilir ve belirli bir işlem sonunda çalıştırılır.

```js
function islem(sayi, callback) {
  const sonuc = sayi * 2;
  callback(sonuc);
}

islem(5, function (x) {
  console.log("Sonuç:", x);
});
```

---

## 🔹 Promise
📌 Tanım:
Asenkron işlemleri temsil eden, resolve (başarı) ve reject (hata) durumlarını yöneten bir yapıdır.

```js
const soz = new Promise((resolve, reject) => {
  let basarili = true;
  if (basarili) resolve("Tamamlandı");
  else reject("Hata oluştu");
});

soz.then(sonuc => console.log(sonuc)).catch(hata => console.error(hata));
```

---

## 🔹 Fetch API
📌 Tanım:
Tarayıcı üzerinden HTTP istekleri göndermek için kullanılır. Genellikle GET ve POST isteklerinde tercih edilir.

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Hata:", err));
```

---

## 🔹 Async / Await
📌 Tanım:
Promise'ları daha okunabilir hale getirmek için `async` ve `await` anahtar kelimeleriyle kullanılır.

```js
async function getir() {
  try {
    const cevap = await fetch("https://jsonplaceholder.typicode.com/users");
    const veri = await cevap.json();
    console.log(veri);
  } catch (hata) {
    console.error("Hata:", hata);
  }
}

getir();
```

---

## 🔹 Genel JavaScript Bilgileri

- JavaScript dinamik ve zayıf tür denetimli bir dildir.
- Objeler ve diziler referans tiptir.
- `Set`, benzersiz değerleri tutmak için kullanılır.
- Nesne yönelimli yapı kurulabilir (`class` vs), fakat genellikle fonksiyonel programlama tercih edilir.

---
