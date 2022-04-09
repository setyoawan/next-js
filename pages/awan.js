import Layout from '../components/Layout/Layout';
import Styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Awan() {
    return (   
        <>
        <Layout pageTitle='About'>            
            <p className='title'>Setyo Awan Prakoso</p>
            
            <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                <Image src="/awan.jpg" width={200} height={350} alt='photo profile'></Image>
            </div>
        </Layout>  
        </>   
    )
}