import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonShowLPO extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./ShowLPO'}> <button type="button" className="btn btn-primary">ลำพูน</button> </Link>
            </div>
        );
    }
}
export default ButtonShowLPO;