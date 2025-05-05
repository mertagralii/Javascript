while (true) {
  let stopnumber = prompt("Toplam girilecek öğrenci sayısı giriniz.");

  var ogrenciler = [];

  for (let i = 0; i < stopnumber; i++) {
    var ogrenci = prompt("Öğrencinin Adını ve Soyadını giriniz.");
    ogrenciler.push(ogrenci);
  }

  console.log("1-) Tüm öğrencileri Listele");
  console.log("2-) Sadece belirli bir öğrenciyi getir.");
  console.log("3-) Sadece belirli bir öğrenciyi Sil.");

  let chose = prompt("Seçiminizi uygun olan sayıyı giriniz.");

  if (chose == 1) {
    console.log("Tüm öğrenciler Listeleniyor...");
    for (let ogrenci of ogrenciler) {
      console.table(ogrenci);
    }
    console.log("Tüm Öğrenciler Listelendi.İşlem tamamlandı.");
    var finisChose = prompt(
      "En başa dönmek için 1 bitirmek için ise 2 ye basınız."
    );
    if (finisChose == 1) {
      console.clear();
      continue;
    }
    if (finisChose == 2) {
      console.log("Program kapatılıyor.");
      break;
    }
  }
  if (chose == 2) {
    let getOgrenci = prompt("Getirilmesini istediğiniz öğrenciyi yazınız.");
    console.log(ogrenciler[ogrenciler.indexOf(getOgrenci)]);
    console.log("İstediğiniz Öğrenci Bilgisi Getirildi.");
    let finisChose = prompt(
      "En başa dönmek için 1 bitirmek için ise 2 ye basınız."
    );
    if (finisChose == 1) {
      console.clear();
      continue;
    }
    if (finisChose == 2) {
      console.log("Program kapatılıyor.");
      break;
    }
  }
  if (chose == 3) {
    let getOgrenci = prompt("Silinmesini istediğiniz öğrenciyi yazınız.");
    let ogrenciIndexsi = ogrenciler.indexOf(getOgrenci);
    ogrenciler.splice(ogrenciIndexsi, 1);
    console.log("Silme İşlemi Gerçekleştirildi.");
    console.table(ogrenciler);
    let finisChose = prompt(
      "En başa dönmek için 1 bitirmek için ise 2 ye basınız."
    );
    if (finisChose == 1) {
      console.clear();
      continue;
    }
    if (finisChose == 2) {
      console.log("Program kapatılıyor.");
      console.clear();
      break;
    }
  }
}
