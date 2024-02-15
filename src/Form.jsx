import { useState } from "react"
import React from 'react'
import Create from "./Create";

export const Form = () => {
    const [Data, setData] = useState([]); 
    const [fname, setFname]  = useState('');
    const [lname, setLname]  = useState('');
    const [email, setEmail]  = useState('');

    const handleSubmit = (e) =>{


    
        e.preventDefault();
      

    

        console.log("getdata",Data);


        // if(editId != null){

        //     Data[editId].fname=fname
        //     Data[editId].lname=lname
        //     Data[editId].email=email
        //         setData([...Data])
              
        //         setFname('')
        //         setLname('')
        //         setEmail('')
        // }else{
            let  datas = {
                fname,
                lname,
                email 
                }

         if( fname,lname,email== ''){
            alert("write something the inputfield")
         }
         else{
           
                setData([...Data,datas])
                 console.log(Data);

                //   if(datas = ""){
                  



              
                setFname('')
                setLname('')
                setEmail('')



         }

           
           
   }
   
    
  return (
    <div>

<form onSubmit={handleSubmit}>
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

  

 <Create Data={Data}  setData ={setData}/>









    </div>

   
  )
}
