"use server";

export async function fetchArticles(): Promise<Article[]> {
  const response = await fetch("https://example.com/articles");
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  return response.json();
}
