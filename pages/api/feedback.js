import fs from 'fs'
import path from 'path'

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
    const filePath = path.join(process.cwd(), 'data', 'feedback.json')
    const fileData = fs.readFileSync(filePath)
    const data = JSON.parse(fileData)
    data.push(newFeedback)
    fs.writeFileSync(filePath, JSON.stringify(data))
    res.status(201).json({ message: '保存成功！', feedback: newFeedback })
  } else {
    res.status(200).json({ message: '响应成功！' })
  }
}

export default handler
