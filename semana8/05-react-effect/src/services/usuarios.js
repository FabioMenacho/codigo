// export const getUsuarios = () => {
//     fetch("https://reqres.in/api/users").then((response)=>{
//         return response.json();
//     }).then(rpta=>{
//         // es error ya que hace llamadas infinitas sin el useEffect
//         setUsuarios(rpta.data)
//         // console.log(rpta.data);
//     })
// }

export const getUsuarios = async () => {
    let response = await fetch("https://reqres.in/api/users")
    let rpta = await response.json();
    return rpta.data;
}