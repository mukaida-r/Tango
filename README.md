# 単語帳
## 背景
* Vue.js、express、mysqlの理解度を上げたい。
* express/mysqlを使用したCRUD操作を行いたい。

## 目的
* Vue.js、express、mysqlのそれぞれ抑えるべき点を理解すること。
* componentの理解、データの受け渡しができる。

## 開発
* css tailwindow css
* フロントエンド vue.js
* サーバーサイド express
* DB Mysql

## 機能概要
* header・footerの作成
* v-forディレクティブを用いたリスト表示
* 動的ルーティング (NuxtLink/v-bind)
* クエリパラメータの設定・取得 (query/$route.query.<キー>)
* メインレイアウトの設定
* matelial icons (google fonts)
* v-modelを使用し、formのinput要素に双方向データバインディングを作成
* フォームのinputに入力された値を受け取れるようにする(body-parser(express4.17以降は標準搭載))
* プリフライトリクエスト処理の追加（express().options設定）
* フォーム入力された値をPOST送信でDBに登録
* axios.post(local, body, header)の理解
* mounted ライフサイクルフックを使用
* DBから値を取得して画面に表示

## APIテスト
* postman

## 感想
*　vue.js
　　ディレクティブの知識、scriptタグ内の知識（method、data）、データ間のやり取りの知識、componentの知識
*　express
 cors制約の知識、API（フロントからサーバーに接続）の知識、express利用にあたるコードの知識
*　mysql
  環境構築の知識、CRUD操作の知識

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
