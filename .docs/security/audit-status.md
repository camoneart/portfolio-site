# Audit Status

## 現在の状態

- 最終audit実施: 2026-04-26
- `pnpm audit` 結果: **No known vulnerabilities found** (脆弱性0件達成)
- 関連PR: `chore/vulnerability-remediation` ブランチで対応 (Phase 1-4、commits 676a7f9 → b72c2e6)

## Phase 1-3 サマリ

| Phase | Commit | audit件数推移 | 主な対応 |
|---|---|---|---|
| 1 | `772d633` | 31 → 16 | `next 16.1.3 → 16.1.5` patch更新 (HIGH RSC DoS解消) |
| 2 | `045d532` | 16 → 6 | `pnpm.overrides` 追加 (minimatch / flatted / ajv / uuid / postcss 5系統) |
| 3 | `b72c2e6` | 6 → **0** | `next 16.1.5 → 16.2.4` minor更新 (残HIGH/Moderate/Low全消滅) |

## Upstream待ち案件

現状なし — Phase 3で全件解消済み。

`react-loader-spinner@8.0.2` 経由の `postcss` 系脆弱性は、 Phase 2の`pnpm.overrides`による `postcss@<8.5.10` 強制更新で実質解消。 ただし `react-loader-spinner` 本体は旧版維持のため、 upstream動向を監視。

## 検証パイプライン破綻 (Maintenance Backlog)

Phase 1作業中に発見された **既存の検証パイプライン破綻3点**。 Phase 1-4のscope外として別チケット化。 期日: 2026-05-31

### 1. `pnpm lint` failure

- **原因**: `next lint` が Next.js 15.5 でdeprecated、 Next.js 16 で完全削除
- **症状**: `Invalid project directory provided, no such directory: ./lint`
- **対応案**: `package.json` の lint script を `eslint .` に置換
- **影響**: CI workflow に lint チェックを含められない

### 2. `pnpm format:check` failure (19 files)

- **原因**: 既存ファイルがPrettier規約に未準拠
- **対応案**: `pnpm format:write` で一括修正後、 PRレビュー
- **影響**: CI workflow に format-check を含められない

### 3. `pnpm build` PageData failure (`RESEND_API_KEY` 不在時)

- **原因**: `src/app/api/send/route.ts` が モジュール評価時 (top-level) に `new Resend(...)` を呼び、 環境変数不在時に build時失敗
- **症状**: build時 `Error: Missing API key. Pass it to the constructor new Resend("re_123")`
- **対応案**: route handler 内で lazy initialization、 もしくはbuildモードで mock化
- **影響**: ローカル `pnpm build` 成功不可、 CI でも RESEND_API_KEY をsecretとして注入する必要

## CI workflow設計方針

`.github/workflows/ci.yml` は **audit checkのみの最小版** からスタート。 lint / format-check / build は上記Backlog修復後に段階的に追加する。

### 理由
- 既存破綻3点を CI に含めると CI が常時 RED になり、 dependabot PR がすべて fail で merge不能になる
- 段階的追加により「直近修復した検証ステップが green であること」を保証できる
- audit checkのみでも、 dependabot PR内で**新規脆弱性が混入していないこと**を自動検知できる(Phase 4の主目的達成)

### 段階的拡張ロードマップ

| 順序 | 追加するチェック | 前提条件 |
|---|---|---|
| 0 (現在) | `pnpm audit --audit-level=high` | なし(即追加可能) |
| 1 | `pnpm lint` | Backlog #1 修復済み |
| 2 | `pnpm format:check` | Backlog #2 修復済み |
| 3 | `pnpm build` | Backlog #3 修復済み + GitHub Secrets に `RESEND_API_KEY` 登録済み |
