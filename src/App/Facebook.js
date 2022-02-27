import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import ButtonShowdata from "../showdata/ButtonShowdata";
import ButtonRegister from "../register/ButtonRegister";
import './style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from "../register/Register";
import Showdata from "../showdata/Showdata";
import ButtonShownan from "../showdata/ButtonShownan";
import Shownan from "../showdata/Shownan";
import ButtonShowCM from "../showdata/ButtonShowCM";
import ShowCM from "../showdata/ShowCM";
import ButtonShowCR from "../showdata/ButtonShowCR";
import ShowCR from "../showdata/ShowCR";
import ButtonShowPY from "../showdata/ButtonShowPY";
import ShowPY from "../showdata/ShowPY";
import ButtonShowPR from "../showdata/ButtonShowPR";
import ShowPR from "../showdata/ShowPR";
import ButtonShowMS from "../showdata/ButtonShowMS";
import ShowMS from "../showdata/ShowMS";
import ButtonShowLP from "../showdata/ButtonShowLP";
import ShowLP from "../showdata/ShowLP";
import ButtonShowLPO from "../showdata/ButtonShowLPO";
import ShowLPO from "../showdata/ShowLPO";
import ShowUT from "../showdata/ShowUT";
import ButtonShowUT from "../showdata/ButtonShowUT";

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };
  responseFacebook = response => {
    // console.log(response);

    localStorage.setItem('user', JSON.stringify(response))
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  componentClicked = () => console.log("clicked");

  logoutFacebook = () => {
    localStorage.removeItem('user')
    this.setState({
      isLoggedIn: false,
      userID: '',
      name: '',
      email: '',
      picture: ''
    });
  }

  render() {
    let fbContent;

    if (localStorage.getItem('user') !== null ) {
      fbContent = (
        <div
          style={{
            width: "95%",
            margin: "auto",
            background: "black",
            color: 'white',
            padding: "25px",
            position: 'absolute',
            zIndex: 99,
            backgroundImage: 'linear-gradient(45deg, rgba(218, 132, 230, 0.84) 0%, rgba(179, 0, 89, 1) 83%)'
          }}
        >
          <img src={JSON.parse(localStorage.getItem('user')).picture.data.url} alt />
          <h2>PPAP Welcome {" "}{JSON.parse(localStorage.getItem('user')).name}</h2>
              email: {JSON.parse(localStorage.getItem('user')).email}
          <div className="my-3"><a className="btn btn-danger" href="/" onClick={this.logoutFacebook}>Logout</a></div>
          <BrowserRouter>
            <br /><br /><div className="btn-group btn-group-lg"><ButtonRegister /><ButtonShowdata />
            <ButtonShowCM/> <ButtonShowCR/><ButtonShownan/><ButtonShowPY/>
           <ButtonShowPR/><ButtonShowMS/><ButtonShowLP/>
            <ButtonShowLPO/>  <ButtonShowUT/>  </div>
            <Switch>
              <Route path='/register' component={Register} />
              <Route path='/showdata' component={Showdata} />
              <Route path='/showCM' component={ShowCM} />
              <Route path='/showCR' component={ShowCR} />
              <Route path='/shownan' component={Shownan} />
              <Route path='/showPY' component={ShowPY} />
              <Route path='/showPR' component={ShowPR} />
              <Route path='/showMS' component={ShowMS} />
              <Route path='/showLP' component={ShowLP} />
              <Route path='/showLPO' component={ShowLPO} />
              <Route path='/showUT' component={ShowUT} />
            </Switch>
          </BrowserRouter>
        </div>
      );
    } else {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            padding: "25px"
          }}
        >
          <FacebookLogin
            appId="278470590958980"
            autoLoad={false}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />
        </div>
      );
    }

    return <div>{fbContent}</div>;
  }
}
