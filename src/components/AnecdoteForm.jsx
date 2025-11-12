import { useDispatch } from "react-redux"
import { appendAnecdote } from "../reducers/anecdoteReducer"
import { notificationSetter } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
	const dispatch = useDispatch()

	const addAnecdote = async (event) => {
		event.preventDefault()
		const content = event.target.content.value
		event.target.content.value = ''
		dispatch(appendAnecdote(content))
		dispatch(notificationSetter(`You created anecdote: "${content}"`, 5))
	}

  return (
    <div>
      <h2>create new</h2>
    	<form onSubmit={addAnecdote}>
        <input type="text" name="content"/>
      	<button type='submit'>create</button>
    	</form>
      </div>
  )
}

export default AnecdoteForm