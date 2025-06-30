import Link from "next/link"
import { Articles } from "./types"

interface Props {
  color: string
  title: string
  articles: Articles[]
}

export default function ArticleList({ color, title, articles }: Props) {
  return (
    <div>
      <h4 className={`text-xl font-bold text-${color}-300 mb-3`}>
        <Link href="/react">{title}</Link>
      </h4>
      <ul className="text-gray-300 space-y-2">
        {articles.map((article, idx) => (
          <li key={idx}>
            <Link href={`/react?articleId=${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
