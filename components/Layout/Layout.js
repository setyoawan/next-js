import Footer from '../Footer';
import Header from '../Header';
import Head from 'next/head';


const Layout = ({ children, pageTitle }) => {
    return (
        <>
        <Head>
            <title> Next Js Basic | {pageTitle}</title>
            <meta name="desc" content="next js basic"></meta>
        </Head>
        <div>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </div>
        </>
    );
}

export default Layout;