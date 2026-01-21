# aoyama｜Web Engineer

https://github.com/user-attachments/assets/61740ac9-1dd2-4931-9fc5-9a23454b0a4f

ポートフォリオサイトは以下からアクセスできます。

https://aoyamadev.com

## 目次

- [プロジェクト概要](#project-overview)
- [各ページ紹介](#page-descriptions)
- [機能紹介](#feature-introduction)
- [使用技術](#technology-used)
- [開発構成図](#development-configuration-diagram)
- [ディレクトリ構造](#directory-design)

<h2 id="project-overview">プロジェクト概要</h2>

私のポートフォリオサイトになります。サイトデザインを自ら考え、コーディングまで行いました。

視覚的に見ていて楽しいUIを目指し、Motion・GSAPによるアニメーションとReact Three Fiberで3Dコンテンツを実装。View Transitions API による遷移アニメーションで、ユーザーに適切な視線誘導をもたらし操作を助ける演出でUX向上を目指しました。

Next.js + Tailwind CSS + TypeScriptで開発し、Vercelにデプロイしました。

<h2 id="page-descriptions">各ページ紹介</h2>

### **トップページ**

トップページには、キューブ型の3Dコンテンツを配置。散らばるキューブは「創造性」「アイデア」「感情」「学び」といった記憶の断片を表しており、学習初期から今までの私の「プロセス」と「ストーリー」を視覚的に表現しています。

https://github.com/user-attachments/assets/69073e68-0b60-4e6c-b77a-e9e0c31b328f

### **アバウトページ**

私のプロフィールを紹介しています。趣味（Web開発、音楽/映像鑑賞、読書）、AIへの注力、自分の特徴や得意/苦手なこと、価値観、モノづくりに対する想いを綴っています。

https://github.com/user-attachments/assets/ec9862c6-6607-4fbf-903c-400b24d6c47a

### **スキルページ**

私が独学で培ったWeb開発に必要なスキルセットを一覧形式で紹介しています。

https://github.com/user-attachments/assets/8dfb0827-4f55-416b-b88d-b243bb62adba

### **制作実績ページ**

私がこれまでに制作した作品を一覧で紹介しています。<br />
作品カードをクリックすることで、作品の詳細を確認できます。

https://github.com/user-attachments/assets/c6f155f8-299e-4d51-b79a-7f580a4412c8

https://github.com/user-attachments/assets/06ec7526-ba92-475c-8c10-4667bd805ba0

### **お問い合わせページ**

お問い合わせフォームは「React Hook Form」でパフォーマンスを最適化し、「Zod」による入力値検証（バリデーション）で堅牢性を高めています。メール送信機能には「Resend」を利用しています。

https://github.com/user-attachments/assets/b618880b-5eb8-4b73-bba4-c3f656179878

<h2 id="feature-introduction">機能紹介</h2>

### **アニメーション機能**

- **背景アニメーション**

  - GSAPを使用したドットパターンの動的な背景アニメーションを実装
  - パーティクルが浮遊し、視差効果を生み出すことで奥行きのある空間を演出

- **要素の出現アニメーション**
  - GSAPのTimelineを活用した複雑なアニメーションシーケンスの構築
  - カードやテキストがstagger効果で順番に出現し、リズミカルな視覚体験を提供
  - イージング関数を細かく調整し、自然で心地よい動きを追求

### **ページ遷移機能**

- **View Transitions API**
  - ブラウザネイティブのView Transitions APIを採用し、JavaScriptライブラリに依存しない軽量な実装
  - カード型UIからの詳細ページへの遷移時に、要素が流れるようにモーフィングする演出
  - フェードイン・フェードアウトではなく、要素の連続性を保った遷移で没入感を向上

### **インタラクティブ機能**

- **クリックフィードバック**

  - プロダクトが「反応」し「対話」しているような、レスポンシブなアニメーション設計

- **ホバーエフェクト**
  - ボタンやリンクのホバー時に、スケールアニメーションと色の変化で視覚的フィードバックを提供
  - マウスの動きに追従するグラデーション効果で、動的な体験を演出

### **オーディオ機能**

- **BGMシステム**
  - Howler.jsを使用したオーディオ再生システムの構築
  - ミュート/アンミュートが分かる直感的なUI、ページ遷移時のも途切れない自然な音楽体験を提供

### **3Dビジュアル機能**

- **React Three Fiber**
  - トップページのキューブ型3Dコンテンツで、創造性をビジュアルに表現
  - WebGLを活用した軽量で高性能な3Dレンダリング
  - マウスの動きに反応するインタラクティブな3Dオブジェクトで、没入感のある体験を創出

### **その他の機能**

- **マウスストーカー**

  - カーソルを追従するカスタムマウスストーカーで、ブランディングを強化
  - ホバー対象によって変化するカーソルアニメーションで、操作性を向上

- **レスポンシブデザイン**

  - レスポンシブ対応。全デバイスで最適な表示を実現
  - ハンバーガーメニューやタッチ操作に最適化されたUIコンポーネント

- **フォームバリデーション**
  - React Hook FormとZodによる堅牢な入力値検証システム
  - リアルタイムエラー表示で、ユーザーが迷わない親切な設計
  - Resend APIとの連携による確実なメール送信機能

<h2 id="technology-used">使用技術</h2>

<img src="https://img.shields.io/badge/-node.js-444.svg?logo=node.js&style=for-the-badge"> <img src="https://img.shields.io/badge/-pnpm-444.svg?logo=pnpm&style=for-the-badge"> <img src="https://img.shields.io/badge/-next.js-444.svg?logo=next.js&style=for-the-badge"> <img src="https://img.shields.io/badge/-react-444.svg?logo=react&style=for-the-badge"> <img src="https://img.shields.io/badge/-TypeScript-444.svg?logo=TypeScript&style=for-the-badge"> <img src="https://img.shields.io/badge/-Tailwind%20CSS-444.svg?logo=Tailwind%20CSS&style=for-the-badge"> <img src="https://img.shields.io/badge/-shadcn/ui-444.svg?logo=shadcn/ui&style=for-the-badge"> <img src="https://img.shields.io/badge/-GSAP-444.svg?logo=GSAP&style=for-the-badge"> <img src="https://img.shields.io/badge/-Motion-444.svg?logo=Motion&style=for-the-badge"> <img src="https://img.shields.io/badge/-View%20Transitions%20API-444.svg?logo=View%20Transitions%20API&style=for-the-badge"> <img src="https://img.shields.io/badge/-Three.js-444.svg?logo=Three.js&style=for-the-badge"> <img src="https://img.shields.io/badge/-React%20Three%20Fiber-444.svg?logo=React%20Three%20Fiber&style=for-the-badge"> <img src="https://img.shields.io/badge/-Drei-444.svg?logo=Drei&style=for-the-badge"> <img src="https://img.shields.io/badge/-React%20Spring-444.svg?logo=React%20Spring&style=for-the-badge"> <img src="https://img.shields.io/badge/-Howler.js-444.svg?logo=Howler.js&style=for-the-badge"> <img src="https://img.shields.io/badge/-React%20Hook%20Form-444.svg?logo=React%20Hook%20Form&style=for-the-badge"> <img src="https://img.shields.io/badge/-Zod-444.svg?logo=Zod&style=for-the-badge"> <img src="https://img.shields.io/badge/-Resend-444.svg?logo=Resend&style=for-the-badge"> <img src="https://img.shields.io/badge/-Vercel-444.svg?logo=Vercel&style=for-the-badge">

### nodeバージョン

- [node](https://nodejs.org/ja/)：v22.14.0
- [pnpm](https://pnpm.io/ja/)：v10.11.1

### フロント

- [Next.js](https://nextjs.org/)：v16.1.3
- [React](https://ja.react.dev/)：v19.2.3
- [TypeScript](https://www.typescriptlang.org/)：v5.9.3

### スタイル・UI

- [Tailwind CSS](https://tailwindcss.com/)：v4.1.18
- [shadcn/ui](https://ui.shadcn.com/)

### アニメーション

- [GSAP](https://gsap.com/)：v3.14.2
- [Motion](https://motion.dev/)：v12.26.2
- [next-view-transitions](https://www.npmjs.com/package/next-view-transitions#disclaimer)：v0.3.5（View Transitions API）

### 3Dコンテンツ

- [Three.js](https://threejs.org/)：v0.182.0
- [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction)：v9.5.0
- [Drei](https://drei.docs.pmnd.rs/getting-started/introduction)：v10.7.7
- [React Spring](https://www.react-spring.dev/)：v10.0.3

### オーディオ

- [Howler.js](https://howlerjs.com/)：v2.2.4

### フォーム・スキーマバリデーション

- [React Hook Form](https://react-hook-form.com/)：v7.71.1（フォーム）
- [Zod](https://zod.dev/)：v4.3.5（スキーマバリデーション）

### メール送信サービス

- [Resend](https://resend.com/docs/introduction)：v6.7.0

### ホスティング

- [Vercel](https://vercel.com/)

<h2 id="development-configuration-diagram">開発構成図</h2>

[開発構成図](https://camoneart.github.io/portfolio-development-configuration-diagram/)はHTMLインフォグラフィックで表現しました。

<h2 id="directory-design">ディレクトリ構造</h2>

```
portfolio/
├── public/                         # 静的ファイル
│   ├── audio/                      # BGMファイル
│   ├── images/                     # 画像ファイル
│   │   ├── about/                  # アバウトページ用画像
│   │   ├── gifs/                   # アニメーション画像
│   │   ├── skills/                 # スキル一覧ページの各スキルのロゴ画像
│   │   └── works/                  # 制作実績ページ用画像
│   └── videos/                     # 動画ファイル
├── src/
│   ├── app/                        # ルートディレクトリ（ルーティング管理）
│   │   ├── about/                  # アバウトページ
│   │   ├── api/                    # API Routes
│   │   │   └── send/               # メール送信用APIエンドポイント
│   │   ├── components/             # 共通コンポーネント
│   │   │   ├── 3D/                 # 3Dコンテンツ
│   │   │   ├── Animation/          # アニメーション
│   │   │   ├── AudioPlayer/        # サイトのBGM
│   │   │   ├── elements/           # 基本的なUI要素
│   │   │   ├── layouts/            # レイアウトコンポーネント
│   │   │   └── MouseStalker/       # マウスストーカー
│   │   ├── contact/                # お問い合わせページ
│   │   ├── features/               # componentsでは共通化が難しい、特定の機能やドメイン固有のコンポーネントを管理
│   │   │   ├── about/              # アバウトページ機能
│   │   │   │   └── components/     # アバウト用コンポーネント
│   │   │   ├── contact/            # お問い合わせページ機能
│   │   │   │   ├── components/     # コンタクト用コンポーネント
│   │   │   │   └── hooks/          # コンタクト用カスタムフック
│   │   │   ├── skills/             # スキル一覧ページ機能
│   │   │   │   ├── components/     # スキル用コンポーネント
│   │   │   │   ├── data/           # スキルデータ
│   │   │   │   └── hooks/          # スキル用カスタムフック
│   │   │   └── works/              # 制作実績ページ機能
│   │   │       ├── components/     # 制作実績用コンポーネント
│   │   │       ├── data/           # 制作実績データ
│   │   │       └── hooks/          # 制作実績用カスタムフック
│   │   ├── skills/                 # スキル一覧ページ
│   │   │   └── [skill]/            # スキル詳細ページ（動的ルート）
│   │   ├── works/                  # 制作実績ページ
│   │   │   └── [id]/               # 制作実績詳細ページ（動的ルート）
│   │   ├── favicon.ico             # ファビコン
│   │   ├── globals.css             # アプリケーション全体のグローバルスタイルシート
│   │   ├── layout.tsx              # アプリケーション全体のルートレイアウトコンポーネント
│   │   └── page.tsx                # ルートページ（トップページ）
│   ├── components/                 # 再利用可能なUIコンポーネント
│   │   └── ui/                     # shadcn/ui コンポーネント
│   ├── lib/                        # ライブラリ・ユーティリティ
│   └── utils/                      # ユーティリティ関数
├── .cursorrules                    # Cursor Rules
├── .depcheckrc.json                # 依存関係チェックツール depcheckの設定ファイル
├── .env                            # 環境変数の設定ファイル
├── .eslintrc.json                  # ESLint設定ファイル
├── .gitignore                      # GitHubの差分に含まないものを格納
├── .npmrc                          # pnpmの設定ファイル
├── .prettierrc.json                # Prettierの設定ファイル
├── components.json                 # shadcn/ui設定ファイル
├── next-env.d.ts                   # Next.jsの型定義補完ファイル（自動生成）
├── next.config.mjs                 # Next.js設定ファイル
├── package.json                    # プロジェクトの依存関係・スクリプト定義
├── pnpm-lock.yaml                  # pnpmの依存関係ロックファイル
├── postcss.config.mjs              # PostCSS設定ファイル
├── README.md                       # プロジェクトの説明ドキュメント
└── tsconfig.json                   # TypeScript設定ファイル
```
