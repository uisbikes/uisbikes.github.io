import {React, useEffect} from "react";
import jwtDecode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";

function Login() {
  const google = window.google;
  const user = useSelector(state => state)
  const dispatch = useDispatch(); 

  const login = (userObject) => {
    dispatch({
      type : "LOGIN", 
      payload : {
        name : userObject.name, 
        email : userObject.email
      }
    })

    document.getElementById("signInDiv").hidden = true; 
  }

  const logout = () => {
    dispatch({
      type : "LOGOUT", 
    })

    
    document.getElementById("signInDiv").hidden = false;
    initializeApp();
    renderLoginButton();  
  }
  
  const handleCallbackResponse = (response) => {
    var userObject = jwtDecode(response.credential);
    
    if(userObject.hd === 'uis.edu') login(userObject); 
  }

  const initializeApp = () => {
    google.accounts.id.initialize({
      client_id: "148420629269-5e7qakcb8vsqqpdean9l8kmpj5fpgemn.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
  }

  const renderLoginButton = () => {
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"), 
      {
        theme: "outline", 
        size: "medium"
      }
    );
  }

  useEffect(() => {
    if(user.name) return
    initializeApp(); 
    renderLoginButton(); 
  }, [])

  return (
    <div>
      <div id="signInDiv"></div>
       {(user.name) &&
          <div className="text-light d-flex ">
            <p className= "m-2">{user.name}</p>
            <button className="btn btn-primary mx-2" onClick={() => logout()}>Sign out</button>
          </div>
       }
    </div>
  )
}

export default Login;


