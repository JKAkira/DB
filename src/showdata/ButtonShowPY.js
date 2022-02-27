import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonShowPY extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./ShowPY'}> <button type="button" className="btn btn-primary">พะเยา</button> </Link>
            </div>
        );
    }
}
export default ButtonShowPY;