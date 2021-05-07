import { useRouter } from 'next/router'
function BlogPostsPage() {
  const router = useRouter()

  console.log(router.query)
  return (
    <div>
      <h1>这是博客页面</h1>
    </div>
  )
}

export default BlogPostsPage
