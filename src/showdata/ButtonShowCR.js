import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonShowCR extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./ShowCR'}> <button type="button" className="btn btn-primary">เชียงราย</button> </Link>
            </div>
        );
    }
}
export default ButtonShowCR;