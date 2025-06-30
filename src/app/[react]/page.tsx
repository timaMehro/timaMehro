"use client"
import { useSearchParams } from "next/navigation"
import ArticleReact from "./rect"

export default function ReactArticle() {
  const articleId = useSearchParams().get("articleId")

  console.log("articleId", articleId)
  if (!articleId) {
    return <ArticleReact />
  }

  return <div>React Article: {articleId}</div>
}
