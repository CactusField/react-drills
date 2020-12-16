import React, {Component} from 'react'

export default class Image extends Component{
    render(){
        return(
            <section>
                <img src={this.props.url} />
                <div>Breathing Style 11</div>
            </section>
        )
    }
}