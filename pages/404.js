import { useRouter } from "next/router";
import { useEffect } from "react";

const { default: Link } = require("next/link")

const NotFound = () => {

    // auto redirect 
    const router = useRouter();

    useEffect( () => {
        setTimeout( () => {        
        router.push('/')
        }, 3000)
    }, [])

    return(
        <div className="not-found">
            <h1>page not found</h1>
            <p>kembali ke <Link href="/" className="redirect-home">Beranda</Link></p>
        </div>
    )
}

export default NotFound;