import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div className="col-4 mb-3">
                <div className="card text-left">
                    <img className="card-img-top" src={this.props.item.image} alt=""/>
                    <div className="card-body">
                        <h4 className="card-title float-left">{this.props.item.product_name}</h4>
                        <p className="card-text float-right">{this.props.item.product_price} đ</p>
                    </div>
                </div>
            </div>
        )
    }
}
