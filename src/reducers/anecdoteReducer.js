import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state = initialState, action) {
      state.push(action.payload)
    },
    voteAnecdote(state = initialState, action) {
      const id = action.payload
      const anecdoteToUpdate = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToUpdate,
        votes: anecdoteToUpdate.votes + 1
      }
      return state.map(a => (a.id !== id ? a : changedAnecdote)).sort((a, b) => b.votes - a.votes)
    },
    setAnecdotes(state = initialState, action) {
      return action.payload
    }
  }
})

export const { createAnecdote, voteAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer
