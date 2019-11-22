import React from 'react';
import ReactDom from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/style.css"
import AuthentificationForm from './components/authentificationForm';
import Footer from './components/footer';

ReactDom.render(<AuthentificationForm/>,document.getElementById('root'));
ReactDom.render(<Footer/>,document.getElementById('footer'));