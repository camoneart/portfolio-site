import * as React from 'react';

interface EmailTemplateProps {
  username: string;
  email: string;
  content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
  email,
  content,
}) => (
  <div>
    <h2>{username}様から、お問い合わせが届きました。</h2>
    <h3>お問い合わせ内容は以下の通りです。</h3>
    <p>{content}</p>
  </div>
);