import React from 'react' ;

class Heading extends React.Component{
    render () {
        return(
            <h1 style={{marginLeft : "20px"}}> {this.props.text} </h1>
        )
    }
}

export {Heading} ;