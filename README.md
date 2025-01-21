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

### /app/features/〇〇/components（/app/features/blog/components）
- componentsでは共通化が難しい、特定の機能や特定のページ固有のコンポーネントを管理するためのレイヤー
- 〇〇には、その機能やページを表す具体的な名前を入れます
  - blog: ブログ関連の機能
  - auth: 認証関連の機能
  - profile: ユーザープロフィール関連の機能
  - dashboard: ダッシュボード関連の機能
  - shop: ECショップ関連の機能
- 例：ブログページの場合、BlogImage, BlogList, BlogCard etc...

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
- Next.js 14.2.20
- React 18.3.1
- typescript 5
