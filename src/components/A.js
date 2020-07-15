import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class A extends Component {
    static defaultProps={
        d:5,
        e:5
    }

    static propTypes={
        a:function(prop,porpName,componentName){
            console.log(prop,porpName,componentName)
        }
    }

    render() {

        // this.props.a=666
        console.log(this.props)
        return (
            <div>
                
            </div>
        )
    }
}
