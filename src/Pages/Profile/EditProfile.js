import React from 'react';

import TextField from '@material-ui/core/TextField';
import Header from '../../components/Header';

import PhotoSelector from '../../components/PhotoSelector';
import Button from '../../components/Button';
import {postRequest} from '../../components/CallApi'

export default class EditPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      photo:null,
      name:'',
      phone:'',
      email: '',
      altEmail: '',
      about:'',
      headline: '',
      linkedin: '',
      github: '',
      codeforces: '',
      codechef: '',
      error: false,
      errorMessage: "Enter All Fields Marked *",
      bacth: "EUR"
    }

   
  }
  componentDidMount(){
     postRequest('profile/getprofiledetails',
      {
        'email':window.localStorage.getItem('email'),
        'password':window.localStorage.getItem('password')
      },
      (res)=>{
            this.setState({
              name:res.response.name,
              altEmail: res.response.email,
              phone:res.response.phone,
              about:res.response.profile_description,
              headline: res.response.headline,
              linkedin: res.response.linkedin,
              github: res.response.github,
              codeforces: res.response.codeforces,
              codechef: res.response.codechef
            })
      }
    )
  }

  handleChange = (event) => {
    setCurrency(event.target.value);
  };

  render(){
    return(
      <div className = "edit__detail">
        <Header logout={true}/>
        <div className = "edit__detail--top">
          <div className = "edit__detail--picture">
            <h1>Profile Picture</h1>
            <PhotoSelector
              aspectRatio={1}
              returnValue={(file) => {
                this.setState({photo:file});
              }}
            />
          </div>

          <div className = "edit__detail--personal">
            <h1>Personal Details</h1>
            <TextField
              label='Full Name*'
              value={this.state.name}
              onChange={(e)=>this.setState({name:e.target.value})}
              variant = "filled"
              style={{
                width: '40%',
                marginLeft: 10,
                marginRight: 5,
                marginBottom : 5
              }}
              InputProps = {{
                style: {
                  fontWeight: 300,
                  color: 'black',
                  fontSize: 20
                }
              }}
              InputLabelProps = {{
                style: {
                  fontWeight: 500,
                  color: 'purple',
                  fontSize: 15
                }
              }}
              disabled
            />
            <TextField
              label='Batch'
              value={this.state.batch}
              onChange={(e)=>this.setState({batch:e.target.value})}
              variant = "filled"
              style={{
                width: '20%',
                marginLeft: 5,
                marginRight: 10,
                marginBottom : 5
              }}
              InputProps = {{
                style: {
                  fontWeight: 300,
                  color: 'black',
                  fontSize: 20
                }
              }}
              InputLabelProps = {{
                style: {
                  fontWeight: 500,
                  color: 'purple',
                  fontSize: 15
                }
              }}
              disabled
            />
            <TextField
              label='Headline*'
              value={this.state.headline}
              onChange={(e)=>this.setState({headline:e.target.value})}
              variant = "filled"
              style={{
                width: '60%',
                margin: 10,
              }}
              InputProps = {{
                style: {
                  fontWeight: 300,
                  color: 'black',
                  fontSize: 20
                }
              }}
              InputLabelProps = {{
                style: {
                  fontWeight: 500,
                  color: 'purple',
                  fontSize: 15
                }
              }}
            />
            <TextField
              label='Description About Yourself'
              value={this.state.about}
              onChange={(e)=>this.setState({about:e.target.value})}
              multiline
              variant = "filled"
              style={{
                width: '60%',
                margin: 10
                
              }}
              InputProps = {{
                style: {
                  fontWeight: 300,
                  color: 'black',
                  fontSize: 20
                }
              }}
              InputLabelProps = {{
                style: {
                  fontWeight: 500,
                  color: 'purple',
                  fontSize: 15
                }
              }}
            />
          </div>
        </div>

        <div className = "edit__detail--bottom"> 
          <div className = "edit__detail--contact">
            <h1>Contact Details</h1>
            <div>
              <TextField
                label='Phone Number'
                value={this.state.phone}
                onChange={(e)=>this.setState({phone:e.target.value})}
                variant = "filled"
                style={{
                  width: 400,
                  margin: 10,
                }}
                InputProps = {{
                  style: {
                    fontWeight: 300,
                    color: 'black',
                    fontSize: 20
                  }
                }}
                InputLabelProps = {{
                  style: {
                    fontWeight: 500,
                    color: 'purple',
                    fontSize: 15
                  }
                }}
              />
              <TextField
                label='E-Mail'
                value={this.state.email}
                variant = "filled"
                style={{
                  width: 400,
                  margin: 10,
                }}
                InputProps = {{
                  style: {
                    fontWeight: 300,
                    color: 'black',
                    fontSize: 20
                  }
                }}
                InputLabelProps = {{
                  style: {
                    fontWeight: 500,
                    color: 'purple',
                    fontSize: 15
                  }
                }}
                disabled
              />
              <TextField
                label='Alternate E-Mail'
                value={this.state.altEmail}
                onChange={(e)=>this.setState({altEmail:e.target.value})}
                variant = "filled"
                style={{
                  width: 400,
                  margin: 10,
                }}
                InputProps = {{
                  style: {
                    fontWeight: 300,
                    color: 'black',
                    fontSize: 20
                  }
                }}
                InputLabelProps = {{
                  style: {
                    fontWeight: 500,
                    color: 'purple',
                    fontSize: 15
                  }
                }}
              />
            </div>
          </div>
          <div className = "edit__detail--links">
            <h2>Links</h2>
            <TextField
              label='Linkedin'
              value={this.state.linkedin}
              onChange={(e)=>this.setState({linkedin:e.target.value})}
              variant = "filled"
              style={{
                width: 400,
                margin: 10,
              }}
              InputProps = {{
                style: {
                  fontWeight: 300,
                  color: 'black',
                  fontSize: 20
                }
              }}
              InputLabelProps = {{
                style: {
                  fontWeight: 500,
                  color: 'purple',
                  fontSize: 15
                }
              }}
            />
            <TextField
              label='Github'
              value={this.state.github}
              onChange={(e)=>this.setState({github:e.target.value})}
              variant = "filled"
              style={{
                width: 400,
                margin: 10,
              }}
              InputProps = {{
                style: {
                  fontWeight: 300,
                  color: 'black',
                  fontSize: 20
                }
              }}
              InputLabelProps = {{
                style: {
                  fontWeight: 500,
                  color: 'purple',
                  fontSize: 15
                }
              }}
            />
            <TextField
              label='Codeforces'
              value={this.state.codeforces}
              onChange={(e)=>this.setState({codeforces:e.target.value})}
              variant = "filled"
              style={{
                width: 400,
                margin: 10,
              }}
              InputProps = {{
                style: {
                  fontWeight: 300,
                  color: 'black',
                  fontSize: 20
                }
              }}
              InputLabelProps = {{
                style: {
                  fontWeight: 500,
                  color: 'purple',
                  fontSize: 15
                }
              }}
            />
            <TextField
              label='CodeChef'
              value={this.state.codechef}
              onChange={(e)=>this.setState({codechef:e.target.value})}
              variant = "filled"
              style={{
                width: 400,
                margin: 10,
              }}
              InputProps = {{
                style: {
                  fontWeight: 300,
                  color: 'black',
                  fontSize: 20
                }
              }}
              InputLabelProps = {{
                style: {
                  fontWeight: 500,
                  color: 'purple',
                  fontSize: 15
                }
              }}
            />
          </div>
        </div>

        { (this.state.error)?
          <p className = "error">{this.state.errorMessage}</p>
          :""
        }
        <Button
          text = "Save Changes"
          type = "button edit__detail--button"
          onClick = {()=>{
            if(!this.state.name)
              this.setState({error:true})
            else if(!this.state.headline)
              this.setState({error:true})
            else
            {
              this.setState({error:false})
              if(!this.state.about ||!this.state.about.trim()) {this.setState({about:""})}
              postRequest('profile/editprofiledetails',
                {
                  'email':window.localStorage.getItem('email'),
                  'password':window.localStorage.getItem('password'),
                  'name':this.state.name,
                  'phone':this.state.phone,
                  'about':this.state.about,
                  'headline':this.state.headline,
                  'altEmail':this.state.altEmail,
                  'github':this.state.github,
                  'linkedin':this.state.linkedin,
                  'codeforces':this.state.codeforces,
                  'codechef':this.state.codechef
                },
                (res)=>{
                  if(res.message=="SUCCESS")
                  {
                    var x = document.getElementById("snackbar");
                    x.className = "show";
                    setTimeout(function(){ x.className = x.className.replace("show", ""); },1000);
                  }

                  this.setState({errorMessage:res.reason})
                }
              )
            }
          }}
        />
        <div id="snackbar">SAVED</div>
      </div>
    )
  }
}
