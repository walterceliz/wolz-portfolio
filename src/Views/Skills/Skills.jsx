import React, { Component } from 'react'
import './Skills.css'

import Skill from './Skill'

class Skills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

   /*  handleOnclick = (type) => {
        setState(Techs.filter(tech=> tech.type === type))
        console.log(type)
    } */

    

    componentDidMount() {

    }
    

    render() {
        return (
            <div className="skillsBack">
                <Skill/>
                <button type="button" className="btn btn-outline-warning fE"
                /* onClick={() => {handleOnclick('frontEnd')}} */>Front-End
                </button>

                <button type="button" className="btn btn-outline-warning bE"
               /*  onClick={() => {handleOnclick('backEnd')}} */>-Back-End
                </button>
            </div>
        )
    }
}

export default Skills