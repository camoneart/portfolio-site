import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema from "@/lib/formSchema";
import { useCallback } from "react";
import { z } from "zod";

const useContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
      content: "",
    },
  });

  // 関数のメモ化
  const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
    const { username, email, subject, content } = values;

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("content", content);

    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send`, {
        method: "POST",
        body: formData,
      });
      form.reset();
    } catch (error) {
      console.error(error);
    }
  }, [form]); // form を依存配列に追加

  return { form, onSubmit };
};

export default useContactForm;