import { useRouter } from 'next/router'
function ClientProjectsPage() {
  const router = useRouter()
  console.log(router.query)
  function loadProjectHandler() {
    //加载数据...
    router.push({
      pathname: '/clients/[id]/[clientProjectId]',
      query: { id: 'summer', clientProjectId: 'projectA' },
    })
  }
  return (
    <div>
      <h1>这是指定用户所有作品集页面</h1>
      <button onClick={loadProjectHandler}> 加载summer的A作品</button>
    </div>
  )
}

export default ClientProjectsPage
