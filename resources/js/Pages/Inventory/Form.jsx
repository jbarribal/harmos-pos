import React from 'react'
import AddProductForm from './AddProductForm'
import UpdateProductForm from './UpdateProductForm'
import { useReducer } from 'react'
import { useSelector } from 'react-redux'




export default function Form() {
  
  const { form } = useSelector(state => state.form)
  return (
    <>
    {form ? <UpdateProductForm /> : <AddProductForm />}
    </>
  )
}
