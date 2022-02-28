import React, {Component} from "react";
import axios from "axios";
import {ip,port} from "../setIP/setting";

export default class Register extends Component{
    constructor() {
        super();
        this.state = {
            idkey:"",
            firstname:"",
            lastname:"",
            auto:""
        }
        this.handleChang = this.handleChang.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
    }
    handleChang = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleClicked(){
        let url = `https://localhost:3000/data`;
        let data = {
            idkey:this.state.idkey,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            auto:this.state.auto
        }
        axios.post(url,data)
        this.setState({
            idkey:"",
            firstname:"",
            lastname:"",
            auto:""
        });
    }

    render() {
        return(
            <div>
                <div className="App">
                <h2 className="my-4">Register<br/></h2>
                    <hr/>
                </div>
                <form className="container">
                    <div className="form-group">
                        <label className="text-white" >ระดับการศึกษา</label>
                        <input type="text" className="form-control" id="firstname" onChange={this.handleChang} value={this.state.firstname}/>
                    </div>
                    <div className="form-group">
                        <label className="text-white" >Email</label>
                        <input type="text" className="form-control" id="firstname" onChange={this.handleChang} value={this.state.auto=JSON.parse(localStorage.getItem('user')).email}/>
                    </div>
                    <div className="form-group">
                        <label className="text-white"  >จังหวัด</label>
                        <input type="text" className="form-control" id="lastname" onChange={this.handleChang} value={this.state.lastname}/>
                    </div>
                    <div className="form-group">
                        <label className="text-white"  htmlFor="id">ชื่อ</label>
                        <input type="text" className="form-control" size="10" id="idkey" onChange={this.handleChang} value={this.state.idkey}/>
                    </div>
                    <a href="/showdata"> 
                    <button type="button" className="btn btn-primary" onClick={this.handleClicked}>Submit</button>
                    </a>
                </form>
            </div>
        );
    }
}
