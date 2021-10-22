import Link from 'next/link'

const Header = () => {
    return (
        <div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/jobsearches/all-job-searches"><a>JobSearches</a></Link>
        </div>
    )
}

export default Header
