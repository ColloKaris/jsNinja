// axios.get("https://swapi.dev/api/people/1/")
// .then(res => {
//     console.log("RESPONSE: ", res.data);
// })
// .catch(e => {
//     console.log("ERROR!", e);
// })

//REFACTOR THE ABOVE CODE TO BE AN ASYNC FUNCTION
const getStarWarsPerson = async (id) => {
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
        console.log(res.data)
    }
    catch(e) {
        console.log('ERROR', e)
    }
    
}


const jokes = document.querySelector('#jokes')
const getDadJoke = async () => {
    const config = {headers: {Accept: 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    //console.log(res.data);
    const newLI = document.createElement('li');
    newLI.append(res.data.joke);
    jokes.append(newLI)
}

const button = document.querySelector('button')
button.addEventListener('click', () => {
    getDadJoke();
})
