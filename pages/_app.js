import '@/styles/globals.css'
import Sidebar from '../components/Sidebar'
export default function App({ Component, pageProps }) {
  return <>
    <Sidebar />
    <div className='mt-6  ml-32 mr-16'>
      <Component {...pageProps} />
    </div>
  </>
}
