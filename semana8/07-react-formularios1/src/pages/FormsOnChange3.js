import React, { useState } from 'react'

const FormsOnChange3 = () => {
    const [error, setError] = useState([]);
    const [formulario, setFormulario] = useState({
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
            // cuando aumentamos un atributo más no necesitamos aumentar nada aca
            ...formulario,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        }
        setFormulario(objTemporal)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formulario.nombre.trim() === "") {
            // establecer un error
            setError("El nombre es obligatorio");
            return;
        }

        if (formulario.email.trim() === "") {
            // establecer un error
            setError("El email es obligatorio");
            return;
        }

        setError("");
        console.log(formulario);
        // console.log(e);
    }

    return (
        <>
            <h1 className="display-4" >Usando la función onChange</h1>

            <hr />

            <main className="container">
                {
                    error.length > 0 ? (
                        <div className="row">
                            <div className="col">
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            </div>
                        </div>
                    )
                        : null
                }

                <div className="row justify-content-center">
                    <div className="col-5">
                        <div className="card shadow">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="inputNombre">Nombres:</label>
                                        {/* name=nombre tiene q coincidir con formulario.name=nombre */}
                                        <input type="text" id="inputNombre" className="form-control" value={formulario.nombre} onChange={handleChange} name="nombre" />
                                        <small>Caracteres: {formulario.nombre.length}</small>
                                    </div>
                                    <div>
                                        <label htmlFor="inputEmail">Email:</label>
                                        <input type="email" id="inputEmail" className="form-control" value={formulario.email} onChange={handleChange} name="email" />
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
                                            <label htmlFor="">Visa</label>
                                            <input type="radio" name="pago" value="v" onChange={handleChange} checked={formulario.pago === "v"} />

                                        </p>
                                        <p>
                                            <label htmlFor="">Efectivo</label>
                                            <input type="radio" name="pago" value="e" onChange={handleChange} checked={formulario.pago === "e"} />

                                        </p>
                                        <p>
                                            <label htmlFor="">Yape</label>
                                            <input type="radio" name="pago" value="y" onChange={handleChange} checked={formulario.pago === "y"} />
                                        </p>
                                    </div>
                                    <div>
                                        <label htmlFor="">Escoger asignaturas:</label>
                                        <p>
                                            <label htmlFor="">Programación Orientada a Objetos</label>
                                            <input type="checkbox" checked={formulario.poo} name="poo" onChange={handleChange} />
                                        </p>
                                        <p>
                                            <label htmlFor="">JavaScript</label>
                                            <input type="checkbox" checked={formulario.js} name="js" onChange={handleChange} />
                                        </p>
                                        <p>
                                            <label htmlFor="">Matemáticas discretas</label>
                                            <input type="checkbox" checked={formulario.md} name="md" onChange={handleChange} />
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

export default FormsOnChange3
