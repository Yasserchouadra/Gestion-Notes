import React, { Component } from 'react';

class AuthentificationForm extends Component {
    state = { 
        //any data that this component needs
        
     }
    render() { 
        return  (
        <div className="container text-center">   
            <form className="mx-auto text-center">
                <div className="form-group">
                    <input type="email" className="form-control" id="emailInput" placeholder="Adresse mail"></input>
                    <input type="password" className="form-control" id="passwordInput" placeholder="Password"></input>
                </div> 
                <button type="submit" className="btn btn-primary text-uppercase"><a href="../../public/dashboard.html">Se connecter</a></button>
            </form>
        </div> 
        );
    }
   
}
 
export default AuthentificationForm;