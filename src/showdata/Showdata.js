import React, {Component} from "react";
import axios from "axios";
import Modal from 'react-awesome-modal';
import './Showdata.css';
//import '../../server/app';
import {ip,port} from "../setIP/setting";

export default class Showdata extends Component{
    constructor() {
        super();
        this.state ={
            list:[],
            idkey:"",
            firstname:"",
            lastname:"",
            time:""
        }
        this.handleChang = this.handleChang.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
        //console.log("hello show data");
    }
    componentDidMount() {
        //console.log("before get data");
        this.getData();
        //console.log("after get data");
    }
    getData = () => {
        console.log("before fetch data");
        fetch('/data')
            .then(res => res.json())
            .then(list => this.setState({ list }))
        console.log("after fetch data");
    }

    onDelete=(user)=>{
        let url = `https://localhost:3000/delete`;
        let data = {
            idkey:user.id_P
        }
        axios.put(url,data)
        setTimeout(()=>{this.componentDidMount()},1)
    }

    openModal() {
        this.setState({
            visible : true
        });

    }
    closeModal() {
        this.setState({
            visible : false
        });
    }
    call=(user)=>{
        this.openModal();
        this.setState({
            idkey:user.id_P,
            firstname:user.firstname_P,
            lastname:user.lastname_P,
            time:user.time
        })
    }
    handleChang = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
        let url = `https://localhost:3000/data`;
        let data = {
            idkey:this.state.idkey,
            firstname:this.state.firstname,
            lastname:this.state.lastname ,
            time:this.state.time
        }
        axios.put(url,data)
    }

    handleClicked(){
        let url = `https://localhost:3000/data`;
        let data = {
            idkey:this.state.idkey,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            time:this.state.time
        }
        axios.put(url,data)
        this.setState({
            idkey:"",
            firstname:"",
            lastname:"",
            time:""
        });
	this.closeModal();
        setTimeout(()=>{this.componentDidMount()},1)
    }
    render() {
        let {list} = this.state;

        return (
            <div className="App">
                <h2 className="my-4">Users Information<br/></h2>
                <hr/>
                <div className="container p-3 my-3 bg-dark text-white">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                            <th>ชื่อ</th>
                            <th>อีเมล</th>
                            <th>จังหวัด</th>
                            <th>เวลา</th>
                            </tr>
                        </thead>
                        <tbody>
                                {list.map((user) =>{
                                    return(
                                        <tr>
                                            <td>{user.id_P}</td>
                                            <td>{user.firstname_P}</td>
                                            <td>{user.lastname_P}</td>
                                            <td>{user.time}</td>
                                            <td><button type="button" class="btn btn-warning" onClick={()=>this.call(user)}>Edit</button></td>
                                            <td><button type="button" class="btn btn-danger"  onClick={()=>this.onDelete(user)}>Delete</button></td>
                                            <div className="box">
                                                <Modal visible={this.state.visible}
                                                       width="1200"
                                                       height="600"
                                                       effect="fadeInUp"
                                                       onClickAway={() => this.closeModal()}
                                                >
                                                    <form className="container" id='form'>
                                                        <div className="form-group">
                                                            <h3><label htmlFor="id">ID: {this.state.idkey}<br/></label></h3>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>firstname:</label>
                                                            <input type="text" className="form-control" id="firstname" onChange={this.handleChang} value={this.state.firstname}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>lasttname:</label>
                                                            <input type="text" className="form-control" id="lastname" onChange={this.handleChang} value={this.state.lastname}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Time:</label>
                                                            <input type="text" className="form-control" id="Time" onChange={this.handleChang} value={this.state.time}/>
                                                        </div>
                                                        <button type="button" className="btn btn-primary" onClick={this.handleClicked}>Submit</button>
                                                        
                                                    </form>
                                                </Modal>
                                            </div>
                                        </tr>
                                    )})}
                        </tbody>
                    </table>
                </div><br/>
            </div>
        );
    }
}
