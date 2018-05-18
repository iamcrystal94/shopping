import React, { Component } from 'react';


const style={
    "width":"200px",
    "height":"100px",
    "backgroundColor":"red"
}
class Test extends Component {
    
    render(){
        return (
        <div style={style}>
        hello test:{this.props.match.params.id}
        </div>);
    }
}

export default Test;