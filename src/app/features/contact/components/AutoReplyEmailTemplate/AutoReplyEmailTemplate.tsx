interface AutoReplyEmailTemplateProps {
  username: string;
  content: string;
}

export const AutoReplyEmailTemplate: React.FC<AutoReplyEmailTemplateProps> = ({
  username,
  content,
}) => (
  <div>
    <h3>{username} 様</h3>
    <h3>お問い合わせありがとうございます。</h3>

    <p>この度は「aoyama｜Web Engineer」からお問い合わせいただき、誠にありがとうございます。</p>

    <div>
      <p>いただいたお問い合わせ内容は以下になります。</p>

      <hr />

      <p>{content}</p>

      <hr />
    </div>

    <p>内容を確認次第、担当者より1〜3営業日以内にご連絡させていただきます。</p>

    <p>今しばらくお待ちいただけますと幸いです。</p>

    <p>よろしくお願いいたします。</p>

    <hr />

    <p>
      ※このメールは自動送信専用のアドレスからお送りしております。ご返信いただいてもお答えできかねますので、ご了承ください。
    </p>
  </div>
);
