//to make request, we first create a request object
//xml represent an old data formart but it now works 

const getTodos = (callback) => {
    const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    //console.log(request, request.readyState)
    if(request.readyState === 4 && request.status === 200){
        //console.log(request, request.responseText);
        callback(undefined, request.responseText);
    } else if(request.readyState === 4){
        //console.log('could not fetch the data')
        callback('could not fetch data', undefined);
    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');
request.send();
};

console.log(1);
console.log(2);

getTodos((err, data) => {
    console.log('Callback fired');
    // console.log(err, data);
    if(err){
        console.log(err);
    } else{
        console.log(data);
    }
});

console.log(3);
console.log(4);