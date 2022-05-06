import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import QuanLiNguoiDung from './QLND/QuanLiNguoiDung';

function App() {
  return (
    <Provider store={store}>

      <div className="App">

      
      <QuanLiNguoiDung/>


      </div>
    </Provider>
  );
}

export default App;
