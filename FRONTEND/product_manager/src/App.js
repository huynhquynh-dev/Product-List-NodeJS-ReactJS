import React, { Component } from 'react'
import './App.css';

import axios from 'axios';

import Header from './views/Header';
import Product from './views/Product';
import AddProduct from './views/AddProduct';

const getProductData = () => axios.get('/getdata01')
                                  .then((response) => response.data)

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    
    componentWillMount() {
        if (this.state.data === null) {
            getProductData().then((res) => {
                this.setState({
                    data: res
                })
            })            
        }
    }

    printData = () => {
        if (this.state.data !== null) {
            return this.state.data.map((value, key) => (
                <Product
                    key = {key}
                    item = {value}
                >                        
                </Product>
            ))
        }
    }

    render() {
        return (
            <div>
                <Header></Header>                
                <AddProduct></AddProduct>
                <hr className="my-2"/>
                <div className="container">
                    <div className="row">
                        {this.printData()}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

