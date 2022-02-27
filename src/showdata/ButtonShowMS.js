import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonShowMS extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./ShowMS'}> <button type="button" className="btn btn-primary">เเม่ฮ่องสอน</button> </Link>
            </div>
        );
    }
}
export default ButtonShowMS;