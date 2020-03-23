import React from 'react'
import './Info.css'

const Info = (props) => {
    return (
        <div className="infoContainer">
            <h2>{props.name}</h2>
            <h1>{props.compname}</h1>
            <hr />
            <p>{props.iam}</p>
        </div>
    )
}

export default Info