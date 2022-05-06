
const QLNDState = {
    mangND:[
        {maSV:"user123",hoTen:"người dùng 1",matKhau:"1234",email:"user@gmail.com",sdt:"0906776201",loaiND:"KH"},
        {maSV:"user456123",hoTen:"người dùng 2",matKhau:"456",email:"use12@gmail.com",sdt:"1221121",loaiND:"NV"},
    ],
    thongTinND:{     
      maSV: '',
      hoTen: '',
      matKhau: '',
      sdt: '',
      email: '',
      loaiND: ''
    },
    nguoiDung:{
        values:{

            maSV: '',
            hoTen: '',
            matKhau: '',
            sdt: '',
            email: '',
            loaiND: 'KH'
          },
          errors: {
            maSV: '',
            hoTen: '',
            matKhau: '',
            sdt: '',
            email: '',
            loaiND: ''
          }
    }
}

export const QLNDReducer = (state = QLNDState, action) => {
    switch (action.type) {
        case "THEM_NGUOI_DUNG":
            // state.mangND.push(action.dataNguoiDung);
            // console.log(action.dataNguoiDung)

            //copy mảng để đổi địa chỉ ô nhớ cho mảng người dùng
            // => redux mới nhạn biết được thay đổi và render lại giao diện UI
            state.mangND = [...state.mangND,action.dataNguoiDung]
            return {...state}

        case "XEM_THONG_TIN":

            let ndTimKiem = state.mangND.find((nd) => { 
                return nd.maSV === action.tkNguoiDung
            })
            if(ndTimKiem){
                // tìm thấy
                // console.log(ndTimKiem)
                // trùng địa chỉ ô nhớ nên giá trị của value đã đổi nhưng redux không tự nhận diện để render lại
                state.nguoiDung.values = ndTimKiem;
                //COPy TẠO ĐỐI TƯỢNG MỚI
                state.nguoiDung = {...state.nguoiDung}
            }
            return{...state}
        case "HANDLE_INPUT":
            console.log(action.nguoiDung);

            state.nguoiDung = action.nguoiDung

            return{...state}
        case "CAP_NHAT":
            console.log(action.nguoiDungCapNhat);
            let mangNguoiDung = [...state.mangND]


            let ndIndex = state.mangND.findIndex((nd) => { 
                return nd.maSV === action.nguoiDungCapNhat.maSV

            })
            if(ndIndex > -1) {
                mangNguoiDung[ndIndex] = action.nguoiDungCapNhat;
            }
            state.mangND = mangNguoiDung;
            return{...state}
        case "XOA_ND":
            let mangNguoiDungXoa=[...state.mangND];
            state.mangND = mangNguoiDungXoa.filter((nd) => { 
                return nd.maSV !== action.maSVXoa
            })

            return {...state}
        default: return state;
    }
}