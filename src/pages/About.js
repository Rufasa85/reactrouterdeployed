import React, { Component } from 'react'
import DevCard from '../components/DevCard'

export default class About extends Component {
    state = {
        devs:["Joe","Trae","Fred"]
    }
    render() {
        return (
            <div>
                {this.state.devs.map(dev=><DevCard key={dev}name={dev}/>)}
            </div>
        )
    }
}
