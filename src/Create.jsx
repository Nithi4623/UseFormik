import React, { useState } from 'react';

import './Form.css';
import { Form } from './Form';



export const Create = (props) => {
    let View 
   

   



  View =props.Data.map((Data,index) => (
       <tr key={index}>
           <td>{Data.fname}</td>
           <td>{Data.lname}</td>
           <td>{Data.email}</td>
           <td><button  type='button'  >Edit</button></td>
           <td><button  type='button'  onClick={()=> deletes(index)} >Delete</button></td>
       </tr>
   )) 
   

//  const edit = (id) =>{
//      id = id
//   setEditId(id)
//    console.log(id);
//     console.log(Data[id]);
//         setFname(Data[id].fname)
//         setLname(Data[id].lname)
//       setEmail(Data[id].email)
     
//    }

  const deletes= (id) =>{
       const filterData = props.Data.filter((element, index) => {
     return index !== id; 
       })
     props.setData(filterData)
        
   }

    
    return (
      <div>
      
        <div>
           

            <div>

             
            </div>
        <div>
          

            
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
                            {View}
                        </thead>
                    </table>
                </div>
            </>
            
        </div>
    </div>
      
      </div>
    )
}

export default Create