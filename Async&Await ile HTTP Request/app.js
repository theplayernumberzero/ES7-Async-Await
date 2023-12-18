class Request{

    async get(url){
        
        const response = await fetch(url);  //Response objesi elde edildi

        const data = await response.json(); //JSON objesi

        return data;
    }
    async post(url, data){
        
        const response = await fetch(url, {
                     method: 'POST',
                     body: JSON.stringify(data),
                     headers: {
                         'Content-type': 'application/json; charset=UTF-8',
                     },
                 })     //Response objesi gelecek

        const responseData = await response.json();
        return responseData;
    }

    async put(url, data){

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        const responseData = await response.json();
        return responseData;
    }
    async delete(url){
        const response = await fetch(url, {
                 method: 'DELETE',
                 });
        // const data = await response.json();
        return "Veri silme işlemi başarılı";
    }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => {
    console.log(albums);    //asenkron çalıştığı için albums değer aldığı anda yazdırılmaya çalışılmalı
})
.catch(err => console.error(err));

request.post("https://jsonplaceholder.typicode.com/albums",{userId:1, title:"Harry Potter"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.error(err));

request.put("https://jsonplaceholder.typicode.com/albums/1", {userId:10, title:"James Bond"})
.then(editedAlbum => console.log(editedAlbum))
.catch(err => console.error(err));

request.delete("https://jsonplaceholder.typicode.com/albums/2")
.then(message => console.log(message))
.catch(err => console.error(err));