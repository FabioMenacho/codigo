import React, {useRef} from 'react'

const FormsUseRef = () => {

    const miH1 = useRef();
    const inputNombreRef = useRef();
    const inputEmailRef = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e);
        console.log(inputNombreRef.current.value);
        console.log(inputEmailRef.current.value);
    }

    return (
        <>
            <h1 className="display-4" ref={miH1}>Usando useRef</h1>
            <button onClick={() => {
                miH1.current.classList.add("text-danger");
                console.log(miH1);
                console.log(miH1.current);
            }}>Cambiar color de título</button>
            <hr />
            <main className="container">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <div className="card shadow">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="inputNombre">Nombres:</label>
                                        <input type="text" id="inputNombre" className="form-control" ref={inputNombreRef}/>
                                    </div>
                                    <div>
                                        <label htmlFor="inputEmail">Email:</label>
                                        <input type="email" id="inputEmail" className="form-control" ref={inputEmailRef}/>
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

export default FormsUseRef
