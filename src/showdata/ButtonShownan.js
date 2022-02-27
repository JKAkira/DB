import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonShownan extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./Shownan'}> <button type="button" className="btn btn-primary">น่าน</button> </Link>
            </div>
        );
    }
}
export default ButtonShownan;