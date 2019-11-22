import React from 'react';
import ReactDom from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/style.css"
import Footer from './components/footer';
import Table from './components/table';

ReactDom.render(<Table/>,document.getElementById('root'));
ReactDom.render(<Footer/>,document.getElementById('footer'));