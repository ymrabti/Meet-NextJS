import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({ postData }) {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
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
