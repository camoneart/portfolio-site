import React from "react";
import * as Work from "@/app/features/works/components/index";
import styles from "./WorksSection.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";
import Breadcrumb from "@/app/components/elements/Breadcrumb/Breadcrumb";

export const worksTitle = "Works";
export const worksSubTitle = "制作実績";

interface WorksData {
  id: number;
  image: string;
  workTitle: string;
  cardDesc?: string;
  description: string;
  specification01?: string;
  specification02?: string;
  specification03?: string;
  specification04?: string;
  specification05?: string;
  specification06?: string;
  detail01?: string;
  detail02?: string;
  detail03?: string;
  detail04?: string;
  detail05?: string;
  detail06?: string;
  detail07?: string;
  detail08?: string;
  detail09?: string;
  detail10?: string;
  detail11?: string;
  detail12?: string;
  detail13?: string;
  detail14?: string;
  detail15?: string;
  detail16?: string;
  specification01Detail01?: string;
  specification01Detail02?: string;
  specification01Detail03?: string;
  specification01Detail04?: string;
  specification02Detail01?: string;
  specification02Detail02?: string;
  specification02Detail03?: string;
  specification02Detail04?: string;
  specification03Detail01?: string;
  specification03Detail02?: string;
  specification03Detail03?: string;
  specification03Detail04?: string;
  specification04Detail01?: string;
  specification04Detail02?: string;
  specification04Detail03?: string;
  specification04Detail04?: string;
  specification05Detail01?: string;
  specification05Detail02?: string;
  specification05Detail03?: string;
  specification05Detail04?: string;
  specification06Detail01?: string;
  specification06Detail02?: string;
  specification06Detail03?: string;
  specification06Detail04?: string;
  summary?: string;
  accessDescription: string;
  labels: { no: string; value: string }[];
  skillsList: string;
  siteUrl: string;
  role: string;
  viewTransitionName: string;
  viewTransitionImage: string;
}

