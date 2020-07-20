import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-3">Hiển thị sản phẩm</h1>
                    <p className="lead">sử dụng reactJS lấy dữ liệu từ NodeJS</p>
                    <hr className="my-2" />
                </div>
            </div>
        )
    }
}
