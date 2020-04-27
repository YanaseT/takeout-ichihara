import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/01.jpg';
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
import pic19 from '../assets/images/19.jpg'
//import PostList from "./../components/post-list"


import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
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
              <img src={pic19} alt="" />
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
        <b>お店をカテゴリから選ぶ</b>
        <section className="tiles">
          <article className="style1">
            <span className="image">
              <img src={pic1} alt="" />
            </span>
            <Link to="/about">
              <h2>アルコール</h2>
              <div className="content">
                <p>
                テイクアウトでアルコールメニューを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={pic2} alt="" />
            </span>
            <Link to="/about">
              <h2>イタリアン</h2>
              <div className="content">
                <p>
                テイクアウトでイタリアンを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
              <img src={pic3} alt="" />
            </span>
            <Link to="/about">
              <h2>お好み焼き</h2>
              <div className="content">
                <p>
                  テイクアウトでお好み焼きを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
              <img src={pic4} alt="" />
            </span>
            <Link to="/about">
              <h2>カフェごはん</h2>
              <div className="content">
                <p>
                  テイクアウトでカフェごはんを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
              <img src={pic5} alt="" />
            </span>
            <Link to="/about">
              <h2>からあげ</h2>
              <div className="content">
                <p>
                  テイクアウトでからあげを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style6">
            <span className="image">
              <img src={pic6} alt="" />
            </span>
            <Link to="/about">
              <h2>カレー</h2>
              <div className="content">
                <p>
                  テイクアウトでカレーを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={pic7} alt="" />
            </span>
            <Link to="/about">
              <h2>サラダ</h2>
              <div className="content">
                <p>
                  テイクアウトでサラダを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
              <img src={pic8} alt="" />
            </span>
            <Link to="/about">
              <h2>スイーツ</h2>
              <div className="content">
                <p>
                  テイクアウトでスイーツを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style1">
            <span className="image">
              <img src={pic9} alt="" />
            </span>
            <Link to="/about">
              <h2>とんかつ</h2>
              <div className="content">
                <p>
                  テイクアウトでとんかつを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
              <img src={pic10} alt="" />
            </span>
            <Link to="/about">
              <h2>パン</h2>
              <div className="content">
                <p>
                  テイクアウトでパンを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style6">
            <span className="image">
              <img src={pic11} alt="" />
            </span>
            <Link to="/about">
              <h2>中華</h2>
              <div className="content">
                <p>
                  テイクアウトで中華を提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
              <img src={pic12} alt="" />
            </span>
            <Link to="/about">
              <h2>串カツ</h2>
              <div className="content">
                <p>
                  テイクアウトで串カツを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style1">
            <span className="image">
              <img src={pic13} alt="" />
            </span>
            <Link to="/about">
              <h2>和食</h2>
              <div className="content">
                <p>
                  テイクアウトで和食を提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={pic14} alt="" />
            </span>
            <Link to="/about">
              <h2>居酒屋</h2>
              <div className="content">
                <p>
                  テイクアウトで居酒屋メニューを提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
              <img src={pic15} alt="" />
            </span>
            <Link to="/about">
              <h2>洋食</h2>
              <div className="content">
                <p>
                  テイクアウトで洋食を提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
              <img src={pic16} alt="" />
            </span>
            <Link to="/about">
              <h2>焼き肉</h2>
              <div className="content">
                <p>
                  テイクアウトで焼き肉を提供するお店
                </p>
              </div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
              <img src={pic17} alt="" />
            </span>
            <Link to="/about">
              <h2>蕎麦</h2>
              <div className="content">
                <p>
                  テイクアウトで蕎麦を提供するお店
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
