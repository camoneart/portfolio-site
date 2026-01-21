# ポートフォリオサイト

プロジェクト概要・使用技術・ディレクトリ構造は @README.md を参照。

## 開発コマンド

パッケージマネージャー: **pnpm** を使用（npm/yarn禁止）

- `pnpm dev` - 開発サーバー起動
- `pnpm build` - 本番ビルド
- `pnpm lint:fix` - Lint + フォーマット

## コーディング規約

### TypeScript
- `any`は禁止、型を明示する
- 新規コンポーネントは関数宣言で記述

### スタイリング
- CSS Modules（`.module.css`）+ Tailwind CSSを併用
- コンポーネント固有のスタイルは`.module.css`に記述
- BEM風のクラス命名（例：`about-content-group`）

### アニメーション
- 新規アニメーションはMotionを優先使用
- GSAPは既存コードとの一貫性が必要な場合のみ
- アニメーションのdelayは既存パターンに合わせる

### UIコンポーネント
- `src/components/ui/`のshadcn/uiは変更禁止
- 新規UIコンポーネントは`src/app/components/`に配置

## アーキテクチャ

```
src/app/
├── features/       # 機能別（about, contact, skills, works）
│   └── {機能名}/
│       ├── components/
│       ├── hooks/
│       └── data/
├── components/     # 共通（3D, Animation, layouts等）
└── api/            # APIルート
```

## 重要な注意事項

- サイトコンテンツは**日本語**
- 一人称は「**私**」を使用
- カラーテーマはピンク系（`--color-primary-pink`）
- 外部リンクは`target="_blank" rel="noopener noreferrer"`を付与
