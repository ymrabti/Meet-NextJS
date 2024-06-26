import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        }
    }
}

export default function Home({ allPostsData }) {
    const posts = allPostsData?.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
                <Date dateString={date} />
            </small>
        </li>
    ));
    // console.log(randomuser);
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <Link href="/posts/pre-rendering">Pre-Rendering</Link><br />
            <Link href="/posts/ssg-ssr">Server-Side-Rendering</Link><br />
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {posts}
                </ul>
            </section>
        </Layout>
    )
}
// Sites stratégiques pour des projets générateurs de revenue
