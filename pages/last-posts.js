import { useEffect, useState } from 'react'
import useSWR from 'swr'
function LastPostsPage(props) {
  // const [posts, setPosts] = useState()
  // const [isLoading, setIsLoading] = useState(false)

  const { data, error } = useSWR(
    'http://jsonplaceholder.typicode.com/posts?userId=1'
  )
  //请求数据
  // useEffect(() => {
  //   setIsLoading(true)
  //   fetch('http://jsonplaceholder.typicode.com/posts?userId=1')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPosts(data)
  //       setIsLoading(false)
  //     })
  // }, [])
  // if (isLoading) {
  //   return <p>加载中...</p>
  // }
  // if (!posts) {
  //   return <p>加载失败...</p>
  // }

  if (error) {
    return <p>加载失败..</p>
  }

  if (!data) {
    return <p>加载中...</p>
  }
  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>
          ID：{post.id}， 标题：{post.title}
        </li>
      ))}
    </ul>
  )
}

export default LastPostsPage
