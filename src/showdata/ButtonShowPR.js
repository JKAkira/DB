import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonShowPR extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./ShowPR'}> <button type="button" className="btn btn-primary">เเพร่</button> </Link>
            </div>
        );
    }
}
export default ButtonShowPR;