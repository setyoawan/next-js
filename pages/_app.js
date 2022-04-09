import Layout from '../components/Layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // dicomment karena ingin mengambil page title secara dinamis
    // <Layout pageTitle='page title'>
    // </Layout>
    <Component {...pageProps} />
  )
}

export default MyApp
