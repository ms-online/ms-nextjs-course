import { Fragment } from 'react'
import path from 'path'
import fs from 'fs/promises'

function ProductDetailPage(props) {
  const { loadedProduct } = props
  if (!loadedProduct) {
    return <p>加载中。。。</p>
  }
  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  )
}

//读取虚拟数据的异步函数
async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-data.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  return data
}

export async function getStaticProps(context) {
  const { params } = context
  const productId = params.pid

  const data = await getData()

  const product = data.products.find((product) => product.id === productId)

  if (!product) {
    return { notFound: true }
  }
  return {
    props: {
      loadedProduct: product,
    },
  }
}
export async function getStaticPaths() {
  const data = await getData()
  const ids = data.products.map((product) => product.id)
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }))

  return {
    paths: pathsWithParams,
    fallback: true,
  }
}
export default ProductDetailPage
