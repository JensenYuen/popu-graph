<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- 目次 -->
<details>
  <summary>目次</summary>
  <ol>
    <li>
      <a href="#プロジェクトについて">プロジェクトについて</a>
      <ul>
        <li><a href="#フレームワーク">フレームワーク</a></li>
      </ul>
    </li>
    <li>
      <a href="#紹介">紹介</a>
      <ul>
        <li><a href="#設定">設定</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## プロジェクトについて

このプロジェクトは都道府県別の総人口推移グラフを表示するSPAです。

ライブサイトURL：[https://jensenyuen.github.io/popu-graph/](https://jensenyuen.github.io/popu-graph/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### フレームワーク

* [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- 紹介 -->
## 紹介

ローカルコピーを起動したい場合、以下のステップ通りにしてください。

### 設定

1. 無料APIキーはこのURLから[https://opendata.resas-portal.go.jp/](https://opendata.resas-portal.go.jp/)
2. このリポジトリをクローンする
   ```sh
   gh repo clone JensenYuen/popu-graph
   ```
3. NPMパッケージをインストールするとnpm run build
   ```sh
   npm install
   npm run build
   ```
4. `.env.example`から新しい`.env`ファイトを作ります
5. APIキーを`.env`ファイトに入れます
   ```js
   REACT_APP_RESAS_API_KEY=API_KEY_HERE
   ```
6. アプリを起動する
   ```sh
   npm run start local
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
