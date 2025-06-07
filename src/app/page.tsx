import React from 'react'
import { AddTodo } from '../components/AddTodo'
import NavBar from '@/components/NavBar/NavBar'

const page = () => {
  return (
    <main>
      <NavBar />
      <AddTodo />
    </main>
  )
}

export default page