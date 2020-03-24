import React from 'react'
import './Home.css'
import Info from './Info'
import BtnInfo from './BtnInfo'

const Home = () => {
    return (
        <div className="homeContainer">
            <Info
                name="Walter"
                compname="Wolz"
                iam="Full Stack JavaScript"
            />
            <BtnInfo
                name="Walter, Gabriel Celiz"
                nac="Argentina"
                prov="Tucuman"
                old="27 años"
                est="Soltero"
                prim="Colegio Inmaculada Concepcion B.R.S."
                sec="Colegio Inmaculada Concepcion B.R.S."
                terc="Tecnicatura en Desarrollo de Software, Instituto 9 de julio, Tucuman (cursado completo, materias pendientes)"
                ing="Academia Rush, Tucuman (actuamente b1)"
                rolling="Full stack JavaScript en RollingCode School"
                ud1="Fundamentos de programacion"
                ud2="Fundamentos de Diseño Web (html, css, javascript)"
                ud3="React (fundamentos, core, ciclos de vida, hooks, utildiades, router, redux)"
            />
        </div>
    )
}

export default Home