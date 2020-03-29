import React from 'react'
import { Link } from 'react-router-dom'
import './BtnInfo.css'

const BtnInfo = (props) => {
    return (
        <div className="movete">
            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModalCenter">
                <span role="img" aria-label="sheep">Insert<br/>Coin</span>
            </button>

           {/*  Modal */}
            <div className="modal fade custom1" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content custom2">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle"><img src="https://upload.wikimedia.org/wikipedia/fr/4/46/Ecole_W_Logo.png" alt="logo"/></h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div className="modal-body">
                            
                        <div className="personalData">
                            <p className="per">-Mi Data-</p>
                            <p>Nombre: {props.name}.</p>
                            <p>Nacionalidad: {props.nac}.</p>
                            <p>Provincia: {props.prov}</p>
                            <p>Edad: {props.old}.</p>
                            <p>Estado civil: {props.est}.</p>
                        </div>
                        
                        <div className="education1">
                            <p className="per">-Educacion-</p>
                            <p>Primaria: {props.prim}</p>
                            <p>Secundaria: {props.sec}.</p>
                            <p>Terciaria: {props.terc}</p>
                            <p>Ingles: {props.ing}</p>
                        </div>
                        

                        <div className="education2">
                            <p className="per">-Cursos-</p>
                            <p>{props.rolling}</p>
                            <p className="per">Udemy:</p>   
                            <p>_{props.ud1}</p>
                            <p>_{props.ud2}</p> 
                            <p>{props.ud3}</p>
                        </div>        
                        

                        </div>
                        <div className="modal-footer">
                            <Link to="/skills">
                                <button type="button" className="btn btn-secondary">Habilidades</button>
                            </Link>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BtnInfo