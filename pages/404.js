const { default: Link } = require("next/link")

const NotFound = () => {
    return(
        <div className="not-found">
            <h1>page not found</h1>
            <p>kembali ke <Link href="/" className="redirect-home">Beranda</Link></p>
        </div>
    )
}

export default NotFound;