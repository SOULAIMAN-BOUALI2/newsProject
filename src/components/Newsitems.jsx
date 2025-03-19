import React from 'react'

export const Newsitems = ({title, description, src, url}) => {
  return (
    <div >
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " >
  <img src={src} style={{height:"200px",width:"300px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,55):"There is no description for this news. You can visit the website to learn more about it."}</p>
    <a href={url} className="btn btn-primary">Voir plus</a>
  </div>
</div>
    </div>
  )
}
