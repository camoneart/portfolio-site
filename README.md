# aoyama｜Creative Developer

![トップページ](public/images/gifs/top-page.gif)

ポートフォリオサイトは以下からアクセスできます。

https://aoyamadev.com

## 目次

- [開発構成図](#development-configuration-diagram)
- [使用技術](#technology-used)
- [ディレクトリ構造](#directory-design)
- [プロジェクト概要](#project-overview)
- [各ページ紹介](#page-descriptions)
- [機能紹介](#feature-introduction)

<h2 id="development-configuration-diagram">開発構成図</h2>

開発構成図を、HTMLインフォグラフィックで表現しました。

[開発構成図（HTMLインフォグラフィック）](https://camoneart.github.io/portfolio-development-configuration-diagram/)

<h2 id="technology-used">使用技術</h2>

<img src="https://img.shields.io/badge/-node.js-444.svg?logo=node.js&style=for-the-badge"> <img src="https://img.shields.io/badge/-pnpm-444.svg?logo=pnpm&style=for-the-badge"> <img src="https://img.shields.io/badge/-next.js-444.svg?logo=next.js&style=for-the-badge"> <img src="https://img.shields.io/badge/-react-444.svg?logo=react&style=for-the-badge"> <img src="https://img.shields.io/badge/-TypeScript-444.svg?logo=TypeScript&style=for-the-badge"> <img src="https://img.shields.io/badge/-Tailwind%20CSS-444.svg?logo=Tailwind%20CSS&style=for-the-badge"> <img src="https://img.shields.io/badge/-shadcn/ui-444.svg?logo=shadcn/ui&style=for-the-badge"> <img src="https://img.shields.io/badge/-GSAP-444.svg?logo=GSAP&style=for-the-badge"> <img src="https://img.shields.io/badge/-Motion-444.svg?logo=Motion&style=for-the-badge"> <img src="https://img.shields.io/badge/-View%20Transitions%20API-444.svg?logo=View%20Transitions%20API&style=for-the-badge"> <img src="https://img.shields.io/badge/-React%20Three%20Fiber-444.svg?logo=React%20Three%20Fiber&style=for-the-badge"> <img src="https://img.shields.io/badge/-Drei-444.svg?logo=Drei&style=for-the-badge"> <img src="https://img.shields.io/badge/-React%20Spring-444.svg?logo=React%20Spring&style=for-the-badge"> <img src="https://img.shields.io/badge/-Howler.js-444.svg?logo=Howler.js&style=for-the-badge"> <img src="https://img.shields.io/badge/-React%20Hook%20Form-444.svg?logo=React%20Hook%20Form&style=for-the-badge"> <img src="https://img.shields.io/badge/-Zod-444.svg?logo=Zod&style=for-the-badge"> <img src="https://img.shields.io/badge/-Resend-444.svg?logo=Resend&style=for-the-badge"> <img src="https://img.shields.io/badge/-Vercel-444.svg?logo=Vercel&style=for-the-badge">

### nodeバージョン

- node v22.14.0
- pnpm v10.11.1

### フロント

- [Next.js](https://nextjs.org/)：v14.2.20
- [React](https://ja.react.dev/)：v18.3.1
- [TypeScript](https://www.typescriptlang.org/)：v5

### スタイル・UI

- [Tailwind CSS](https://tailwindcss.com/)：v4.1.8
- [shadcn/ui](https://ui.shadcn.com/)

### アニメーション

- [GSAP](https://gsap.com/)：v3.12.5
- [Motion](https://motion.dev/)：v11.12.0
- [next-view-transitions](https://www.npmjs.com/package/next-view-transitions#disclaimer)：v0.3.4（View Transitions API）

### 3Dコンテンツ

- [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction)：v8.17.10
- [Drei](https://drei.docs.pmnd.rs/getting-started/introduction)：v9.117.3
- [React Spring](https://www.react-spring.dev/)：v9.7.5

### オーディオ

- [Howler.js](https://howlerjs.com/)：v2.2.4

### フォーム・スキーマバリデーション

- [React Hook Form](https://react-hook-form.com/)：v7.54.0（フォーム）
- [Zod](https://zod.dev/)：v3.23.8（スキーマバリデーション）

### メール送信サービス

- [Resend](https://resend.com/docs/introduction)：v4.0.1

### ホスティング

- [Vercel](https://vercel.com/)

<h2 id="directory-design">ディレクトリ構造</h2>

```
portfolio/
├── public/                         # 静的ファイル
│   ├── audio/                      # 音声ファイル
│   ├── images/                     # 画像ファイル
│   │   ├── about/                  # アバウトページ用画像
│   │   ├── contact/                # お問い合わせページ用画像
│   │   ├── gifs/                   # アニメーション画像ファイル
│   │   ├── skills/                 # スキル一覧ページ用画像
│   │   ├── thumbnails/             # サムネイル用画像
│   │   └── works/                  # 制作実績ページ用画像
│   └── videos/                     # 動画ファイル
├── src/
│   ├── app/                        # ルートディレクトリ（ルーティング管理）
│   │   ├── about/                  # アバウトページ
│   │   ├── api/                    # API Routes
│   │   │   └── send/               # メール送信用APIエンドポイント
│   │   ├── components/             # コンポーネント
│   │   │   ├── 3D/                 # 3Dコンテンツ
│   │   │   ├── Animation/          # アニメーション
│   │   │   ├── AudioPlayer/        # サイトのBGM
│   │   │   ├── elements/           # 基本的なUI要素
│   │   │   ├── layouts/            # レイアウトコンポーネント
│   │   │   └── MouseStalker/       # マウスストーカー
│   │   ├── contact/                # お問い合わせページ
│   │   ├── features/               # componentsでは共通化が難しい、特定の機能やドメイン固有のコンポーネントを管理するディレクトリ
│   │   │   ├── about/              # アバウトページ機能
│   │   │   ├── AudioPlayer/        # サイトのBGM機能
│   │   │   ├── contact/            # お問い合わせページ機能
│   │   │   ├── skills/             # スキル一覧ページ機能
│   │   │   └── works/              # 制作実績ページ機能
│   │   ├── skills/                 # スキル一覧ページ
│   │   ├── works/                  # 制作実績ページ
│   │   ├── favicon.ico             # ファビコン
│   │   ├── globals.css             # アプリケーション全体のグローバルスタイルシート
│   │   ├── layout.tsx              # アプリケーション全体のルートレイアウトコンポーネント
│   │   └── page.tsx                # ルートページ（トップページ）
│   ├── components/                 # 再利用可能なUIコンポーネント
│   │   └── ui/                     # shadcn/ui コンポーネント
│   ├── lib/                        # ライブラリ・ユーティリティ
│   └── utils/                      # ユーティリティ関数
├── .cursorrules                    # Cursor Rules
├── .depcheckrc.json                # 依存関係チェックツール depcheck の設定ファイル
├── .env                            # 環境変数の設定ファイル
├── .eslintrc.json                  # ESLint設定ファイル
├── .gitignore                      # GitHubの差分に含まないものを格納
├── .npmrc                          # pnpmの設定ファイル
├── .prettierrc.json                # Prettierの設定ファイル
├── components.json                 # shadcn/ui設定ファイル
├── next-env.d.ts                   # Next.js の型定義補完ファイル（自動生成）
├── next.config.mjs                 # Next.js設定ファイル
├── package.json                    # プロジェクトの依存関係・スクリプト定義
├── pnpm-lock.yaml                  # pnpmの依存関係ロックファイル
├── postcss.config.mjs              # PostCSS設定ファイル
├── README.md                       # プロジェクトの説明ドキュメント
└── tsconfig.json                   # TypeScript設定ファイル
```

<h2 id="project-overview">プロジェクト概要</h2>

私のポートフォリオサイトになります。サイトデザインを自ら考え、コーディングまで行いました。

Next.js + CSS Modules + Tailwind CSS + TypeScriptで制作し、デプロイはVercelで行いました。

<h2 id="page-descriptions">各ページ紹介</h2>

### **トップページ**

トップページには、キューブ型の3Dコンテンツを配置。散らばるキューブは「創造性」「アイデア」「感情」「これまでの学び」といった記憶の断片を表しており、学習初期から今までの私の「プロセス」や「ストーリー」を視覚的に表現しています。

https://github.com/user-attachments/assets/fc0ae32c-1878-4b6d-8b65-3659f0c89f4d

### **アバウトページ**

私のプロフィール、Web開発やAIへの関心、そしてモノづくりに対する想いやビジョンを紹介しています。

https://github.com/user-attachments/assets/3245ec3f-7913-40e1-b6fe-45fc9828438e

### **スキルページ**

私が独学で培ったWeb開発に必要なスキルセットを一覧形式で紹介しています。

https://github.com/user-attachments/assets/a7654848-143e-4573-9164-ab02b2bf1df4

### **制作実績ページ**

私がこれまでに制作した作品を一覧で紹介しています。<br />
作品カードをクリックすることで、作品の詳細を確認できます。

https://github.com/user-attachments/assets/49f73287-2748-4893-99a5-3600cfc2de17

### **お問い合わせページ**

このページでは、「React Hook Form」でパフォーマンスを最適化したフォームを実装しました。「Zod」による入力値検証（バリデーション）で堅牢性を高め、メール送信機能には「Resend」を利用しています。

https://github.com/user-attachments/assets/24fe2946-d0a1-4a92-8935-1c59b87bec51

<h2 id="feature-introduction">機能紹介</h2>

- ドットパターンで表現した背景のアニメーションや、カードの出現アニメーションは「GSAP」で実装しています。
- カード型UIには「View Transitions API」を利用し、スムーズに流れるような遷移アニメーションを実装しています。
- ホバー時、クリック時のアニメーションでは、こちらの動作に対してプロダクトが反応を返してくれるような「対話」を意識したアニメーションを実装しています。
- オーディオライブラリ「Howler.js」を使用し、BGMを再生できるようにしています。
