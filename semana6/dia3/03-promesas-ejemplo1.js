
axios.get("https://jsonplaceholder.typicode.com/todos").then((rpta) => {
    console.log(rpta);
    console.log(rpta.data);
}).catch((error) => {
    console.log(error);
});