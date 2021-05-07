import { useRouter } from 'next/router'

function PortfolioProjectPage() {
  const router = useRouter()
  //返回next推断的当前URL的路径部分（URL参数为定义的文件名）
  console.log(router.pathname)
  //返回一个对象，键名为动态路由文件名，值为URL参数
  console.log(router.query)
  return (
    <div>
      <h1>这是作品详情页面</h1>
    </div>
  )
}

export default PortfolioProjectPage
