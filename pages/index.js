import { useRef, useState } from 'react'

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([])
  const nameInputRef = useRef()
  const emailInputRef = useRef()
  const feedbackInputRef = useRef()

  function submitFormHandler(event) {
    event.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredEmail = emailInputRef.current.value
    const feedback = feedbackInputRef.current.value
    const reqBody = {
      name: enteredName,
      email: enteredEmail,
      feedback: feedback,
    }
    //发起POST请求
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  //get反馈信息
  function loadFeedbackHandler() {
    //发起GET请求
    fetch('/api/feedback')
      .then((response) => response.json())
      .then((data) => {
        setFeedbackItems(data.feedback)
      })
  }

  return (
    <div>
      <h1>主页</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor='name'>姓名：</label>
          <input type='text' id='name' ref={nameInputRef} />
        </div>
        <div>
          <label htmlFor='email'>邮箱：</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='feedback'>你的反馈：</label>
          <textarea id='feedback' rows='5' ref={feedbackInputRef}></textarea>
        </div>
        <button>提交反馈</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>获取反馈信息</button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.feedback}</li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
