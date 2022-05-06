import React, { Component } from 'react'
import {connect} from 'react-redux'


class TableNguoiDung extends Component {



  renderTable = () => {
    let count = 1;
    return this.props.mangND.map((nd) => {
      return <tr key={nd.maSV}>
        <td>{count++}</td>
        <td>{nd.maSV}</td>
        <td>{nd.hoTen}</td>
        <td>{nd.email}</td>
        <td>{nd.sdt}</td>
        <td>
          <button onClick={() => { 
            let action = {
              type:"XOA_ND",
              maSVXoa: nd.maSV
            }
            this.props.dispatch(action);

           }} className='btn btn-danger'>Xóa</button>
          <button onClick={() => { 
            let action = {
              type:"XEM_THONG_TIN",
              tkNguoiDung: nd.maSV
            }
            this.props.dispatch(action);

           }} className='btn btn-info'>Xem</button>
          </td>
      
      </tr>
    })
  }


  render() {
    console.log(this.props.mangND)
    return (
      <div className="card">
        <div className="card-header bg-dark text-text-white">
          Table
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Mã SV</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Email</th>
                <th scope="col">Sđt</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.renderTable()}
            </tbody>
          </table>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangND: rootReducer.QLNDReducer.mangND
  }


}

export default connect(mapStateToProps)(TableNguoiDung)