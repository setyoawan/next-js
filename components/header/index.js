import Link from 'next/link';
import Styles from './Header.module.css';

export default function Header() {
    return(
        <header className={Styles['header-container']}>
        <ul className={Styles['list-menu']}>
        <li className={Styles.list}>
         <Link href='/'>Home</Link>
        </li>
        <li className={Styles.list}>
         <Link href='/awan'>About</Link>
        </li>
        <li className={Styles.list}>
          <Link href='/users'>Users</Link>         
        </li>
      </ul>
    </header>
    )
}