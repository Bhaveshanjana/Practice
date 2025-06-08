import React from 'react'
import { AddTodo } from '../components/AddTodo'
import NavBar from '@/components/NavBar/NavBar'
import Providers from './provider'

const page = () => {
  return (
    <main>
      <Providers>
        <NavBar />
      </Providers>
      <AddTodo />
    </main>
  )
}

export default page