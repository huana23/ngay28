import React, { Component } from 'react'
import { connect } from 'react-redux';

class FormDangKy extends Component {


  state = {
    values:{

      maSV: '',
      hoTen: '',
      sdt: '',
      email: '',
    },
    errors: {
      maSV: '',
      hoTen: '',
      sdt: '',
      email: '',
    }
  }


  handleInput = (event) => {
    let { value, name } = event.target;



    let newValues = {...this.props.nguoiDung.values}
    // newValues.maSV
    // newValues[maSV]
    newValues[name] = value // hoTen:value, matKhau:value

    //lưu thông báo lỗi
    let newError = {...this.props.nguoiDung.errors}
    let messagerError = ''

    if(value.trim() === '') {
      // bị rỗng
      messagerError = name + "Không được để trống"
    }

    if(event.target.getAttribute('typeform') === "email") {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!reg.test(value)){
        //bị lỗi
        messagerError = name + "Không đúng đinh dạng"

      }
    }


    newError[name] = messagerError;


    this.props.dispatch({
      type:"HANDLE_INPUT",
      nguoiDung:{
        values:newValues,
        errors:newError
      }
    });









    // đổi phương pháp mới
    // this.setState({
    //   values:newValues,
    //   errors:newError
    // },() => {
    //   console.log(this.state)
    // })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log('state sumbit' , this.state)

    let isValid = true;

    //for in (duyệt từng thuộc tính đối tượng)
    //forEach()
    for(let error in this.props.nguoiDung.errors) {
      if(this.props.nguoiDung.errors[error] !== "") {
        // bị lỗi
        isValid = false;
        break;
      }
    }


    for(let value in this.props.nguoiDung.values) {
      if(this.props.nguoiDung.values[value] === " ") {
        // bị lỗi
        isValid = false;
        break;
      }
    }

      
    if(!isValid) {
      alert("Còn lỗi kìa");
      return;
    }
    // submit lên redux
    let action = {
      type:"THEM_NGUOI_DUNG",
      dataNguoiDung: this.props.nguoiDung.values 
    }
    this.props.dispatch(action);



  }

  render() {
    console.log(this.props.thongTinND)
    // let {maSV,hoTen,sdt,email} = this.props.thongTinND;

    let {maSV,hoTen,sdt,email} = this.props.nguoiDung.values;

    return (
      <div className="card">
        <div className="card-header bg-bg-dark text-text-white">
          Đăng kí
        </div>
        <div className="card-body">
          <form onSubmit={(event) => {
            this.handleSubmit(event)
          }}>
            <div className="row">
              <div className="col">
                <input value={maSV} onChange={(event) => {
                  this.handleInput(event)
                }} name='maSV' type="text" className="form-control" placeholder="Tài Khoản" />
                <p className='text-text-danger'>{this.props.nguoiDung.errors.maSV}</p>
              </div>
              <div className="col">
                <input value={hoTen} onChange={(event) => {
                  this.handleInput(event)
                }} name='hoTen' type="text" className="form-control" placeholder="Họ Tên" />
                <p className='text-text-danger'>{this.props.nguoiDung.errors.hoTen}</p>

              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <input value={sdt} onChange={(event) => {
                  this.handleInput(event)
                }} name='sdt' type="text" className="form-control" placeholder="Số Điện Thoại" />
                <p className='text-text-danger'>{this.props.nguoiDung.errors.sdt}</p>

              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <input value={email} onChange={(event) => {
                  this.handleInput(event)
                }} name='email' typeform ="email" type="email" className="form-control" placeholder="Email" />
                <p className='text-text-danger'>{this.props.nguoiDung.errors.email}</p>

              </div>
            </div>

            <button className='btn btn-success'>Đăng Ký</button>
            <button onClick={(event) => { 
              event.preventDefault();

              let action={
                type:"CAP_NHAT",
                nguoiDungCapNhat:this.props.nguoiDung.values
              }
              this.props.dispatch(action)
             }} className='btn btn-primary'>Cập Nhật</button>
          </form>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    thongTinND: rootReducer.QLNDReducer.thongTinND,
    nguoiDung: rootReducer.QLNDReducer.nguoiDung
  }
}
export default connect (mapStateToProps)(FormDangKy)