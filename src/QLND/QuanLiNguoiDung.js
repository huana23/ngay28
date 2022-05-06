import React, { Component } from 'react'
import FormDangKy from './FormDangKi'
import TableNguoiDung from './TableNguoiDung'

export default class QuanLiNguoiDung extends Component {
    render() {
        return (
            <div className="container">
                <h2>
                    Quản lí người dùng
                </h2>

                <FormDangKy/>


                <TableNguoiDung/>


            </div>
        )
    }
}