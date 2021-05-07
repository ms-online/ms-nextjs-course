import { useRouter } from 'next/router'
function SelectedClientProjectPage() {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
      <h1>指定用户的指定作品详情页面</h1>
    </div>
  )
}

export default SelectedClientProjectPage
