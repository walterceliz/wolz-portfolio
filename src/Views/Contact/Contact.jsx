import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className="contactBack">
                <div className="card-deck cardcontainer d-flex justify-content-around">
                    <div className="card">
                        <img className="card-img-top" src="https://img-s2.onedio.com/id-530916f5b400726f7b000081/rev-0/raw/s-a7f94494f0f9a6b66e639386bac66ef4e3fe19dd.jpg" alt="Card image cap" />
                        {/* <div className="card-body">
                            <h5 className="card-title">+54 9 381 631 5733</h5>
                        </div> */}
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="https://media.metrolatam.com/2020/03/05/template11-0e7e1a272a61d14942d3431c7b9fd52e-600x400.jpg" alt="Card image cap" />
                        {/* <div className="card-body">
                            <h5 className="card-title">walterwolz</h5>
                        </div> */}
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="https://media.metrolatam.com/2018/05/22/gmailred-8ba88fcf23cb88ca2c4df09ade53476a-600x400.jpg" alt="Card image cap" />
                        {/* <div className="card-body">
                            <h5 className="card-title">devbywolz@gmail.com</h5>
                        </div> */}
                    </div>
                </div>

            <div className="talkbox">
                <h2>Problemas<span className="detalle1">?</span> <br />
                hablemos</h2>
            </div>
        </div>
    )
}

export default Contact