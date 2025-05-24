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
  username: string;
  password: string;
  viewTransitionName: string;
  viewTransitionImage: string;
}

export const worksData: WorksData[] = [
  {
    id: 1,
    image: "/images/works/work01.jpg",
    workTitle: "CareSend｜有資格介護人材が集まる介護派遣サービス",
    description:
      "こちらのサイトは、Figmaで作成されたデザインカンプを基にコーディングを行った「架空の介護派遣サービスのLPサイト」になります。",
    detail01: "　GSAPを利用して、要素の出現アニメーションを実装しています。",
    detail02:
      "　企業ロゴが無限ループするスライダーと、導入事例セクションのカードUIのスライダーはSwiperで実装しています。",
    detail03:
      "　ダウンロードフォームは、「全項目を入力しないと、送信できないようにする」「フォーム送信後は、サンクスページに遷移」「性と名が分かれている時のオートコンプリートに対応」などの仕様です。実際のダウンロード機能は実装していません。",
    accessDescription:
      "BASIC認証をかけているため、お手数ですがサイトのアクセス時に、ユーザーネーム：demo｜パスワード：aoym_demo01の入力をお願いいたします。",
    labels: [{ no: "Card No.", value: "001/005" }],
    skillsList: "HTML, CSS, Sass, JavaScript, Swiper, GSAP, webpack",
    siteUrl: "https://aoymdev.com/caresend",　
    role: "Coding",
    username: "demo",
    password: "demo01",
    viewTransitionName: "view-transition-title-work-1",
    viewTransitionImage: "view-transition-img-work-1",
  },
  {
    id: 2,
    image: "/images/works/work02.jpg",
    workTitle:
      "青牡丹工務店｜大阪市北区の住宅建築・リフォーム・公共事業なら青牡丹工務店",
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
      "BASIC認証をかけているため、お手数ですがサイトのアクセス時に、ユーザーネーム：demo｜パスワード：aoym_demo02の入力をお願いいたします。",
    labels: [{ no: "Card No.", value: "002/005" }],
    skillsList: "HTML, CSS, Sass, JavaScript, Swiper, GSAP, webpack",
    siteUrl: "https://aoymdev.com/aobotan",
    role: "Coding",
    username: "demo",
    password: "demo02",
    viewTransitionName: "view-transition-title-work-2",
    viewTransitionImage: "view-transition-img-work-2",
  },
  {
    id: 3,
    image: "/images/works/work03.jpg",
    workTitle: "採用特設サイト｜株式会社TETOTE",
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
      "BASIC認証をかけているため、お手数ですがサイトのアクセス時に、ユーザーネーム：demo｜パスワード：aoym_demo03の入力をお願いいたします。",
    labels: [{ no: "Card No.", value: "003/005" }],
    skillsList:
      "HTML, CSS, Sass, JavaScript, PHP, WordPress, Swiper, GSAP, webpack",
    siteUrl: "https://aoymdev.com/tetote",
    role: "Coding",
    username: "demo",
    password: "demo03",
    viewTransitionName: "view-transition-title-work-3",
    viewTransitionImage: "view-transition-img-work-3",
  },
  {
    id: 4,
    image: "/images/works/work04.jpg",
    workTitle: "AOYAMA｜Creative Developer",
    description:
      "私のポートフォリオサイトになります。サイトデザインを自ら考え、コーディングまで行いました。",
    detail01:
      "　このサイトはNext.js + CSS Modules + Tailwind CSS + TypeScriptで制作し、デプロイはVercelで行いました。",
    detail02:
      "　トップページの3Dコンテンツは「React Tree Fiber」で実装しています。",
    detail03:
      "　ドットパターンで表現した背景のアニメーションや、カードの出現アニメーションは「GSAP」で実装しています。",
    detail04:
      "　カード型UIには「View Transitions API」を利用し、スムーズに流れるような遷移アニメーションを実装しています。",
    detail05:
      "　ホバーアニメーションでは、こちらの動作に対してプロダクトが反応を返してくれるような「対話」を意識したアニメーションを実装しています。",
    detail06:
      "　オーディオライブラリ「Howler.js」を使用し、BGMを再生できるようにしています。",
    detail07:
      "　お問い合わせフォームは、「React Hook Form」でフォームのパフォーマンス化を行い、「Zod」で入力値の検証（バリデーション）を行うことで堅牢なフォームを実装しました。また、メール送信機能につきましては「Resend」を利用して実装しました。",
    accessDescription:
      "本サイトは転職活動用のポートフォリオとして制作しており、意図した環境で作品を見ていただくため、noindexとnofollowを設定し、検索エンジンのインデックスから除外しています。",
    labels: [{ no: "Card No.", value: "004/005" }],
    skillsList:
      "Next.js, TypeScript, Tailwind CSS, shadcn/ui, React Three Fiber, GSAP, Motion, Howler.js, React Hook Form, Zod, Vercel",
    siteUrl: "https://aoyamadev.com",
    role: "Design, Coding",
    username: "",
    password: "",
    viewTransitionName: "view-transition-title-work-4",
    viewTransitionImage: "view-transition-img-work-4",
  },
  {
    id: 5,
    image: "/images/works/work05.jpg",
    workTitle: "OUTPUT QUEST ~叡智の継承者~",
    description:
      "私が開発したWebアプリです。RPG風のゲーミフィケーションを取り入れた学習支援アプリで、Zennで記事を投稿することでアプリ内の「勇者」が成長し、アイテムやなかまを獲得できます。アウトプットを通じて学習意欲や知的好奇心を高め、楽しみながら自己成長を促すことを目的に開発しました。",
    detail01:
      "　このWebアプリはNext.js + CSS Modules + Tailwind CSS + TypeScriptで開発し、デプロイはVercelで行いました。",
    detail02:
      "　トップページ：ゲームのオープニングを彷彿とさせる演出で、視覚的な出迎えを実現しました。",
    detail03:
      "　ダッシュボードページ：勇者の成長度合いを示すレベル、Zennでの投稿数、レベルアップ報酬で獲得した勇者のなかまやアイテムを確認できます。",
    detail04:
      "　投稿リストページ：Zennで投稿した記事を取得して、アプリ内で「投稿リスト」として記事を閲覧できます。",
    detail05:
      "　つよさページ：レベルアップ報酬で獲得した「称号」の確認、勇者の装備アイテムの確認、学びの記録を時系列で確認できる「冒険ログ」の確認ができます。",
    detail06:
      "　なかまページ：勇者のなかまになったキャラクターを閲覧できます。",
    detail07:
      "　アイテムページ：レベルアップ報酬で獲得したアイテムを閲覧できます。",
    detail08:
      "　アバウトページ：アプリの概要、コンセプト、主要機能について紹介しています。",
    accessDescription:
      "このWebアプリは転職活動用のポートフォリオとして開発したものであり、意図した環境でご確認いただくため、noindexとnofollowを設定し、検索エンジンのインデックスから除外しています。",
    labels: [{ no: "Card No.", value: "005/005" }],
    skillsList:
      "Next.js, TypeScript, Tailwind CSS, shadcn/ui, Motion, Howler.js, Clerk, Prisma, Supabase, Vercel",
    siteUrl: "https://outputquest.com",
    role: "Design, Coding",
    username: "",
    password: "",
    viewTransitionName: "view-transition-title-work-5",
    viewTransitionImage: "view-transition-img-work-5",
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
