

import * as yup from 'yup';

const password =  /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

 export const formschema = yup.object().shape(
    {
    email : yup.string().email('enter vaild email yuouuuuu').required('this field is required'),
    age : yup.number().positive().required('thish field is required yupoooooo'),
    password : yup.string().min(5, 'minum 5 charcterzzz ').matches(password).required(" this field is required youuuuu"),
    cpassword : yup.string().oneOf([yup.ref('password'),null], ' The password you enter is doesnt matches above').required('this field is required')


    // yup.string().oneOf([yup.ref("password"),null],'password and confirm password are not match').required('this field is required')




    }







)