import { z } from "zod";

const MAX_MB = 10;
const MAX_FILE_SIZE = MAX_MB * 1024 * 1024;
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "application/pdf",
];

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "ユーザー名は2文字以上で入力してください" })
    .max(50, { message: "ユーザー名は50文字以内で入力してください" }),
  subject: z.string().min(2, {
    message: "件名は2文字以上で入力してください",
  }),
  email: z
    .string()
    .email({ message: "適切なメールアドレスを入力してください" }),
  content: z
    .string()
    .min(10, { message: "本文は10文字以上で入力してください" })
    .max(4000, { message: "本文は4000文字以内で入力してください。" }),
  file: z
    .custom<FileList>()
    .optional()
    .refine(
      (files) => {
        if (!files || files.length === 0) return false;
        return true;
      },
      "画像ファイルまたはpdfファイルを添付してください。"
    )
    .refine(
      (files) => {
        if (!files || files.length === 0) return false;
        return files[0].size <= MAX_FILE_SIZE;
      },
      `ファイルサイズは${MAX_MB}MB以下にしてください。`
    )
    .refine(
      (files) => {
        if (!files || files.length === 0) return false;
        return ACCEPTED_FILE_TYPES.includes(files[0].type);
      },
      "jpeg, png, gif, webp, pdfのみ添付できます。"
    )
});

export default formSchema;


