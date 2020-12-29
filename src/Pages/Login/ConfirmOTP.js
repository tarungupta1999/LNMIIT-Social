import React from 'react';
import { Link,Redirect } from 'react-router-dom';
import Recaptcha from "react-recaptcha";


import Button from '../../components/Button';
import TextField from '@material-ui/core/TextField';
import {postRequest} from '../../components/CallApi'

export default class ConfirmOTP extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      otpValid: false
    }
  }
   componentDidMount(){
      {
          const url = window.location.href;
          const parser = require('url-parameter-parser');
          const res = parser(url);
          postRequest('login/confirmotp',
          {
            'otp':res.otp,                                 
          },
          (res)=>{
            if(res.message=="SUCCESS")
            {
              this.setState({otpValid:true})
            }
            }
        )
        }
    }
  render()
  {    
    return(
      <div>
      <h1>{this.state.otpValid?"OTP was verified succesfully":"OTP is invalid or has expired"}</h1>
      <Link to="/"><button>Click here to go back to site</button></Link>
      </div>

    );
  }
}
