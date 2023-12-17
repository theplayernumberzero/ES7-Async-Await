//Bu iki yeni anahtar kelime ile beraber "Promise" i çok daha güzel bir şekilde yönetebiliyoruz.

//"async" anahtar kelimesi foksiyonun mutlaka ve mutlaka bir "promise" döneceğini söylüyor.

async function test(data){
    //Datayı Promise yapısına çevirip "resolve" içine atacak
    return data;
}

test("Merhaba")
.then(response => console.log(response));

async function test2(data){

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof data === "string"){
                resolve(data);
            }
            else{
                reject(new Error("String bir değer giriniz.."));
            }
        },3000);
    });

    //await sadece async fonksiyon içinde çalışır
    let response = await promise;   //promise in resolve olmasını bekler.

    return response;
}

test2("Merhaba")
.then(response => console.log(response))
.catch(err => console.error(err));

async function getCurrency(url){
    const response = await fetch(url);  //Response Object

    //Promise in resolve olmasını bekleyecek
    const data = await response.json(); //JSON objesi

    return data;
}

getCurrency("https://api.exchaneratesapi.io/latest")
.then(data => console.log(data));