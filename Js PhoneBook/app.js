// localstorage
// sessionstorage

//bu adresteki localstorage verilerini temizler
//localStorage.clear();

// sadece ilgili elemanı siler
//localStorage.removeItem(' ');

//localStorage.isim ='Orhan';

//console.log(localStorage.isim);
// key value
// localstorage  içine sadece string depolarız
// biz ne gönderirsek gönderelim string'e dönüşür.

// olay akışı
// önce tarayıcının kendi ön tanımlı fonksiyonları çalışır
// örn form validasyonları
// sonra javascript çalışır
// sonra doğal akış gerçekleşir
// -> sayfanın değişmesi, formun bir adrese gönderilmesi gibi

// handle tutmak yakalamak, submit gönderilme işlemi
function handleFormSubmit(event) {
  event.preventDefault(); // bu method tarayıcının ön tanımlı davranışını keser.
  //   console.log(phoneBookForm);
  // eğer this kelimesini event ile tetiklenen fonksiyon içinde çağırırsak eventi tetikleyen dom objesini verir.
  //   console.log(this);

  // eğer bir input elemanına eriştiysek, .value ile içindeki değeri okuyabiliriz.
  //hatta yeni atama bile yapabiliriz.
  //   console.log(phoneBookForm["firstName"].value);

  formBook.push({
    firstName: phoneBookForm["firstName"].value,
    lastName: phoneBookForm["lastName"].value,
    emailAdress: phoneBookForm["emailAdress"].value,
    phoneNumber: phoneBookForm["phoneNumber"].value,
  });
}
// sık kullanılan eventler
// click, submit, focus, blur, keydown
phoneBookForm.addEventListener("submit", handleFormSubmit);
// event listener eklerken fonksiyon sonunda parantez aç kapa yapmayız
// çünkü yaparsak fonksiyonu o an yazıldığı yerde çağrırır
// biz otomatik olarak olay gerçekleştiğinde tetiklenmesini istiyoruz
// doğrudan id ile eriştim
// bunu sağlayan dom
// dom ile elementlerimi manipule edebilirim.

const formBook = [];

formBook.push({
  firstName: "Orhan",
  lastName: "Ekici",
  emailAdress: "orhanekici@gmail.com",
  phoneNumber: "05326141943",
});

function listAll() {
  formBook.forEach((x) => console.log(`${x.firstName} ${x.lastName}`));
}
listBtn.addEventListener("click", listAll);

/* Orhan Hocanın Kodları
// localstorage
// sessionstorage

// bu adresteki localstorage verilerini temizler
// localStorage.clear();

// sadece ilgili elemanı siler
// localStorage.removeItem('')

// localStorage.isim = 'Orhan';

// console.log(localStorage.isim)
// key value
// local storage içine sadece string depolarız
// biz ne gönderirsek gönderelim stringe dönüşür

// olay akışı
// önce tarayıcının kendi ön tanımlı fonksiyonları çalışır
// örn form validasyonu
// sonra javascript çalışır
// sonra doğal akış gerçekleşir 
// -> sayfanın değişmesi, formun bir adrese gönderilmesi gibi

// handle tutmak yakalamak, submit gönderilme işlemi
function handleFormSubmit(event) {
  event.preventDefault(); // bu method tarayıcının ön tanımlı davranışını keser
  // console.log(phoneBookForm);
  // eğer this kelimesini event ile tetiklenen fonk içinde çağırırsak
  // eventi tetikleyen dom objesini verir
  // console.log(this);

  // eğer bir input elemanına eriştiysek, .value ile içindeki değeri okuyabiliriz
  // hatta yeni atama bile yaparız.
  // console.log(phoneBookForm['firstName'].value);
  // phoneBookForm['firstName'].value = 'Kıvanç';

  phoneBook.push(
    {
      firstName: phoneBookForm['firstName'].value,
      lastName: phoneBookForm['lastName'].value,
      emailAddress: phoneBookForm['emailAddress'].value,
      phoneNumber: phoneBookForm['phoneNumber'].value
    }
  );

  // formun içindeki tüm girdileri temizler
  phoneBookForm.reset(); // flood yapılmasını engelledim.
}

// sık kullanılan eventler
// click, submit, focus, blur, keydown
phoneBookForm.addEventListener('submit', handleFormSubmit);
// event listener eklerken fonksiyon sonunda parantez aç kapa yapmayız
// çünkü yaparsak fonksiyonu o an yazıldığı yerde çağırır
// biz otomatik olarak olay gerçekleştiğinde tetiklenmesini istiyoruz

// doğrudan id ile elemente eriştim.
// bunu sağlayan dom
// dom ile elementlerimi manipule edebilirim.
// phoneBookForm.remove();
// DOM sayesinde elementler üzerinde js'de ön tanımlı bir çok method ve prop var

const phoneBook = [];
phoneBook.push(
  {
    firstName: 'Orhan',
    lastName: 'Ekici',
    emailAddress: 'orhanekici@gmail.com',
    phoneNumber: '5413045074'
  }
);

function listAll() {
  phoneBook.forEach(x => console.log(`${x.firstName} ${x.lastName}`));
}

listBtn.addEventListener('click', listAll);

 */
