import { useEffect, useState } from 'react'
import useSWR from 'swr'
function LastPostsPage(props) {
  const [posts, setPosts] = useState(props.data)
  // const [isLoading, setIsLoading] = useState(false)

  //客户端获取数据
  const { data, error } = useSWR(
    'http://jsonplaceholder.typicode.com/posts?userId=1&userId=2'
  )

  useEffect(() => {
    if (data) {
      setPosts(data)
    }
  }, [data])
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

  if (!data && !posts) {
    return <p>加载中...</p>
  }
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          ID：{post.id}， 标题：{post.title}
        </li>
      ))}
    </ul>
  )
}

export default LastPostsPage

//服务器获取数据
export async function getStaticProps() {
  const response = await fetch(
    'http://jsonplaceholder.typicode.com/posts?userId=1'
  )
  const data = await response.json()

  return {
    props: {
      data: data,
    },
  }
}
