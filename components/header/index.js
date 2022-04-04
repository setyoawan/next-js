import Link from 'next/link';

export default function Header() {
    return(
        <header>
        <ul>
        <li>
         <Link href='/'>Home</Link>
        </li>
        <li>
         <Link href='/awan'>Awan</Link>
        </li>
        <li>
          <Link href='/users'>Users</Link>         
        </li>
      </ul>
    </header>
    )
}