export const worksData: WorksData[] = [
  {
    id: 1,
    image: "/images/works/work01.jpg",
    workTitle: "CareSend｜有資格介護人材が集まる介護派遣サービス",
    cardDesc:
      "こちらのサイトは、Figmaで作成されたデザインカンプを基にコーディングを行った「架空の介護派遣サービスのLPサイト」になります。",
    description:
      "こちらのサイトは、Figmaで作成されたデザインカンプを基にコーディングを行った「架空の介護派遣サービスのLPサイト」になります。",
    detail01: "　GSAPを利用して、要素の出現アニメーションを実装しています。",
    detail02:
      "　企業ロゴが無限ループするスライダーと、導入事例セクションのカードUIのスライダーはSwiperで実装しています。",
    detail03:
      "　ダウンロードフォームは、「全項目を入力しないと、送信できないようにする」「フォーム送信後は、サンクスページに遷移」「性と名が分かれている時のオートコンプリートに対応」などの仕様です。実際のダウンロード機能は実装していません。",
    accessDescription:
      "本サイトは転職活動用のポートフォリオとして制作しており、意図した環境で作品を見ていただくため、noindexとnofollowを設定し、検索エンジンのインデックスから除外しています。",
    labels: [{ no: "Card No.", value: "001/006" }],
    skillsList: "HTML, CSS, Sass, JavaScript, Swiper, GSAP, webpack",
    siteUrl: "https://aoymdev.com/caresend",
    role: "Coding",
    viewTransitionName: "view-transition-title-work-1",
    viewTransitionImage: "view-transition-img-work-1",
  },
  {
    id: 2,
    image: "/images/works/work02.jpg",
    workTitle:
      "青牡丹工務店｜大阪市北区の住宅建築・リフォーム・公共事業なら青牡丹工務店",
    cardDesc:
      "こちらのサイトは、Figmaで作成されたデザインカンプを基にコーディングを行った「架空の建築会社のサイト」になります。",
    description:
      "こちらのサイトは、Figmaで作成されたデザインカンプを基にコーディングを行った「架空の建築会社のサイト」になります。",
    detail01: "　ローディング画面を実装しています。",
    detail02:
      "　ファーストビューコピーや見出しの出現アニメーションは、GSAPで実装しています。",
    detail03:
      "　トップページの横並びの画像箇所は、Swiperでスライダーを実装しています。",
    detail04:
      "　NEWSセクションのお知らせの内容は、モーダルで出現させる仕様になっています。",
    detail05:
      "　メールフォームの仕様は、「必須項目を全て入力しないと送信ボタンが押せない」「適切なautocomplete属性を使用しフォームの最適化」「フォーム送信後は、サンクスページに遷移」などになっています。",
    accessDescription:
      "本サイトは転職活動用のポートフォリオとして制作しており、意図した環境で作品を見ていただくため、noindexとnofollowを設定し、検索エンジンのインデックスから除外しています。",
    labels: [{ no: "Card No.", value: "002/006" }],
    skillsList: "HTML, CSS, Sass, JavaScript, Swiper, GSAP, webpack",
    siteUrl: "https://aoymdev.com/aobotan",
    role: "Coding",
    viewTransitionName: "view-transition-title-work-2",
    viewTransitionImage: "view-transition-img-work-2",
  },
  {
    id: 3,
    image: "/images/works/work03.jpg",
    workTitle: "採用特設サイト｜株式会社TETOTE",
    cardDesc:
      "こちらのサイトは、Figmaで作成されたWordPressオリジナルテーマのデザインカンプを基にコーディングを行った「架空のITコンサルファームの採用サイト」になります。",
    description:
      "こちらのサイトは、Figmaで作成されたWordPressオリジナルテーマのデザインカンプを基にコーディングを行った「架空のITコンサルファームの採用サイト」になります。",
    specification01: "トップページの仕様",
    specification02: "STAFF詳細ページ仕様",
    specification03: "ブログ一覧ページ仕様",
    specification04: "ブログ詳細ページ仕様",
    specification05: "募集要項とFAQページ仕様",
    specification06: "エントリーフォームページ仕様",
    specification01Detail01:
      "　トップページの要素をGSAPでふわっと表示させるようにしています。",
    specification01Detail02:
      "　ファーストビュー直下のスライダーはSwiperで実装しています。",
    specification01Detail03:
      "　blogはデフォルトの投稿機能を使用。staff一覧はカスタム投稿を使用して管理画面に「スタッフ管理」の項目を追加して、コンテンツ入稿できるようにしています。",
    specification01Detail04:
      "　「人を知る」セクションでは、カスタム投稿「スタッフ管理」から入稿したコンテンツをスライダーで表示。",
    specification02Detail01:
      "　「スタッフメッセージ一行目」「スタッフメッセージ二行目」「職種名」「名前」「入社年度」「プロフィール」の内容は、カスタムフィールドの情報を表示させ、スタッフ画像はサムネイルで設定した画像を表示させています。",
    specification02Detail02:
      "　サイドバーは追従する目次で、PC時のみ常に右側に表示させています。「クリックで該当部分にスクロール」「現在の話題の部分は色の濃いアクティブ表示」「スクロールすることでアクティブ部分はリアルタイムに変化」という仕様になっています。",
    specification02Detail03: "　その他のメンバーはランダムで表示させています。",
    specification03Detail01:
      "　ブログはWordPressのデフォルト投稿機能を使っています。",
    specification03Detail02:
      "　ブログ記事は9つ以上用意して、ページネーションが機能するようにしています。",
    specification04Detail01:
      "　投稿画面からの入稿で、コンテンツを表示させています。",
    specification05Detail01:
      "　3つのボタンはページ内リンクになっており、クリックすると該当セクションまでスクロールする仕様になっています。",
    specification06Detail01: "　プラグインは、CF7を使用しています。",
    specification06Detail02: "　月選択は1~12の範囲、日は1~31の範囲で選択。",
    specification06Detail03:
      "　フォームアクセシビリティを考慮して、select、radio、checkboxなどをtabキーでフォーカスが当たるようにし、spaceキーで選択できる仕様にしています。",
    specification06Detail04:
      "　「送信する」ボタンは、必須項目が全て入力されていないと押せないようにしています。確認画面は実装していません。",
    accessDescription:
      "本サイトは転職活動用のポートフォリオとして制作しており、意図した環境で作品を見ていただくため、noindexとnofollowを設定し、検索エンジンのインデックスから除外しています。",
    labels: [{ no: "Card No.", value: "003/006" }],
    skillsList:
      "HTML, CSS, Sass, JavaScript, PHP, WordPress, Swiper, GSAP, webpack",
    siteUrl: "https://aoymdev.com/tetote",
    role: "Coding",
    viewTransitionName: "view-transition-title-work-3",
    viewTransitionImage: "view-transition-img-work-3",
  },
  {
    id: 4,
    image: "/images/works/work04.jpg",
    workTitle: "aoyama｜Creative Developer",
    cardDesc:
      "私のポートフォリオサイトになります。サイトデザインを自ら考え、コーディングまで行いました。",
    description:
      "私のポートフォリオサイトになります。サイトデザインを自ら考え、コーディングまで行いました。",
    detail01:
      "　このサイトはNext.js + CSS Modules + Tailwind CSS + TypeScriptで制作し、デプロイはVercelで行いました。",
    detail02:
      "　トップページ：トップページには、キューブ型の3Dコンテンツを配置。散らばるキューブは「創造性」「アイデア」「感情」「これまでの学び」といった記憶の断片を表しており、学習初期から今までの私の「プロセス」や「ストーリー」を視覚的に表現しています。",
    detail03:
      "　アバウトページ：私のプロフィール、Web開発やAIへの関心、そしてモノづくりに対する想いやビジョンを紹介しています。",
    detail04:
      "　スキルページ：サイト制作やアプリ開発をする上で学び、活用してきたスキルセットを一覧でまとめています。",
    detail05:
      "　制作実績ページ：これまでに制作した作品を一覧で紹介しています。",
    detail06:
      "　お問い合わせページ：このページでは、「React Hook Form」でパフォーマンスを最適化したフォームを実装しました。「Zod」による入力値検証（バリデーション）で堅牢性を高め、メール送信サービスには「Resend」を利用しています。",
    detail07:
      "　ドットパターンで表現した背景のアニメーションや、カードの出現アニメーションは「GSAP」で実装しています。",
    detail08:
      "　カード型UIには「View Transitions API」を利用し、クリック時にスムーズに流れるような遷移アニメーションを実装しています。ユーザーに適切な視線誘導をもたらすアニメーションを実装することで、コンテンツへの没入感を高め、ユーザーの操作を助ける演出でUX向上を目指しました。",
    detail09:
      "　ホバーアニメーションでは、こちらの動作に対してプロダクトが反応を返してくれるような「対話」を意識したアニメーションを実装しています。",
    detail10:
      "　オーディオライブラリ「Howler.js」を使用し、BGMを再生できるようにしています。",
    accessDescription:
      "本サイトは転職活動用のポートフォリオとして制作しており、意図した環境で作品を見ていただくため、noindexとnofollowを設定し、検索エンジンのインデックスから除外しています。",
    labels: [{ no: "Card No.", value: "004/006" }],
    skillsList:
      "Next.js, TypeScript, Tailwind CSS, shadcn/ui, GSAP, Motion, View Transitions API, React Three Fiber, Drei, React Spring, Howler.js, React Hook Form, Zod, Resend, Vercel",
    siteUrl: "https://aoyamadev.com",
    role: "Design, Coding",
    viewTransitionName: "view-transition-title-work-4",
    viewTransitionImage: "view-transition-img-work-4",
  },
  {
    id: 5,
    image: "/images/works/work05.jpg",
    workTitle: "OUTPUT QUEST　叡智の継承者",
    cardDesc:
      'ゲーミフィケーションを取り入れた "RPG風学習支援アプリ" です。勇者と共に学びの冒険に旅立ちましょう。',
    description:
      '私が開発したWebアプリです。ゲーミフィケーションを取り入れた "RPG風学習支援アプリ" で、Zennで記事を投稿することでアプリ内の「勇者」が成長し、アイテムの入手、称号の獲得、仲間との出会いがあなたを待っています。アウトプットを通じて学習意欲や知的好奇心を高め、楽しみながら自己成長を促すことを目的に開発しました。',
    detail01:
      "　このWebアプリはNext.js + CSS Modules + Tailwind CSS + TypeScriptで開発し、デプロイはVercelで行いました。",
    detail02:
      "　トップページ：ゲームのオープニングを彷彿とさせる演出により、冒険のはじまりを視覚的に表現しました。",
    detail03:
      "　ダッシュボード：勇者の冒険の拠点。勇者の成長度合いを示すレベル、Zennでの投稿数、勇者の仲間に加わったキャラや入手したアイテムを確認でき、Xへのシェアが可能です。",
    detail04:
      "　学びの書：Zennの記事を「これまでの学び」として記録する場所。Zennで投稿した記事が一覧表示され、学びの記録として振り返ることができます。記事はアプリ内ではカード型UIで表示され、クリックすることでZennの記事ページにアクセスできます。",
    detail05:
      "　記事探索：AIが勇者の仲間の「賢者」として、次に書く記事に最適なテーマを提案。賢者（AI）は、あなたのZenn記事を探索し、過去の投稿から傾向を探ることで、あなたの成長に最適な「学びのタネ」を見つけ出します。",
    detail06:
      "　つよさ：勇者の成長度合いを示すレベル、レベルアップ報酬で獲得した「称号」の確認、勇者の「装備アイテム」の確認、これまでの学びの軌跡が残る「冒険ログ」の確認ができます。",
    detail07:
      "　称号リスト：勇者がレベルアップ報酬で獲得した称号を一覧で確認できます。",
    detail08: "　そうび一覧：勇者の装備アイテムを一覧で確認できます。",
    detail09:
      "　冒険ログ：学びの軌跡が残る「冒険ログ」。これまでの学びの軌跡を時系列で確認できます。",
    detail10:
      "　なかま：勇者の仲間に加わったキャラクターを確認できます。1人1人のキャラクターの詳細情報も確認できます。",
    detail11:
      "　アイテム：勇者がレベルアップ報酬で入手したアイテムを確認できます。1つ1つのアイテムの詳細情報も確認できます。",
    detail12:
      "　連携：Clerk認証によるログイン、Zennのアカウント連携を管理できます。ログインとZenn連携をすることで、Zennの投稿データがアプリ内のUIに反映されます。アプリはログイン無しでも利用できます。",
    detail13:
      "　Zenn連携について：OUTPUT QUESTとZennアカウントを連携させることで得られるメリットや、ゲストユーザーとしてアプリを手軽に体験する方法について解説します。あなたに合った方法で、OUTPUT QUESTの世界を体験できます。",
    detail14:
      "　OUTPUT QUESTとは ?：OUTPUT QUESTの世界観と使い方、アウトプットを通じて成長する「RPG風学習支援アプリ」の始め方を解説します。アプリの概要、コンセプト、主要機能について紹介します。",
    detail15: "　利用規約：OUTPUT QUESTの利用規約を確認できます。",
    detail16:
      "　プライバシーポリシー：OUTPUT QUESTのプライバシーポリシーを確認できます。",
    accessDescription:
      "このWebアプリは転職活動用のポートフォリオとして開発したものであり、意図した環境でご確認いただくため、noindexとnofollowを設定し、検索エンジンのインデックスから除外しています。",
    labels: [{ no: "Card No.", value: "005/006" }],
    skillsList:
      "Next.js, TypeScript, Tailwind CSS, shadcn/ui, Motion, Howler.js, Clerk, Prisma, Supabase, zod, Vercel AI SDK, react-markdown, Vercel",
    siteUrl: "https://outputquest.com",
    role: "Design, Coding",
    viewTransitionName: "view-transition-title-work-5",
    viewTransitionImage: "view-transition-img-work-5",
  },
  {
    id: 6,
    image: "/images/works/work06.jpg",
    workTitle: "Maestro",
    cardDesc:
      "Git worktreeを活用した「オーケストラ開発」で、Claude Codeとのパラレル開発を飛躍的に効率化するCLIツールです。",
    description:
      "Git worktreeを活用した「オーケストラ開発」で、Claude Codeとのパラレル開発を飛躍的に効率化するCLIツールです。",
    detail01:
      "　Git worktreeを「オーケストラメンバー」として管理。各ブランチが独立したディレクトリで並行作業でき、stashやブランチ切り替えのストレスから解放されます。",
    detail02:
      "　`mst create feature/auth`一発で新しいworktreeを作成。`--tmux`で専用セッション、`--setup`で環境構築、`--open`でエディタ起動も同時に実行可能。",
    detail03:
      "　MCP (Model Context Protocol)サーバーを内蔵し、Claude CodeからMaestroの機能を直接操作。`mst mcp serve`で起動し、AIとの統合開発を実現。",
    detail04:
      "　`--claude-md`オプションでCLAUDE.mdファイルの管理モードを制御。共有モード（シンボリックリンク）と分割モード（独立ファイル）を選択可能。",
    detail05:
      "　GitHub Issue/PR連携で`mst create 123`のように番号を指定するだけで、タイトルやラベル情報を自動取得してブランチ名を生成。",
    detail06:
      "　`mst sync --all`で全worktreeを最新のmainブランチに同期。`--rebase`オプションでrebaseも選択でき、コンフリクトを未然に防止。",
    detail07:
      "　`mst exec --all npm test`で全worktreeで一括コマンド実行。並列実行数も`--concurrency`で制御でき、CI/CDとの連携も容易。",
    detail08:
      "　`mst push --pr`で現在のブランチをpushしつつPRを作成。`--draft-pr`でドラフトPR、`--all`で全worktreeのPR作成も可能。",
    detail09:
      "　`mst list`で全worktreeの状態を一覧表示。`--last-commit`で最終コミット、`--metadata`でGitHub連携情報も確認可能。",
    detail10:
      "　tmuxとの深い統合。`--tmux-h`で水平分割、`--tmux-v`で垂直分割でworktreeを開き、セッション管理も自動化。",
    detail11:
      "　`mst snapshot`で現在の作業状態を保存。メッセージ付きで履歴管理し、`--restore`でいつでも過去の状態に復元可能。",
    detail12:
      "　`mst health`でworktreeの健全性をチェック。孤立したworktreeの検出、ディスク容量警告、`--fix`での自動修復機能を提供。",
    detail13:
      "　`mst graph`でworktree間の関係をMermaid図やDOT形式で可視化。循環参照の自動検出・解決機能も搭載。",
    detail14:
      "　`.maestro.json`で開発フローをカスタマイズ。postCreateフック、自動セットアップ、ファイル同期などチーム固有の設定が可能。",
    detail15:
      "　`mst completion bash/zsh/fish`でシェル補完を生成。Homebrewインストールなら自動設定され、タブ補完で効率的な操作を実現。",
    detail16:
      "　Node.js 20以上で動作し、npm/pnpm/Homebrewでインストール可能。`maestro`と`mst`の両方のコマンドで呼び出せる柔軟な設計。",
    accessDescription: "",
    labels: [{ no: "Card No.", value: "006/006" }],
    skillsList:
      "TypeScript, commander, simple-git, execa, inquirer, chalk, ora, zod, cli-progress, chokidar, conf, p-limit, open, @modelcontextprotocol/sdk, tsup, vitest",
    siteUrl: "https://github.com/camoneart/maestro",
    role: "Design, Coding",
    viewTransitionName: "view-transition-title-work-6",
    viewTransitionImage: "view-transition-img-work-6",
  },
];

const Works = () => {
  return (
    <>
      <Breadcrumb title={worksTitle} />
      <section className={styles["works"]}>
        <TitleAnimation title={worksTitle} subTitle={worksSubTitle} />
        <Work.WorkCardList />
      </section>
    </>
  );
};

export default Works;
