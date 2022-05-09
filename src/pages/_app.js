import '../../styles/_app.scss';
import store from '../redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import Header from '../components/header/header';
import { ToastContainer } from 'react-toastify';
import SideBar from '../components/sideBar/sideBar';
const persistStr = persistStore(store)
function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistStr}>
            <Header />
            <div className='d-flex'>
                <SideBar />
                <Component {...pageProps} />
            </div>
          <ToastContainer />
        </PersistGate>
      </Provider>
    )
}

export default MyApp
