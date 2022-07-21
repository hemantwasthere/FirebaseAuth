import { ToastContainer } from 'react-toastify'
import { AuthContextProvider } from '../context/AuthContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <AuthContextProvider>
    <Component {...pageProps} />
    <ToastContainer />
  </AuthContextProvider>
}

export default MyApp
