## 目次
- [ディレクトリ構成](#directory)
- [データ取得について](#data-fetching)
- [使用技術](#technology-used)
- [参考記事](#reference-article)


<h2 id="directory">ディレクトリ構成</h2>

### /app
- App Routerを動作させるためのディレクトリ

### /app/components
- このプロジェクト（アプリケーション）全体で使用（共通）するグローバルなコンポーネント（例：ヘッダー、フッター、ボタン、インプット etc...）を管理するためのレイヤー

#### /app/components/elements
- 最小単位の再利用可能なUIコンポーネントを管理するためのレイヤー

#### /app/components/layouts
- ページの構造やコンテンツの配置（つまりレイアウト関連）を定義したコンポーネントを管理するためのレイヤー

### /app/features/components（/app/features/blog/components）
- componentsでは共通化が難しい、特定の機能や特定のページ固有のコンポーネント（例：ブログページの場合、BlogImage, BlogList, BlogCard etc...）を管理するためのレイヤー

#### /app/features/blog/components/index.ts
- このファイルは、blog関連のコンポーネントを一括でインポートするためのエントリーポイントとなります。
- コンポーネントのインポートパスを短くすることで、コードの可読性を向上させます。
- 他のファイルからこのエントリーポイントを通じてblogコンポーネントにアクセスできます。
- 新しいblogコンポーネントが追加された場合でも、このファイルの変更のみで済みます。


<h2 id="data-fetching">データ取得について</h2>

- コンポーネント内ではデータ取得は行わない
- データ取得はページレイヤーで行う
  - ※このように管理することで、「どこでデータ取得したっけ？」といったことがなくなります。


<h2 id="technology-used">使用技術</h2>

### nodeバージョン
- node v20.16.0
- npm v10.8.3

### フロント
- Next.js 15.0.3
- React 18.2.0
- typescript 5
