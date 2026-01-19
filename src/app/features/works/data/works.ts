export interface WorksData {
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
    workTitle: "aoyama｜Web Engineer",
    cardDesc:
      "私のポートフォリオサイトになります。サイトデザインを自ら考え、コーディングまで行いました。",
    description:
      "私のポートフォリオサイトになります。サイトデザインを自ら考え、コーディングまで行いました。",
    detail01:
      "　Next.js + Tailwind CSS + TypeScriptで開発し、Vercelにデプロイしています。",
    detail02:
      "　トップページ：トップページには、キューブ型の3Dコンテンツを配置。散らばるキューブは「創造性」「アイデア」「感情」「これまでの学び」といった記憶の断片を表しており、学習初期から今までの私の「プロセス」や「ストーリー」を視覚的に表現しています。",
    detail03:
      "　アバウトページ：私のプロフィール、Web開発やAIへの関心、そしてモノづくりに対する想いやビジョンを紹介しています。",
    detail04:
      "　スキルページ：サイト制作やアプリ開発をする上で学び、活用してきたスキルセットを一覧でまとめています。",
    detail05: "　制作実績ページ：これまでに制作した作品を一覧で紹介しています。",
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
    labels: [{ no: "Card No.", value: "001/003" }],
    skillsList:
      "Next.js, TypeScript, Tailwind CSS, shadcn/ui, GSAP, Motion, View Transitions API, React Three Fiber, Drei, React Spring, Howler.js, React Hook Form, Zod, Resend, Vercel",
    siteUrl: "https://aoyamadev.com",
    role: "Design, Coding",
    viewTransitionName: "view-transition-title-work-1",
    viewTransitionImage: "view-transition-img-work-1",
  },
  {
    id: 2,
    image: "/images/works/work02.jpg",
    workTitle: "OUTPUT QUEST　叡智の継承者",
    cardDesc:
      "アウトプットを学びの冒険に変えるRPG風学習支援Webアプリです。勇者と共に学びの冒険をはじめよう！",
    description:
      '「OUTPUT QUEST 叡智の継承者」は、Zennで記事を投稿し、勇者を成長させていく「RPG風学習支援Webアプリ」です。ゲーミフィケーション要素がアウトプットという行為を「学びの冒険」という体験に変え、学習の継続をサポートします。ユーザーが学ぶことを楽しみ、理解を深めることに達成感を覚え、"ユーザーの幸福度に繋がる体験価値" の提供で貢献したいという想いで開発しました。',
    detail01:
      "　Next.js + Tailwind CSS + TypeScriptで開発し、Vercelにデプロイしています。",
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
    detail07: "　称号リスト：勇者がレベルアップ報酬で獲得した称号を一覧で確認できます。",
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
      "　OUTPUT QUESTとは ?：OUTPUT QUESTの世界観と使い方、アウトプットを通じて成長する「RPG風学習支援Webアプリ」の始め方を解説します。アプリの概要、コンセプト、主要機能について紹介します。",
    detail15: "　利用規約：OUTPUT QUESTの利用規約を確認できます。",
    detail16: "　プライバシーポリシー：OUTPUT QUESTのプライバシーポリシーを確認できます。",
    accessDescription:
      "このWebアプリは転職活動用のポートフォリオとして開発したものであり、意図した環境でご確認いただくため、noindexとnofollowを設定し、検索エンジンのインデックスから除外しています。",
    labels: [{ no: "Card No.", value: "002/003" }],
    skillsList:
      "Next.js, TypeScript, Tailwind CSS, shadcn/ui, Motion, Howler.js, Clerk, Prisma, Supabase, zod, Vercel AI SDK, react-markdown, Vercel",
    siteUrl: "https://outputquest.com",
    role: "Design, Coding",
    viewTransitionName: "view-transition-title-work-2",
    viewTransitionImage: "view-transition-img-work-2",
  },
  {
    id: 3,
    image: "/images/works/work03.jpg",
    workTitle: "Maestro",
    cardDesc:
      'Git worktreeを "オーケストラ" のように指揮し、Claude Codeとの並列開発を加速させるCLIツール',
    description:
      'Git worktreeを "オーケストラ" のように指揮し、Claude Codeとの並列開発を加速させるCLIツール',
    detail01:
      '　Maestroは "指揮者" として機能し、各worktreeを "オーケストラ演奏者" のように操り、Claude Code × Git worktreeによる並列開発の効率化を実現します。',
    detail02:
      "　「指揮するだけ、すべてが調和する」— これがMaestroの設計思想。Git、tmux、GitHub、Claude Codeなど既存ツールを統合し、開発者の認知負荷を最小化、創造性を最大化します。",
    detail03:
      "　MaestroはMCPサーバーとしても機能します。「mstでissue123のブランチを作成して、Cursorで開いて」などの自然言語で指示することで、Claude CodeがMaestroを操る新しい開発体験を提供します。",
    detail04:
      "　`mst create 123 --tmux --claude-md`：GitHub Issue/PRからブランチとworktreeを作成し、専用のtmuxセッション内で開発環境を構築。CLAUDE.mdのシンボリックリンクを作成し全てのworktreeで同じCLAUDE.mdを共有。Claude Codeとの連携準備が整い、コンテキストスイッチのコストを最小化します。",
    detail05:
      "　`mst github issue 123 -o`：Issue番号からブランチとworktreeを自動作成、`.maestro.json：development.defaultEditor`に設定したIDEでworktreeを自動で開きます。開発環境への移行がシームレスに。",
    detail06:
      "　`mst tmux`：`fzf`による高速切り替え、`--tmux-h-panes 4`オプションで瞬時にtmuxセッションを4分割レイアウトに構築。各ペインにブランチ名が表示され、並列作業を視覚的に管理することで効率的な開発環境を実現します。",
    detail07: "　`mst list`：ローカルのworktreeを一覧表示できます。",
    detail08: "　`mst github list`：GitHub上のIssue/PRを一覧表示できます。",
    detail09: "　`mst where --current`：現在のworktreeを確認することができます。",
    detail10:
      "　`mst list --last-commit`や`mst list --metadata`で、各演奏者(worktree)の活動状況の詳細を把握できます。",
    detail11:
      "　`mst snapshot`で作業状態を完全保存。実験的な変更の前にスナップショットを作成し、失敗したら即座に復元。git stashよりも直感的で、メッセージ付きで履歴管理が可能です。",
    detail12:
      "　`.maestro.json`でプロジェクトごとに挙動をカスタマイズ可能です。worktreeの保存先、自動セットアップコマンド、同期ファイル、ライフサイクルフック、tmux/GitHub/Claude連携などの柔軟な設定に加え、`postCreate`フックで環境構築の自動化が可能です。",
    detail13:
      "　必要なのはNode.js 20以上のみです。`brew install camoneart/tap/maestro`または`npm install -g @camoneart/maestro`または`pnpm add -g @camoneart/maestro`ですぐにインストールできます。",
    accessDescription: "",
    labels: [{ no: "Card No.", value: "003/003" }],
    skillsList:
      "TypeScript, commander, simple-git, execa, inquirer, chalk, ora, zod, cli-progress, chokidar, conf, p-limit, open, modelcontextprotocol/sdk, tsup, vitest",
    siteUrl: "https://github.com/camoneart/maestro",
    role: "Design, Coding",
    viewTransitionName: "view-transition-title-work-3",
    viewTransitionImage: "view-transition-img-work-3",
  },
];
