import { useDispatch, useSelector } from 'react-redux'
import { addVoteAnecdote } from '../reducers/anecdoteReducer'
import { notificationSetter } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()

	const anecdotes = useSelector(({filter, anecdotes}) => {
    if (filter === '') {
      return anecdotes
    } else {
      const filteredArray = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
      return filteredArray
    }
  })

	const vote = id => {
    const anecdote = anecdotes.find(a => a.id === id)
    dispatch(addVoteAnecdote(anecdote))
    dispatch(notificationSetter(`You voted ${anecdote.content}`, 5))
  }

	return(
		<div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
		</div>
	)
}

export default AnecdoteList