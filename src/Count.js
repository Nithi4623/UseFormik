import React, { useEffect, useState } from 'react'

export const Count = () => {

     const [num,setnum]=useState(0)

    let numm=1


      const start = ()=>{
   
        setInterval( ()=>{

            setnum(numm++)
            
        },500)

      }

       const stop = ()=>{


        clearInterval(numm)



       }

  return (
    <div>









        {/* <div>
            {num}

            <button onClick={()=> setnum( num + 1)}>Addiction</button>
            <button onClick={()=> setnum( num - 1)}>Subraction</button>
        </div> */}


        <div>
            {num}
             <button onClick={start}> start</button>
             <button onClick={stop}> stop</button>
        </div>







    </div>
  )
}
