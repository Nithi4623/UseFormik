import React from 'react'

export const Below = ({output,setinput,input,setEmail,setAge}) => {

    // const handledelete = (id)=>{
    //   console.log("gsfgf",output,id);

    //   const datafilter = output.filter( (ele,index)=>{
    //        return index!==id
    //   })

    //   setinput(datafilter)

    // }

    //  const handleedit = (id)=>{
    //    console.log("fdfcf",output,id);
    //    setEmail(output[id].email)
    //    setAge(output[id].age)
     
     
       







    //  }






  return (
    <div>








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
        output.map((kin,index)=>( 
           <tr key={index}>

            <td>{index}</td>
            <td>{kin.email}</td>
            <td>{kin.age}</td>
            <td><button onClick={()=>{handledelete(index)}}>Delete</button></td>
            <td><button onClick={()=>{handleedit(index)}}>Edit</button></td>
           
            </tr>

          ))

        }
        {/* <td>{}</td>
        <td>{}</td>
        <td>{}</td> */}
     






      </table>
   </div>






    </div>
  )
}
