import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import './task.css'

import { basicschema } from './Two';
import { Below } from './Below';


export const Task = () => {
   const [input,setinput]=useState([])
   const [email,setEmail]=useState()
   const [age,setAge]=useState()
   
   const onSubmit = async (values,actions)=> {  ;
    
     await new Promise ((resolve)=> setTimeout( resolve,1000))
      actions.resetForm()
      setinput( prevs => [...prevs,values])
      
    
   }

  

  //  const changeValue=()=>{
  //   setValues("email",email)
  //   setValues("age",age)
  //  }
   


   const {values,setValues,isSubmitting,touched,handleChange,errors,handleSubmit,setFieldValue} = useFormik({
    initialValues : {
      email : '',
      age : '',
      password : '',
      cpassword : ''
    },
  validationSchema : basicschema,
  onSubmit
   })
   
 
   
    const handledeletes = (id)=>{
      console.log("gsfgf",id);

      const datafilter = input.filter( (ele,index)=>{
           return index!==id
      })

      setinput(datafilter)

    }

     const handleedits = (id)=>{
  
       setFieldValue("email",input[id].email)
       setFieldValue("age",input[id].age)
     
     
       







     }

  return (
    <div className='main'>

   <div className='sub'>
     <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor='email'> Email :</label>
      <input type='email'  id='email'
       onChange={handleChange} 
       className={errors.email && touched.email ? 'input-error': ''}
       value={values.email} placeholder='enter your email'/>
        {errors.email && touched.email && <p className='error'>{errors.email}</p>}
    </div>
   
   
   <div>
   <label htmlFor='age'> Age :</label> 

      <input type='number'  id='age' onChange={handleChange} 
        className={errors.age && touched.age ? 'input-error': ''}
       value={values.age} placeholder='enter your Age'/>
         {errors.age && touched.age && <p className='error'>{errors.age}</p>}

   </div>

 <div>
 <label htmlFor='password'> password :</label>
      <input type='password'  id='password' onChange={handleChange} 
        className={errors.password && touched.password ? 'input-error': ''}
     value={values.password} placeholder='enter your Password'/>
      {errors.password && touched.password && <p className='error'>{errors.password}</p>}
 </div>
 
<div>
<label htmlFor='cpassword'> Cpassword :</label>
      <input type='password'  id='cpassword' onChange={handleChange} 
        className={errors.cpassword && touched.cpassword ? 'input-error': ''}
       value={values.cpassword} placeholder='enter your confrim password'/>
        {errors.cpassword && touched.cpassword && <p className='error'>{errors.cpassword}</p>}
         
</div>

  <button disabled={isSubmitting} type='submit'> submit</button>

  </form>

</div>
          
     
    <div>

  
    {/* <Below  output = {input}  setinput = {setinput} setAge={setAge} setEmail={setEmail} input= {input}/>  */}
    
    <div>
      <table border={20} width={600}>
        <tr >
        <th> S.No</th>
        <th> Email</th>
        <th>Age</th>
        <th>Delete</th>
        <th>Edit</th>
        </tr>
       
        {
        input.map((kin,index)=>( 
           <tr key={index}>

            <td>{index}</td>
            <td>{kin.email}</td>
            <td>{kin.age}</td>
            <td><button onClick={()=>{handledeletes(index)}}>Delete</button></td>
            <td><button onClick={()=>{handleedits(index)}}>Edit</button></td>
           
            </tr>

          ))

        }
        {/* <td>{}</td>
        <td>{}</td>
        <td>{}</td> */}
     






      </table>
   </div>



      


    </div>

    </div>
  )
}
