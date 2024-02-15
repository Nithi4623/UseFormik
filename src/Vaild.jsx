import { useFormik } from 'formik'
import React from 'react'
import { formschema } from './one'

export const Vaild = () => {

  const onSubmit = async (actions, values) => {

    await new Promise((resolve) => { setTimeout(resolve, 1000) })
     console.log(values);







  }

  const formik = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: ''
      , cpassword: ''
    },
    onSubmit
    , validationSchema: formschema,

  })
  return (
    <div>

      <div className='main'>
        <div className='sub'>
          <form action="" onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="" id="email" onChange={formik.handleChange} value={formik.values.email} />

            </div>
            <div>
              <label htmlFor="age">age</label>
              <input type="number" id="age" onChange={formik.handleChange} value={formik.values.age} /></div>

            <div>  <label htmlFor="password">password</label>
              <input type="password" id="password" onChange={formik.handleChange} value={formik.values.password} /></div>

            <div>
              <label htmlFor="cpassword">cpassword</label>
              <input type="password" id="cpassword" onChange={formik.handleChange} value={formik.values.cpassword} />
            </div>
            <button type='submit'> Submit</button>
          </form>




        </div>
      </div>














    </div>
  )
}
