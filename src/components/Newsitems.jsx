import React from 'react'

export const Newsitems = ({title, description, src, url}) => {
  return (
    <div >
        <div className="card container" >
  <img src={src} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-primary">Voir plus</a>
  </div>
</div>
    </div>
  )
}
