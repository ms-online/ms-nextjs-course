import { Fragment, useState } from 'react'
import { buildFeedbackPath, extractFeedback } from '../api/feedback'

function FeedbackPage(props) {
  const [feedbackData, setfeedbackData] = useState()
  function loadFeedbackHandler(id) {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => setfeedbackData(data.feedback))
  }
  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.feedback}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              显示反馈详情
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath()
  const data = extractFeedback(filePath)
  return {
    props: {
      feedbackItems: data,
    },
  }
}

export default FeedbackPage
