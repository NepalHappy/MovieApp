import axios from 'axios'
import { Form } from 'react-router-dom'
import { toast } from 'react-toastify'
const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    const response = await axios.post(newsletterUrl, data)

    toast.success(response.data.msg)
    return response.data.msg
  } catch (error) {
    toast.error(error.response)
    return error.response.msg
  }
}

const NewsLetter = () => {
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Our NewsLetter
      </h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          defaultValue="John"
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          defaultValue="Smith"
          className="form-input"
        />
      </div>{' '}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          defaultValue="test@test.com"
          className="form-input"
        />
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </Form>
  )
}
export default NewsLetter
