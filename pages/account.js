import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'

export async function getServerSideProps() {
    const data = await fetch('https://randomuser.me/api/');
    const randomuser = await data.json();
    return {
        props: {
            randomuser
        }
    }
}
export default function Account({ randomuser}) {
    const user = randomuser.results[0];
    return (
        <Layout randomuser={user}>
            <Head>
                <title>{user.email}</title>
            </Head>
            <header className={styles.header}>
                <Image
                    priority
                    src={user.picture.large}
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt={Object.values(user.name).join(' ') }
                />
                <h1 className={utilStyles.heading2Xl}>{Object.values(user.name).join(' ')}</h1>
            </header>
            <h1>Username{' : ' + user.login.username}</h1>
            <h2>Email{' : '+user.email}</h2>
            <h2>Age{' : '+user.dob.age}</h2>
        </Layout>
    )
}
