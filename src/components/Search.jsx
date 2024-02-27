import { Form } from 'react-router-dom'

const Search = ({ searchTerm }) => {
  return (
    <div>
      <Form className="form">
        <input
          type="search"
          className="form-input"
          name="searchForm"
          defaultValue={searchTerm}
        />
        <button className="btn">Search</button>
      </Form>
    </div>
  )
}
export default Search
