import React, {Component} from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

//import avatar from "assets/img/faces/marc.jpg";

import {AccountCircle, LockRounded} from "@material-ui/icons"
import { InputAdornment } from "@material-ui/core";


  const baseUrl="mysql://uhyznnycbl5pbww7:LR4qc07c6LtKiHgjrnE0@bawdkc5uydt2x70ujxbp-mysql.services.clever-cloud.com:3306/bawdkc5uydt2x70ujxbp";
  const cookies = new Cookies();

  class Login extends Component {
      state={
          form:{
              username: '',
              password: ''
          }
      }

      handleChange=async e=>{
          await this.setState({
              form:{
                  ...this.state.form,
                  [e.target.name]: e.target.value
              }
          });
      }

      iniciarSesion=async()=>{
          await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
          .then(response=>{
              return response.data;
          })
          .then(response=>{
              if(response.length>0){
                  var respuesta=response[0];
                  cookies.set('id', respuesta.id, {path: "/"});
                  cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
                  cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
                  cookies.set('nombre', respuesta.nombre, {path: "/"});
                  cookies.set('username', respuesta.username, {path: "/"});
                  alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                  window.location.href="./admin";
              }else{
                  alert('El usuario o la contraseña no son correctos');
              }
          })
          .catch(error=>{
              console.log(error);
          })

      }

      componentDidMount() {
          if(cookies.get('username')){
              window.location.href="./admin";
          }
      }
      render(){
        return (
          <div>
          <GridContainer style ={{minHeight: '100vh'}}>
            <GridItem xs={12} sm={6}>
              <img src="https://img.freepik.com/vector-gratis/servicio-coche-compartido-transporte-movil-ciudad-ilustracion-concepto-negocio_114835-111.jpg?size=626&ext=jpg" style= {{width: '100%', height: '100%', objectFit: 'cover'}} alt="brand"/>
              </GridItem>
              <GridContainer xs={12} sm={6} 
              aligItems="center"
              direction="column"
              justify= "space-between"
              style= {{padding: 10}}>
      
                <div />
      
                <div>
                  <GridContainer justify="center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5OPmsn8YBaTe1RRLO0qFUcZy4H9_koe1W_Q&usqp=CAU" 
                    width={200}
                    alt="logo"/>
                    </GridContainer>
                    <CardHeader style={{ display: "flex", flexDirection: "column", maxWidth: 400, minWidth: 300,}}>
        
                      <CustomInput
                        labelText="Username"
                        id="username"
                        margin="normal"
                        name="username"
                        className="form-control"
                        onChange={this.handleChange}
                        InputProps={{startAdorment:(
                          <InputAdornment position ="start">
                          <AccountCircle />
                          </InputAdornment>
                        )}}
                        
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        type="password"
                        id="password"
                        margin="normal"
                        className="form-control"
                        onChange={this.handleChange}
                        InputProps={{startAdorment:(
                          <InputAdornment position ="start">
                          <LockRounded />
                          </InputAdornment>
                        )}}
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      <div style={{heigth: 20 }}/>
                  <Button color="primary" style= {{width: '50%', height: '50%', marginLeft: 100}} round variant="contained" className="btn btn-primary" onClick={()=> this.iniciarSesion()}>
                    Login
                  </Button>
                    <div style={{ height: 20 }} />
                    
                  </CardHeader> 
                  <CardFooter>
                  <div >
                    <a href="./Registro" onClick={e => e.preventDefault()}>
                      Aún no estoy registrado.
                    </a>
                  </div>
                  </CardFooter>
                <CardFooter >
                  <div >
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      olvide mi contraseña
                    </a>
                  </div>
                </CardFooter>
              </div>
              <div />
              </GridContainer>     
          </GridContainer>
          </div>
        );
      }
  
}

export default Login;
