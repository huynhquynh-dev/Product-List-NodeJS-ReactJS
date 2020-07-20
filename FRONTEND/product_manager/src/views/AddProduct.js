import React, { Component } from 'react';
import axios from 'axios';

const addProductAction = (product_name, product_price, image) => (
    axios.post('/add', {product_name, product_price, image})
         .then((resp) => resp.data)
)

class AddProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_name:'',
            product_price:'',
            image:''
        }
    }

    isChage = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
            
        })
    }

    getProduct = () => {
        // var {product_name} = this.state;
        // var {product_price} = this.state;
        // var {image} = this.state;
        console.log(this.state);
        
        var {product_name, product_price, image}= this.state;
        addProductAction(product_name, product_price, image).then((response) => 
            console.log(response)
        );
    }
    

    render() {
        return (            
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <form>
                            <div className="form-group">
                                <label htmlFor="product_name">Tên sản phẩm</label>
                                <input onChange={(event) => this.isChage(event)} type="text" name="product_name" id="product_name" className="form-control" placeholder="Nhập tên sản phẩm" aria-describedby="helpId" />
                                <small id="helpId" className="text-muted">Nhập tên vào</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="product_price">Giá sản phẩm</label>
                                <input onChange={(event) => this.isChage(event)} type="text" name="product_price" id="product_price" className="form-control" placeholder="Nhập giá sản phẩm" aria-describedby="helpId" />
                                <small id="helpId" className="text-muted">Nhập giá vào</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Link ảnh sản phẩm</label>
                                <input onChange={(event) => this.isChage(event)} type="text" name="image" id="image" className="form-control" placeholder="Nhập link ảnh sản phẩm" aria-describedby="helpId" />
                                <small id="helpId" className="text-muted">Nhập link ảnh vào</small>
                            </div>
                            <button onClick={() => this.getProduct()} type="reset" className="btn btn-info">Thêm mới</button>
                        </form>
                    </div>
                </div>
            </div>            
        );
    }
}

export default AddProduct;