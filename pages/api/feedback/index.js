import fs from 'fs'
import path from 'path'

export function buildFeedbackPath() {
  return path.join(process.cwd(), 'data', 'feedback.json')
}

export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath)
  const data = JSON.parse(fileData)

  return data
}

function handler(req, res) {
  if (req.method === 'POST') {
    const name = req.body.name
    const email = req.body.email
    const feedBackText = req.body.feedback

    const newFeedback = {
      id: new Date().toISOString(),
      name: name,
      email: email,
      feedback: feedBackText,
    }

    //数据存储在数据库或者文件当中
    const filePath = buildFeedbackPath()
    const data = extractFeedback(filePath)
    data.push(newFeedback)
    fs.writeFileSync(filePath, JSON.stringify(data))
    res.status(201).json({ message: '保存成功！', feedback: newFeedback })
  } else {
    //get请求
    const filePath = buildFeedbackPath()
    const data = extractFeedback(filePath)
    res.status(200).json({ feedback: data })
  }
}

export default handler
