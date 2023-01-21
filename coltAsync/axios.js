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

getStarWarsPerson(2);
getStarWarsPerson(6);