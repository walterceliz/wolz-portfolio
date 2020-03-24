import React from 'react'
import './BtnInfo.css'

const BtnInfo = (props) => {
    return (
        <div className="movete">
            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter">
                <span>👆</span>
            </button>

           {/*  Modal */}
            <div className="modal fade custom1" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Walter Wolz Developer</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div className="modal-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ea soluta dignissimos harum eaque possimus. Sunt aliquid, eius voluptates debitis accusamus officia, beatae ad doloremque eligendi unde modi adipisci dolores.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ea soluta dignissimos harum eaque possimus. Sunt aliquid, eius voluptates debitis accusamus officia, beatae ad doloremque eligendi unde modi adipisci dolores.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Descargar</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BtnInfo