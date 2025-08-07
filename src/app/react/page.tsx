"use client"
import { useSearchParams } from "next/navigation"
import ReactPage from "./rect"

export default function ReactArticle() {
  const articleId = useSearchParams().get("articleId")

  console.log("articleId", articleId)
  if (!articleId) {
    return <ReactPage />
  }

  return <div>React Article: {articleId}</div>
}
