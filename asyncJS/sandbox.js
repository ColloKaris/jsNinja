const getTodos = async () => {
    const response = await axios.get('todos.json');
    console.log(response.data)
}

getTodos()