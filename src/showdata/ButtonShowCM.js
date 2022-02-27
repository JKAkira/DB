import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonShowCM extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./ShowCM'}> <button type="button" className="btn btn-primary">เชียงใหม่</button> </Link>
            </div>
        );
    }
}
export default ButtonShowCM;