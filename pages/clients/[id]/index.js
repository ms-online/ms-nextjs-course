import { useRouter } from 'next/router'
function ClientProjectsPage() {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
      <h1>这是指定用户所有作品集页面</h1>
    </div>
  )
}

export default ClientProjectsPage
