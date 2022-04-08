import Link from 'next/link';
import Styles from './Footer.module.css';

export default function Footer() {
    return(
        <div className={Styles['copy-right']}>
        <p> copy right 2022</p>
        </div>
    )
}