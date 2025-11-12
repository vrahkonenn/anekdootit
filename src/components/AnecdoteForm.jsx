import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdote"

const AnecdoteForm = () => {
	const dispatch = useDispatch()

	const addAnecdote = async (event) => {
		event.preventDefault()
		const content = event.target.content.value
		event.target.content.value = ''

		const newAnecdote = await anecdoteService.createNew(content)
		dispatch(createAnecdote(newAnecdote))
		
		dispatch(setNotification(`You created anecdote: "${content}"`))
		setTimeout(() => {
			dispatch(setNotification(''))
		}, 5000)
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