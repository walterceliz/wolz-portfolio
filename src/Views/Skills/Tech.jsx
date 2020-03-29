import React from 'react'

const Tech = (props) => {
    return(
        <div class="carousel-item active">
          <img src={props.img} class="d-block w-100" alt="..." />
          <div class="carousel-caption">
            <h5>{props.tech}</h5>
            <p>{props.level} {props.hash}</p>
          </div>
        </div>
    )
}

export default Tech