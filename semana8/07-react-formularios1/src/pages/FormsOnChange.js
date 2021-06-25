import React, {useState} from 'react'

// Controlar un formulario con una variable de estado
// si son muchos input es ineficiente, ver el onChange2

const FormsOnChange = () => {

    const [nombre, setNombre]= useState("");
    const [email, setEmail]= useState("");

    const handleNombreChange = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        setNombre(e.target.value);
    }

    const handleEmailChange = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let objInfo = {
            nombre: nombre,
            email: email
        };
        console.log(objInfo);
    }

    return (
        <>
            <h1 className="display-4" >Usando la función onChange</h1>
            
            <hr />

            <main className="container">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <div className="card shadow">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="inputNombre">Nombres:</label>
                                        <input type="text" id="inputNombre" className="form-control" value={nombre} onChange={handleNombreChange}/>
                                        <small>Caracteres: {nombre.length}</small>
                                    </div>
                                    <div>
                                        <label htmlFor="inputEmail">Email:</label>
                                        <input type="email" id="inputEmail" className="form-control" value={email} onChange={handleEmailChange}/>
                                    </div>
                                    <button className="btn btn-primary" type="submit">Guardar cambios</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default FormsOnChange
