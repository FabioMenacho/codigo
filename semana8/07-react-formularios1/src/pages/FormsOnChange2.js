import React,{useState} from 'react'

// 

const FormsOnChange2 = () => {

    const [formulario, setFormulario]= useState({
        nombre: "",
        email: ""
    });

    const handleChange = (e) => {   
        console.log(e);     
        let objTemporal = {
            // copiamos el formulario y reemplazamos el campo name
         ...formulario, 
         [e.target.name]: e.target.value 
        }
        setFormulario(objTemporal)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log(formulario);
        console.log(e);
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
                                        {/* name=nombre tiene q coincidir con formulario.name=nombre */}
                                        <input type="text" id="inputNombre" className="form-control" value={formulario.nombre} onChange={handleChange} name="nombre"/>
                                        <small>Caracteres: {formulario.nombre.length}</small>
                                    </div>
                                    <div>
                                        <label htmlFor="inputEmail">Email:</label>
                                        <input type="email" id="inputEmail" className="form-control" value={formulario.email} onChange={handleChange} name="email"/>
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

export default FormsOnChange2
