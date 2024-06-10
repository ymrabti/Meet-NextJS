import Layout from '../../components/layout';
import Head from 'next/head'
import { getPostData } from '../../lib/posts';
import { getAllPostIds } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}


export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}




/* function ratingApp() {
    var app = [...Array(300)].map(i => ({
        rate: Math.ceil(Math.random() * 5),
        userRate: Math.round((Math.random() * 4 + 1) * 100) / 100
    }))
    function sumNumbers(numbersArray) {
        var som = numbersArray.reduce((total, num) => total + num, 0);

        return som
    }
    var upper1 = sumNumbers(app.map(e => e.rate))
    var upper2 = sumNumbers(app.map(e => e.userRate * e.rate))

    var down1 = app.length
    var down2 = sumNumbers(app.map(e => e.userRate))

    const formule_01 = Math.round((upper1 / down1) * 100) / 100
    const formule_02 = Math.round((upper2 / down2) * 100) / 100
    return [formule_01, formule_02]
}
console.log([...Array(300)].map(f => ratingApp()))
console.log(Math.max(...[...Array(300)].map(f => ratingApp()[0]))) */
