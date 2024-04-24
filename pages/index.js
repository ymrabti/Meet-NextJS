import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  const data = await fetch('https://randomuser.me/api/');
  const randomuser = await data.json();
  return {
    props: {
      allPostsData,
      randomuser
    }
  }
}
export default function Home({ allPostsData, randomuser }) {
  const posts = allPostsData.map(({ id, date, title }) => (
    <li className={utilStyles.listItem} key={id}>
      {title}
      <br />
      {id}
      <br />
      {date}
    </li>
  ));
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
