import { useRef } from 'react'

function HomePage() {
  const nameInputRef = useRef()
  const emailInputRef = useRef()
  const feedbackInputRef = useRef()

  function submitFormHandler(event) {
    event.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredEmail = emailInputRef.current.value
    const feedback = feedbackInputRef.current.value
  }

  return (
    <div>
      <h1>主页</h1>
      <form onsubmit={submitFormHandler}>
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
    </div>
  )
}

export default HomePage
