import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdote'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state = initialState, action) {
      state.push(action.payload)
    },
    voteAnecdote(state = initialState, action) {
      const updated = action.payload
      return state.map(a => (a.id !== updated.id ? a : updated)).sort((a, b) => b.votes - a.votes)
    },
    setAnecdotes(state = initialState, action) {
      return action.payload
    }
  }
})

const { createAnecdote, setAnecdotes, voteAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes)
    dispatch(setAnecdotes(sortedAnecdotes))
  }
}

export const appendAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(createAnecdote(newAnecdote))
  }
}

export const addVoteAnecdote = anecdote => {
  return async dispatch => {
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const returned = await anecdoteService.updateVote(anecdote.id, updatedAnecdote)
    dispatch(voteAnecdote(returned))
  }
}

export default anecdoteSlice.reducer
