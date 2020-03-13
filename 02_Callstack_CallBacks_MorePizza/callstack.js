let awesome = function (){
    console.log('2');
};

let awesomesauce = function(){
    console.log('1');
    awesome();
    console.log('3');
};

awesomesauce();

let btn = document.querySelector('button');
btn.addEventListener('click', function(){
    let myDate;
    for (let i = 0; i < 1000000; i ++){
        let date = new myDate();
        myDate = date;
    }
    console.log(myDate);

    let pElem = document.createElement('p');
    pElem.textContent = 'this is a para, yo-yo';
    document.body.appendChild(pElem);
});

function loadAsset(url, type, callback){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;
    xhr.onload = function(){
        callback(xhr.response);
    };
    xhr.send();

}

//callback function
function displayImage(blob){
    let objectURL = URL.createObjectURL(blob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);}

loadAsset('https://leihan.ca/JavaScript/week9inclass/assets/pizza-3.jpg',
    'blob', displayImage);