
 import * as yup  from 'yup';


   const password =  /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
  export const basicschema  = yup.object().shape(
    {
      email :
       yup.string().email('please enter the vaild email address').required('this field is required')
      ,age : 
      yup.number().positive().required("this field is required"),
      password : 
       yup.string().min(5,'Minimum  5 characterzss required ').matches(password).required('this field is required'),
      cpassword : 
      yup.string().oneOf([yup.ref("password"),null],'password and confirm password are not match').required('this field is required')
    
    
    } 
   )
 
    