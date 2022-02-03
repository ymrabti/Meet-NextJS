import Link from 'next/link'
import Head from 'next/head';

export default function Account() {
    return (
        <>
            <Head>
                <title>My Account</title>
            </Head>
            <h1>Username</h1>
            <h2>Email</h2>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}