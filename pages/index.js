import Link from 'next/link'
function HomePage() {
  return (
    <div>
      <h1>欢迎来到我的主页</h1>
      <ul>
        <li>
          <Link replace href='/about'>
            关于我们
          </Link>
        </li>
        <li>
          <Link href='/clients'>所有客户</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
