import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/01.jpg';
import pic2 from '../assets/images/02.jpg';
import pic3 from '../assets/images/03.jpg';
import pic4 from '../assets/images/04.jpg';
import pic5 from '../assets/images/05.jpg';
import pic6 from '../assets/images/06.jpg';
//import PostList from "./../components/post-list"


import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header>
          <h1>
            テイクアウトいちはら
            <br />
          </h1>
          <p>
          新型コロナウイルスの感染拡大防止のため、外出自粛が続く中、皆様のおうち時間や、
          市原市内のお店を応援したい、そんな思いからこのホームページを作成しました。
          ぜひご利用ください。
          </p>
        </header>
        <b>お店をカテゴリから選ぶ</b>
        <section className="tiles">
          <article className="style1">
            <span className="image">
              <img src={pic1} alt="" />
            </span>
            <Link to="/Generic">
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
            <Link to="/Generic">
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
            <Link to="/Generic">
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
            <Link to="/Generic">
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
            <Link to="/Generic">
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
            <Link to="/Generic">
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
              <img src={pic1} alt="" />
            </span>
            <Link to="/Generic">
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
              <img src={pic2} alt="" />
            </span>
            <Link to="/Generic">
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
              <img src={pic3} alt="" />
            </span>
            <Link to="/Generic">
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
              <img src={pic4} alt="" />
            </span>
            <Link to="/Generic">
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
              <img src={pic5} alt="" />
            </span>
            <Link to="/Generic">
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
              <img src={pic6} alt="" />
            </span>
            <Link to="/Generic">
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
              <img src={pic5} alt="" />
            </span>
            <Link to="/Generic">
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
              <img src={pic5} alt="" />
            </span>
            <Link to="/Generic">
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
              <img src={pic5} alt="" />
            </span>
            <Link to="/Generic">
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
              <img src={pic5} alt="" />
            </span>
            <Link to="/Generic">
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
              <img src={pic5} alt="" />
            </span>
            <Link to="/Generic">
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
