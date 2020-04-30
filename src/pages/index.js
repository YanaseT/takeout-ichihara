import React from 'react';

import Layout from '../components/Layout';
import Styles from './list.module.css';
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


/*import pic1 from '../assets/images/01.jpg';
import pic2 from '../assets/images/02.jpg';
import pic3 from '../assets/images/03.jpg';
import pic4 from '../assets/images/04.jpg';
import pic5 from '../assets/images/05.jpg';
import pic6 from '../assets/images/06.jpg';
import pic7 from '../assets/images/07.jpg'
import pic8 from '../assets/images/08.jpg'
import pic9 from '../assets/images/09.jpg'
import pic10 from '../assets/images/10.jpg'
import pic11 from '../assets/images/11.jpg'
import pic12 from '../assets/images/12.jpg'
import pic13 from '../assets/images/13.jpg'
import pic14 from '../assets/images/14.jpg'
import pic15 from '../assets/images/15.jpg'
import pic16 from '../assets/images/16.jpg'
import pic17 from '../assets/images/17.jpg'
import pic18 from '../assets/images/18.jpg'
import pic19 from '../assets/images/19.jpg'
import piccp from '../assets/images/cp.jpg'
import PostList from "./../components/post-list"*/


import { Link } from 'gatsby';


const IndexPage = props => (
  <Layout>
    <Helmet>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="テイクアウトいちはら" />
      
      
      <meta property="og:title" content="テイクアウトいちはら" />
      <meta property="og:url" content="https://takeout-ichihara.info" />
    </Helmet>
    <div id="main">
      <div className="inner">
        <header>
          <h1>
            #おうち時間　を美味しく。
            <br />
          </h1>
          <p>
          新型コロナウイルスの感染拡大防止のため、外出自粛が続く中、皆様のおうち時間や、
          市原市内のお店を応援したい、そんな思いからこのホームページを作成しました。
          ぜひご利用ください。<br />
          掲載をご希望の店舗様や、お問い合わせについては<Link to="/contact">掲載申込・お問い合わせについてのページ</Link>をご覧ください。
          </p>
        </header>
        <section className="tiles">
        <article className="style5">
        <b>すべての掲載店舗を見る</b>
            <span className="image">
            <Img fluid={props.data.allshop.childImageSharp.fluid} />
            </span>
            <Link to="/all">
              <h2>すべての掲載店舗</h2>
              <div className="content">
                <p>
                当サイトに掲載されているすべての店舗
                </p>
              </div>
            </Link>
          </article>
        </section>
        <hr/>
        <b>地域別の掲載店舗を探す</b>
          <ul className={Styles.cp_list} >
            <li><Link to="/tags/五井地区">五井地区</Link></li>
            <li><Link to="/tags/市原地区">市原地区</Link></li>
          </ul>
        <hr/>
        <b>お店をカテゴリから選ぶ</b>
        <section className="tiles">
        <article className="style5">
            <span className="image">
            <Img fluid={props.data.wasyoku.childImageSharp.fluid} />
            </span>
            <Link to="/tags/和食">
              <h2>和食</h2>
              <div className="content">
                <p>
                  和食を提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style1">
            <span className="image">
            <Img fluid={props.data.cyanpon.childImageSharp.fluid} />
            </span>
            <Link to="/tags/長崎ちゃんぽん">
              <h2>長崎ちゃんぽん</h2>
              <div className="content">
                <p>
                長崎ちゃんぽんを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
            <Img fluid={props.data.italy.childImageSharp.fluid} />
            </span>
            <Link to="/tags/イタリアン">
              <h2>イタリアン</h2>
              <div className="content">
                <p>
                イタリアンを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
            <Img fluid={props.data.okonomi.childImageSharp.fluid} />
            </span>
            <Link to="/tags/お好み焼き">
              <h2>お好み焼き</h2>
              <div className="content">
                <p>
                  お好み焼きを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
            <Img fluid={props.data.cafe.childImageSharp.fluid} />
            </span>
            <Link to="/tags/カフェごはん">
              <h2>カフェごはん</h2>
              <div className="content">
                <p>
                  カフェごはんを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
            <Img fluid={props.data.karaage.childImageSharp.fluid} />
            </span>
            <Link to="/tags/からあげ">
              <h2>からあげ</h2>
              <div className="content">
                <p>
                  からあげを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style6">
            <span className="image">
            <Img fluid={props.data.curry.childImageSharp.fluid} />
            </span>
            <Link to="/tags/カレー">
              <h2>カレー</h2>
              <div className="content">
                <p>
                  カレーを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
            <Img fluid={props.data.sald.childImageSharp.fluid} />
            </span>
            <Link to="/tags/サラダ">
              <h2>サラダ</h2>
              <div className="content">
                <p>
                  サラダを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
            <Img fluid={props.data.sweets.childImageSharp.fluid} />
            </span>
            <Link to="/tags/スイーツ">
              <h2>スイーツ</h2>
              <div className="content">
                <p>
                  スイーツを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style1">
            <span className="image">
            <Img fluid={props.data.tonkatsu.childImageSharp.fluid} />
            </span>
            <Link to="/tags/とんかつ">
              <h2>とんかつ</h2>
              <div className="content">
                <p>
                  とんかつを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
            <Img fluid={props.data.bread.childImageSharp.fluid} />
            </span>
            <Link to="/tags/パン">
              <h2>パン</h2>
              <div className="content">
                <p>
                  パンを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style6">
            <span className="image">
            <Img fluid={props.data.china.childImageSharp.fluid} />
            </span>
            <Link to="/tags/中華">
              <h2>中華</h2>
              <div className="content">
                <p>
                  中華を提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
            <Img fluid={props.data.kusikatsu.childImageSharp.fluid} />
            </span>
            <Link to="/tags/串カツ">
              <h2>串カツ</h2>
              <div className="content">
                <p>
                  串カツを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
            <Img fluid={props.data.izakaya.childImageSharp.fluid} />
            </span>
            <Link to="/tags/居酒屋">
              <h2>居酒屋</h2>
              <div className="content">
                <p>
                  居酒屋メニューを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
            <Img fluid={props.data.yousyoku.childImageSharp.fluid} />
            </span>
            <Link to="/tags/洋食">
              <h2>洋食</h2>
              <div className="content">
                <p>
                  洋食を提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
            <Img fluid={props.data.yakiniku.childImageSharp.fluid} />
            </span>
            <Link to="/tags/焼き肉">
              <h2>焼き肉</h2>
              <div className="content">
                <p>
                  焼き肉を提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
            <Img fluid={props.data.soba.childImageSharp.fluid} />
            </span>
            <Link to="/tags/蕎麦">
              <h2>蕎麦</h2>
              <div className="content">
                <p>
                  蕎麦を提供するお店
                </p>
              </div>
            </Link>
          </article>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const pageQuery = graphql`
  query {
    okonomi: file(relativePath: { eq: "images/03.jpg" }) {
      ...fluidImage
    },
      wasyoku: file(relativePath: { eq: "images/13.jpg" }) {
        ...fluidImage
      },
      cyanpon: file(relativePath: { eq: "images/cp.jpg" }) {
        ...fluidImage
    },
      italy: file(relativePath: { eq: "images/02.jpg" }) {
        ...fluidImage
    },
      cafe: file(relativePath: { eq: "images/04.jpg" }) {
        ...fluidImage
    },
      karaage: file(relativePath: { eq: "images/05.jpg" }) {
        ...fluidImage
    },
      curry: file(relativePath: { eq: "images/06.jpg" }) {
        ...fluidImage
    },
      sald: file(relativePath: { eq: "images/07.jpg" }) {
        ...fluidImage
    },
      sweets: file(relativePath: { eq: "images/08.jpg" }) {
        ...fluidImage
    },
      tonkatsu: file(relativePath: { eq: "images/09.jpg" }) {
        ...fluidImage
    },
      bread: file(relativePath: { eq: "images/10.jpg" }) {
        ...fluidImage
    },
      china: file(relativePath: { eq: "images/11.jpg" }) {
        ...fluidImage
    },
      kusikatsu: file(relativePath: { eq: "images/12.jpg" }) {
        ...fluidImage
    },
      izakaya: file(relativePath: { eq: "images/14.jpg" }) {
        ...fluidImage
    },
      yousyoku: file(relativePath: { eq: "images/15.jpg" }) {
        ...fluidImage
    },
      yakiniku: file(relativePath: { eq: "images/16.jpg" }) {
        ...fluidImage
    },
      soba: file(relativePath: { eq: "images/17.jpg" }) {
        ...fluidImage
    },
      allshop: file(relativePath: { eq: "images/19.jpg" }) {
        ...fluidImage
    },
      ogpimage: file(relativePath: { eq: "images/18.jpg" }) {
        ...fluidImage
    },

  }
`

