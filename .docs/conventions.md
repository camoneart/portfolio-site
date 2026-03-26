# 規約詳細

## スタイリング

- CSS Modules（`.module.css`）+ Tailwind CSS 併用
- コンポーネント固有スタイル -> `.module.css`に記述
- BEM風クラス命名（例: `about-content-group`）
- 参考: 既存コンポーネントの`.module.css`を確認

## アニメーション

- Motion: 新規アニメーションの第一選択
- GSAP: 既存GSAPコードとの一貫性が必要な場合のみ使用
- delay値: 既存パターンに合わせる（周辺コンポーネントのdelayを確認）
- View Transitions API: ページ遷移アニメーション（next-view-transitions使用）

## コンテンツ

- サイトコンテンツは**日本語**
- 一人称: 「**私**」を使用
- カラーテーマ: ピンク系（`--color-primary-pink`）
- 外部リンク: `target="_blank" rel="noopener noreferrer"` 付与
