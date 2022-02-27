import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonShowLP extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./ShowLP'}> <button type="button" className="btn btn-primary">ลำปาง</button> </Link>
            </div>
        );
    }
}
export default ButtonShowLP;