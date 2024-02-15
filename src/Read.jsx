import React, { useState } from 'react'
 import './Form.css'





export const Read = () => {

    let view
     const [fname,setFname]= useState('')
     const [lname,setLname]= useState('')
     const [email,setEmail]= useState('')
     const [data,setdate]=useState([])


      const handleSubmits = (e)=>{
         console.log(data)

        e.preventDefault();

  let dates = {
      fname,lname,email
  }
  setEmail('')
  setFname('')
  setLname('')
 
  setdate([...data,dates])



  view = data.map((data,index)=>(
  
   
   <tr key={index}>
           <td>{data.fname}</td>
           <td>{data.lname}</td>
           <td>{data.email}</td>
           <td><button  type='button' >Edit</button></td>
           <td><button  type='button' >Delete</button></td>
       </tr>
  ))
         

      }

    
  return (
    <div>
          <form onSubmit={handleSubmits}>
                <div>
                    <label>
                    First Name:
                    <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                    Last Name:
                    <input type="text" value={lname} onChange={(e) => setLname(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div>
                    <button  type='submit'>Add</button>
                </div>
                </form>




   
      
      <>
      <div>

          <table>
              <thead>
                  <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th> 
                      <th>Edit</th>
                      <th>Delete</th>
                  </tr>
                
              </thead>
          </table>
      </div>
  </>
  </div>
  )
}
