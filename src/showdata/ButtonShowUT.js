import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonShowUT extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./ShowUT'}> <button type="button" className="btn btn-primary">อุตรดิตถ์</button> </Link>
            </div>
        );
    }
}
export default ButtonShowUT;