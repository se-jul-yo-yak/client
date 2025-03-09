import { http, HttpResponse } from "msw";

const mockArticles: Article[] = [
  {
    image: "https://picsum.photos/500/200",
    title: "Next.js 15 출시!",
    description: "Next.js 15가 출시되었습니다. \n프론트는 할 일이 없어집니다. \n도망가세요!",
  },
  {
    image: "https://picsum.photos/500/200",
    title: "React Server Actions",
    description: "React에서 Server Actions를 활용하는 방법.",
  },
  {
    image: "https://picsum.photos/500/200",
    title: "React Server Actions",
    description: "React에서 Server Actions를 활용하는 방법.",
  },
  {
    image: "https://picsum.photos/500/200",
    title: "React Server Actions",
    description: "React에서 Server Actions를 활용하는 방법.",
  },
];

export const handlers = [
  http.get("https://example.com/articles", () => {
    return HttpResponse.json(mockArticles);
  }),
];
