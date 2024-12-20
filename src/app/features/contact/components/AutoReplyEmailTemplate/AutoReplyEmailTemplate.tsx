interface AutoReplyEmailTemplateProps {
  username: string;
  content: string;
}

export const AutoReplyEmailTemplate: React.FC<AutoReplyEmailTemplateProps> = ({
  username,
  content,
}) => (
  <div>
    <h1>お問い合わせありがとうございます。</h1>
    
    <p>{username} 様</p>
    
    <p>
      この度は、お問い合わせいただき、誠にありがとうございます。
    </p>

    <div>
      <p>いただいたお問い合わせ内容は以下になります。</p>
      <p>{content}</p>
    </div>
    
    <p>
      内容を確認次第、担当者より1〜3営業日以内にご連絡させていただきます。
    </p>

    <p>
      今しばらくお待ちいただけますと幸いです。
    </p>
    
    <hr />
    
    <p>
      ※このメールは自動送信専用のアドレスからお送りしております。ご返信いただいてもお答えできかねますので、ご了承ください。
    </p>
  </div>
);