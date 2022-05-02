import '../../styles/_app.scss'
import store from '../redux/store/store'
import { Provider } from 'react-redux'
import Header from '../components/header/header';
import { ToastContainer } from 'react-toastify';
import SideBar from '../components/sideBar/sideBar';

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <Header />
        <div className='d-flex'>
            <SideBar />
            <Component {...pageProps} />
        </div>
        <ToastContainer />
      </Provider>
    )
}

export default MyApp
