import * as React from "react";

interface AdminEmailTemplate {
  username: string;
  email: string;
  content: string;
}

export const AdminEmailTemplate: React.FC<Readonly<AdminEmailTemplate>> = ({
  username,
  content,
}) => (
  <div>
    <h3>{username}様から、お問い合わせが届きました。</h3>
    <h3>お問い合わせ内容は以下の通りです。</h3>
    <p>{content}</p>
  </div>
);
