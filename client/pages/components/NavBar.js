import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
    return (
        <nav>
            <Image src="/jobhunterlogo.svg" width="50%" height="50%"/>
            <ul>
                <Link href="/"><a class="nav-link">Home</a></Link>
                <Link href="/Manage-Searches"><a class="nav-link">Manage Searches</a></Link>
                <Link href="/Add-Job-Search"><a class="nav-link">Add Search</a></Link>
            </ul>
            <Image src="/usericon.svg" width="50%" height="50%"/>
        </nav>
    )
}

export default NavBar
