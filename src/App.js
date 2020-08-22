import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import './App.css';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import BathtubIcon from '@material-ui/icons/Bathtub';

class app extends Component{
  state = {isSignedIn: false}
  uiConfig = {
   signinFlow: "popup",
   
   signInOptions: [
     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
     firebase.auth.EmailAuthProvider.PROVIDER_ID
   ],
   callbacks: {
     signInSuccess: () => false
   }
  }
  
  componentDidMount = ()=>{
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
    })
  }
  
  
   render() {
    return(
      <div className="App">
        <h1>WELCOME TO BATHTUB! <BathtubIcon className="bathtubIcon" /></h1> 
        {this.state.isSignedIn ? (
           <div className="app">
           <Sidebar />
           <Feed />
           <Widgets />
           </div>
        ) : (
          <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
          />
        )}
       </div>
     )
   }
}



/*function App() {
  return (
    //BEM convention
    <div className="app">
    <Sidebar />
    <Feed />
    <Widgets />
    </div>
  );
} */


export default app; 

