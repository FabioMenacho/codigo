import React from 'react'

const Error404 = (props) => {
    // console.log(props);
    return (
        <div>
            <h1 className="display-3">Ups!</h1>
            <h4 className="text-danger">La página que estás buscando no se encuentra</h4>

            <button className="btn btn-primary" onClick={()=>{
                props.history.push("/");
            }}>Ir al inicio</button>
            
        </div>
    )
}

export default Error404
