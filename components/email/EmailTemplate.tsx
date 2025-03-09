import Image from "next/image";

interface EmailTemplateProps {
  articles: Article[];
}

export default function EmailTemplate({ articles }: EmailTemplateProps) {
  return (
    <div className="max-w-[600px] mx-auto bg-white p-6 rounded-md">
      <h2 className="text-xl font-semibold mb-4">TODAY'S HIGHLIGHTS</h2>

      <ArticleList articles={articles} />
    </div>
  );
}

interface ArticleListProps {
  articles: Article[];
}

function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
}
interface ArticleCardProps {
  article: Article;
}

function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="flex items-start gap-4 py-6 w-full">
      {/* 텍스트 정보 */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{article.title}</h2>
        <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">{article.description}</p>
      </div>

      {/* 썸네일 이미지 */}
      <div className="w-28 h-20 flex-shrink-0 rounded-md overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          width={112}
          height={80}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
}
