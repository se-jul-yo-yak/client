import { fetchArticles } from "@/app/actions/fetchArticles";
import EmailTemplate from "@/components/email/EmailTemplate";

export default async function EmailPreviewPage() {
  const articles = await fetchArticles();

  return <EmailTemplate articles={articles} />;
}
