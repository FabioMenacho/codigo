import React,{useState} from 'react'

const FormsOnChange2 = () => {
    const [formulario, setFormulario]= useState({
        nombre: "",
        email: "",
        resumen: "",
        pais: 2,
        pago: "y",
        poo: true,
        js: false,
        md: false,
    });

    const handleChange = (e) => {   
        console.log(e);     
        let objTemporal = {
            // copiamos el formulario y reemplazamos el campo name
         ...formulario, 
         [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value 
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
                                    <div>
                                        <label htmlFor="" className="form-label">Introduzca resumen</label>
                                        <textarea name="resumen" value={formulario.resumen} onChange={handleChange} id="" cols="30" rows="10" className="form-control"></textarea>
                                    </div>
                                    <div>
                                        <label htmlFor="">Seleccione país</label>
                                        <select name="pais" value={formulario.pais} onChange={handleChange} className="form-select" id="">
                                            <option value="1">Perú</option>
                                            <option value="2">Ecuador</option>
                                            <option value="3">Uruguay</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="" className="mb-3">Seleccione Tipo de Pago</label>
                                        <p>
                                            
                                            <input type="radio" name="pago" value="v" onChange={handleChange} checked={formulario.pago === "v"} />
                                            <label htmlFor="">Visa</label>

                                        </p>
                                        <p>
                                            
                                            <input type="radio" name="pago" value="e" onChange={handleChange} checked={formulario.pago === "e"} />
                                            <label htmlFor="">Efectivo</label>

                                        </p>
                                        <p>
                                            
                                            <input type="radio" name="pago" value="y" onChange={handleChange} checked={formulario.pago === "y"} />
                                            <label htmlFor="">Yape</label>
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="">Escoger asignaturas:</label>
                                        <p>
                                            
                                            <input type="checkbox" checked={formulario.poo===true} name="poo" onChange={handleChange} />
                                            <label htmlFor="">Programación Orientada a Objetos</label>
                                        </p>
                                        <p>
                                            
                                            <input type="checkbox" checked={formulario.js} name="js" onChange={handleChange} />
                                            <label htmlFor="">JavaScript</label>
                                        </p>
                                        <p>
                                            
                                            <input type="checkbox" checked={formulario.md} name="md" onChange={handleChange} />
                                            <label htmlFor="">Matemáticas discretas</label>
                                        </p>
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
