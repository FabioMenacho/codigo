import React from 'react'

const Noticia = (props) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
              <img src={props.noti.urlToImage} alt="" className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">{props.noti.title}</h3>
                <p className="card-text">
                  {props.noti.content}
                </p>
                <p className="d-flex justify-content-between">
                <small className="text-muted">{props.noti.author}</small>
                <small className="text-muted">{props.noti.publishedAt}</small>
                </p>
                
              </div>
            </div>
          </div>
    )
}

export default Noticia
