import { createSlice } from '@reduxjs/toolkit'
const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello',
  },
  {
    id: '2',
    title: 'Second Post!',
    content: 'Shalom',
  },
]
const postsSlice = createSlice({ name: 'posts', initialState, reducers: {} })
console.log(postsSlice)
export default postsSlice.reducer
