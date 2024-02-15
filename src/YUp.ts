//import TextField from '@mui/material/TextField';
import React, { Fragment, useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import countrFlg from './countryflags'
import { Controller, useFormContext } from 'react-hook-form';
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText, Alert, TableBody, Table } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { action } from 'mobx';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/bootstrap.css"

function ContactTab(props) {
  const methods = useFormContext();
  const { control } = methods;
  const { editid } = props;
  const [countryerror, setcountryerror] = useState('');
  const [stateerror, setstateerror] = useState('');
  const [cityerror, setcityerror] = useState('');
  const [postcodeerror, setpostcodeerror] = useState('');
  const [add1error, setadd1error] = useState('');
  const [add2error, setadd2error] = useState('');
  const [phoneerror, setphoneerror] = useState('');
  const [emailerror, setemailerror] = useState('');
  const [add1, setadd1] = useState('');
  const [add2, setadd2] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');
  const [countryval, setcountryval] = useState('');
  const [postcode, setpostcode] = useState('');
  const [phone, setphone] = useState('');
  const [email, setemail] = useState('');
  const [website, setwebsite] = useState('');
  const [phonewhat, setphonewhat] = useState('');
  const [phonew, setphonew] = useState('');
  const [landmark, setlandmark] = useState('');
  const [Countrylist, setCountrylist] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [companylist, setcompanylist] = useState('');
  const [countryflgs, setCountryflags] = useState(countrFlg)
  const [phone1, setPhone1] = useState('');


  // const validate = values => {
  //   const errors = {};
  //   if (!values.address) {
  //     errors.address = 'Required';
  //   }
  //   if (!values.area) {
  //     errors.area = 'Required';
  //   }

  //   if (!values.landmark) {
  //     errors.landmark = 'Required';
  //   }
  //   if (!values.state) {
  //     errors.state = 'Required';
  //   }
  //   if (!values.city) {
  //     errors.city = 'Required';
  //   }
  //   if (!values.postcode) {
  //     errors.postcode = 'Required';
  //   }
  //   if (!values.country) {
  //     errors.country = 'Required';
  //   }
  //   if (!values.phone) {
  //     errors.phone = 'Required';
  //   }
  //   if (!values.mobile) {
  //     errors.mobile = 'Required';
  //   }
  //   if (!values.website) {
  //     errors.website = 'Required';
  //   }
  //   if (!values.email) {
  //     errors.email = 'Required';
  //   }
  //   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //     errors.email = 'Invalid email address';
  //   }
  //   if (!values.whatsApp) {
  //     errors.whatsApp = 'Required';
  //   }

  //   return errors;
  // };

  const validationSchema = Yup.object({
    address: Yup.string()
      .max(50, 'Must be 50 characters or less')
      .required('Enter the address field'),
    area: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Enter the area field'),
    // landmark: Yup.string()
    //   .max(20, 'Must be 20 characters or less')
    //   .required(''),
    state: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Enter the state field'),
    city: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Enter the city field'),
    postcode: Yup.string()
      .max(10, 'Must be 10 characters or less')
      .required('Enter the postcode field'),
    country: Yup.string()
      .max(30, 'Must be 30 characters or less')
      .required('Enter the country field'),
    phone: Yup.string()
      .min(10, 'Must be 10 characters or less')
      .max(20, 'Must be 20 characters or less')
      .required('Enter the phone field'),
    mobile: Yup.string()
      .min(10, 'Must be 10 characters or less')
      .max(20, 'Must be 20 characters or less')
      .required('Enter the mobile field'),
    website: Yup.string()
      .max(30, 'Must be 30 characters or less')
      .required('Enter the website field'),
    whatsApp: Yup.string()
      .min(10, 'Must be 10 characters or less')
      .max(20, 'Must be 20 characters or less')
      .required('Enter the whatsapp field'),

    email: Yup.string().email('Invalid email address').required('Enter the email field'),
  })

  const onSubmit = async (values, actions) => {
    console.log("formik values");
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    action.setErrors
    SaveCompany()
    actions.resetForm();
  
  };
  

  const SaveCompany = () => {
    console.log("hello world");
    // event.preventDefault();
    console.log(formik.values);
    setisLoading(true);
    let str = '';

    if (editid != null && editid != undefined && editid != '') {
      str = "&id=" + editid;
    }
    console.log("api get values",formik.values.address);
    console.log('https://www.laabamone.com/LingaChemicals/api.php?eventtype=company'
      + str + '&country=' + countryval +
      '&state=' + state +
      '&city=' + city +
      '&postcode=' + postcode +
      '&flat=' + add1 +
      '&street=' + add2 +
      '&landmark=' + landmark +
      '&mobile=' + phone +
      '&phonew=' + phonew +
      '&phonewhat=' + phonewhat +
      '&website=' + website +
      '&email=' + email +
      '&status=1');
    fetch('https://www.laabamone.com/LingaChemicals/api.php?eventtype=company'
      + str + '&country=' + formik.values.country +
      '&state=' + formik.values.state +
      '&city=' + formik.values.city +
      '&postcode=' + formik.values.postcode +
      '&flat=' + formik.values.address +
      '&street=' + formik.values.area +
      '&landmark=' + formik.values.landmark +
      '&mobile=' + formik.values.mobile +
      '&phonew=' + formik.values.phone +
      '&phonewhat=' + formik.values.whatsApp +
      '&website=' + formik.values.website +
      '&email=' + formik.values.email +
      '&status=1'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('yessssssss');
          const id = result[0]['id'];
          const message = result[0]['message'];
          if (id != undefined && message == 'success') {

            setisLoading(false);
            toast.success("Successfully Added");
          }
          else {
            const errormsg = result[0]['errormsg'];
            toast.error(errormsg)
            setisLoading(false);
          }


          console.log(result);
        },
        (error) => {
          console.log('no');
          console.log(error);
          toast.error("Try again..Data not update..");
          setisLoading(false);
        }
      );
  }
  console.log(add1);
  const {handleChange,values,touched,errors}= useFormik({
    initialValues: {
      address: "hello",
      area: add2,
      landmark: 'india',
      state: '',
      city: city,
      postcode: '',
      country: '',
      phone: '',
      mobile: phone,
      website: '',
      email: '',
      whatsApp: '',
    },
    validationSchema,

    // validate
    onSubmit,
    handleSubmit: values => {
      console.log("ERROR VALUES", value)
      alert(JSON.stringify(values, null, 2));
    },
    
  });
  // END
  console.log("formikObj",value)
  
  useEffect(() => {
    // Perform localStorage action
    const getCompany = async (a) => {

      const response = await fetch('https://www.laabamone.com/LingaChemicals/api.php?eventtype=company&viewtype=listview&id=' + a);
      const json = await response.json();
      console.log('company', json);
      setadd1(json[0].flat);
      setadd2(json[0].street);
      setcity(json[0].city);
      setstate(json[0].state);
      setcountryval(json[0].countryval);
      setpostcode(json[0].postcode);
      setphonew(json[0].phonew);
      setphone(json[0].mobile);
      setphonewhat(json[0].phonewhat);
      setwebsite(json[0].website);
      setemail(json[0].email);

      console.log("hello")
      setcompanylist(json);


    }
    // const getCountry = async (a) => {

    //   const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=countylist');
    //   const json = await response.json();
    console.log(formik.values);

    //   setCountrylist(json);


    // }

    if (editid != null && editid != undefined && editid != '' && editid != 'new') {
      getCompany(editid);
    }

    // getCountry();






  }, [])

  console.log("phone number current value", formik.values.phone);
  const handleChange = (e) => {
    // Get the input value
    let inputValue = e.target.value;

    // Remove any non-numeric characters
    inputValue = inputValue.replace(/[^0-9]/g, '');

    // Limit the input to 10 characters
    if (inputValue.length > 10) {
      inputValue = inputValue.slice(0, 10);
    }
    console.log(e.target.name);
    // Update the form field value
    formik.setFieldValue(e.target.name, inputValue);

  };
  console.log(formik.errors.address);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          value={formik.values.address}
          onChange={formik.handleChange}
          name="address"
          type='text'
          className={formik.touched.address && formik.errors.address ? "mt-8 mb-16 " : "mt-8 mb-16"}
          // required
          label="Flat, House no., Building, Company, Apartment *"
          autoFocus
          id={formik.values.address}
          variant="outlined"
          fullWidth
          error={formik.touched.address && !!formik.errors.address} // Set error prop to true when there's an error
          InputProps={{
            style: {
              borderColor: formik.touched.address && formik.errors.address ? "darkred" : "", // Dark red border color when there's an error
            },
          }}
          InputLabelProps={{
            style: {
              color: formik.touched.address && formik.errors.address ? "red" : "", // Red label color when focused
            },
          }}
        />
        {formik.touched.address && formik.errors.address ? (
          <div style={{ color: "red" }} >{formik.errors.address}</div>
        ) : null}


        <TextField
          value={formik.values.area}
          onChange={formik.handleChange}
          name="area"
          //  type={email}
          className={formik.touched.area && formik.errors.area ? "mt-8 mb-16 " : "mt-8 mb-16"}
          // required
          label="Area, Street, Sector, Village"
          autoFocus
          id="sku"
          variant="outlined"
          fullWidth
          error={formik.touched.area && !!formik.errors.area} // Set error prop to true when there's an error
          InputProps={{
            style: {
              borderColor: formik.touched.area && formik.errors.area ? "darkred" : "", // Dark red border color when there's an error
            },
          }}
          InputLabelProps={{
            style: {
              color: formik.touched.area && formik.errors.area ? "red" : "", // Red label color when focused
            },
          }}
        />
        {formik.touched.area && formik.errors.area ? (
          <div style={{ color: "red" }} >{formik.errors.area}</div>
        ) : null}


        <TextField
          value={formik.values.landmark}
          onChange={formik.handleChange}
          name="landmark"
          // type={email}
          className={formik.touched.landmark && formik.errors.landmark ? "mt-8 mb-16 " : "mt-8 mb-16"}
          label="Landmark"
          autoFocus
          id="sku"
          variant="outlined"
          fullWidth
        />

        <TextField
          value={formik.values.state}
          onChange={formik.handleChange}
          name="state"
          // type={email}
          className={formik.touched.state && formik.errors.state ? "mt-8 mb-16 " : "mt-8 mb-16"}
          // required
          label="State "
          autoFocus
          id="sku"
          variant="outlined"
          fullWidth
          error={formik.touched.state && !!formik.errors.state} // Set error prop to true when there's an error
          InputProps={{
            style: {
              borderColor: formik.touched.state && formik.errors.state ? "darkred" : "", // Dark red border color when there's an error
            },
          }}
          InputLabelProps={{
            style: {
              color: formik.touched.state && formik.errors.state ? "red" : "", // Red label color when focused
            },
          }}
        />
        {formik.touched.state && formik.errors.state ? (
          <div style={{ color: "red" }}>{formik.errors.state}</div>
        ) : null}


        <TextField
          value={formik.values.city}
          onChange={formik.handleChange}
          name="city"
          // type={email}
          className={formik.touched.city && formik.errors.city ? "mt-8 mb-16 " : "mt-8 mb-16"}
          // required
          label="City "
          autoFocus
          id="sku"
          variant="outlined"
          fullWidth
          error={formik.touched.city && !!formik.errors.city} // Set error prop to true when there's an error
          InputProps={{
            style: {
              borderColor: formik.touched.city && formik.errors.city ? "darkred" : "", // Dark red border color when there's an error
            },
          }}
          InputLabelProps={{
            style: {
              color: formik.touched.city && formik.errors.city ? "red" : "", // Red label color when focused
            },
          }}
        />
        {formik.touched.city && formik.errors.city ? (
          <div style={{ color: "red" }}>{formik.errors.city}</div>
        ) : null}


        <TextField
          value={formik.values.postcode}
          onChange={formik.handleChange}
          name="postcode"
          // type={email}
          className={formik.touched.postcode && formik.errors.postcode ? "mt-8 mb-16 " : "mt-8 mb-16"}
          // required
          label="PostCode "
          autoFocus
          id="sku"
          variant="outlined"
          fullWidth
          error={formik.touched.postcode && !!formik.errors.postcode} // Set error prop to true when there's an error
          InputProps={{
            style: {
              borderColor: formik.touched.postcode && formik.errors.postcode ? "darkred" : "", // Dark red border color when there's an error
            },
          }}
          InputLabelProps={{
            style: {
              color: formik.touched.postcode && formik.errors.postcode ? "red" : "", // Red label color when focused
            },
          }}
        />
        {formik.touched.postcode && formik.errors.postcode ? (
          <div style={{ color: "red" }}>{formik.errors.postcode}</div>
        ) : null}

        <Autocomplete

          value={countryval}
          className={formik.touched.country && formik.errors.country ? "mt-8 mb-16 " : "mt-8 mb-16"}
          onChange={formik.handleChange}
          name="country"
          // type={email}
          inputValue={countryval}
          onInputChange={(event, newInputValue) => {
            {
              // alert(newInputValue);
              setcountryval(newInputValue);
              setcountryerror('')
              formik.setFieldValue("country", newInputValue)
            }
          }}
          disablePortal
          id="combo-box-demo"
          options={countryflgs}
          // getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
              <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt=""
              />
              {option.label} ({option.code}) +{option.phone}
            </Box>
          )}
          // options={Countrylist}
          //sx={{ width: 300 }}
          renderInput={(params) =>
            <TextField {...params}
              value={countryval}
              error={formik.touched.country && !!formik.errors.country}
              helperText={countryerror}
              label="Country*" />}
          InputProps={{
            style: {
              borderColor: formik.touched.country && formik.errors.country ? "darkred" : "",
            },
          }}
          InputLabelProps={{
            style: {
              color: formik.touched.country && formik.errors.country ? "red" : "",
            },
          }}
        />
        {formik.touched.country && formik.errors.country ? (
          <div style={{ color: "red" }}>{formik.errors.country}</div>
        ) : null}




        <PhoneInput
          country={'in'}
          value={formik.values.phone}
          className={formik.touched.phone && formik.errors.phone ? "phone-input-danger" : "phone-input"}
          onChange={(phone) => formik.setFieldValue('phone', phone)}
          inputStyle={{
            width: '100%',
            height: '50px',
            fontSize: '16px',
            borderColor: formik.touched.phone && formik.errors.phone ? 'red' : '',
          }}
          containerStyle={{
            marginTop: '8px',
            marginBottom: '16px',
          }}
          inputProps={{
            name: 'phone',
            id: 'quantity',
            label: 'Phone',
            variant: 'outlined',
            fullWidth: true,
            placeholder: "Phone Number",
            error: formik.touched.phone && !!formik.errors.phone,
          }}
          InputLabelProps={{
            style: {
              color: formik.touched.phone && formik.errors.phone ? 'red' : 'blue', // Blue label color when focused
            },
          }}
          inputComponent={TextField}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div style={{ color: "red" }}>{formik.errors.phone}</div>
        ) : null}
        {/* <TextField
          value={formik.values.phone}
          onChange={handleChange}
          name="phone"
          // type={email}
          className={formik.touched.phone && formik.errors.phone ? "mt-8 mb-16 " : "mt-8 mb-16"}
          label="Phone (work)"
          id="quantity"
          variant="outlined"
          type="number"
          fullWidth
          error={formik.touched.phone && !!formik.errors.phone} // Set error prop to true when there's an error
          InputProps={{
            style: {
              borderColor: formik.touched.phone && formik.errors.phone ? "darkred" : "", // Dark red border color when there's an error
            },
          }}
          InputLabelProps={{
            style: {
              color: formik.touched.phone && formik.errors.phone ? "red" : "", // Red label color when focused
            },
          }}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div style={{ color: "red" }}>{formik.errors.phone}</div>
        ) : null} */}


        {/* <TextField
          value={formik.values.mobile}
          onChange={handleChange}
          name="mobile"
          // type={email}
          className={formik.touched.mobile && formik.errors.mobile ? "mt-8 mb-16 " : "mt-8 mb-16"}
          label="Mobile"
          id="sku"
          variant="outlined"
          type="number"
          fullWidth
          error={formik.touched.mobile && !!formik.errors.mobile} // Set error prop to true when there's an error
          InputProps={{
            style: {
              borderColor: formik.touched.mobile && formik.errors.mobile ? "darkred" : "", // Dark red border color when there's an error
            },
          }}
          InputLabelProps={{
            style: {
              color: formik.touched.mobile && formik.errors.mobile ? "red" : "", // Red label color when focused
            },
          }}
        />
        {formik.touched.mobile && formik.errors.mobile ? (
          <div style={{ color: "red" }}>{formik.errors.mobile}</div>
        ) : null} */}


        <PhoneInput
          country={'in'}
          value={formik.values.mobile}
          className={formik.touched.mobile && formik.errors.mobile ? "phone-input-danger" : "phone-input"}
          onChange={(mobile) => formik.setFieldValue('mobile', mobile)}
          inputStyle={{
            width: '100%',
            height: '50px',
            fontSize: '16px',
            borderColor: formik.touched.mobile && formik.errors.mobile ? 'red' : '',
          }}
          containerStyle={{
            marginTop: '8px',
            marginBottom: '16px',
          }}
          inputProps={{
            name: 'mobile',
            id: 'quantity',
            label: 'mobile',
            variant: 'outlined',
            fullWidth: true,
            placeholder: "Mobile Number",
            error: formik.touched.mobile && !!formik.errors.mobile,
          }}
          InputLabelProps={{
            style: {
              color: formik.touched.mobile && formik.errors.mobile ? 'red' : 'blue', // Blue label color when focused
            },
          }}
          inputComponent={TextField}
        />
        {formik.touched.mobile && formik.errors.mobile ? (
          <div style={{ color: "red" }}>{formik.errors.mobile}</div>
        ) : null}


        <TextField
          value={formik.values.website}
          onChange={formik.handleChange}
          name="website"
          // type={email}
          className={formik.touched.website && formik.errors.website ? "mt-8 mb-16 " : "mt-8 mb-16"}
          label="Website"
          id="sku"
          variant="outlined"
          type="text"
          fullWidth
          error={formik.touched.website && !!formik.errors.website} // Set error prop to true when there's an error
          InputProps={{
            style: {
              borderColor: formik.touched.website && formik.errors.website ? "darkred" : "", // Dark red border color when there's an error
            },
          }}
          InputLabelProps={{
            style: {
              color: formik.touched.website && formik.errors.website ? "red" : "", // Red label color when focused
            },
          }}
        />
        {formik.touched.website && formik.errors.website ? (
          <div style={{ color: "red" }}>{formik.errors.website}</div>
        ) : null}


        <TextField
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          // type={email}
          className={formik.touched.email && formik.errors.email ? "mt-8 mb-16 " : "mt-8 mb-16"}
          label="email"
          id="quantity"
          variant="outlined"
          // required
          type="email"
          fullWidth
          error={formik.touched.email && !!formik.errors.email} // Set error prop to true when there's an error
          InputProps={{
            style: {
              borderColor: formik.touched.email && formik.errors.email ? "darkred" : "", // Dark red border color when there's an error
            },
          }}
          InputLabelProps={{
            style: {
              color: formik.touched.email && formik.errors.email ? "red" : "", // Red label color when focused
            },
          }}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}

        <PhoneInput
          country={'in'}
          value={formik.values.whatsApp}
          className={formik.touched.whatsApp && formik.errors.whatsApp ? "phone-input-danger" : "phone-input"}
          onChange={(whatsApp) => formik.setFieldValue('whatsApp', whatsApp)}
          inputStyle={{
            width: '100%',
            height: '50px',
            fontSize: '16px',
            borderColor: formik.touched.whatsApp && formik.errors.whatsApp ? 'red' : '', // Conditional border color
          }}
          containerStyle={{
            marginTop: '8px',
            marginBottom: '16px',
          }}
          inputProps={{
            name: 'whatsApp',
            id: 'quantity',
            label: 'Whatsapp',
            variant: 'outlined',
            fullWidth: true,
            placeholder: "Phone Number",
            error: formik.touched.whatsApp && !!formik.errors.whatsApp,
          }}
          InputLabelProps={{
            style: {
              color: formik.touched.whatsApp && formik.errors.whatsApp ? 'red' : 'blue', // Blue label color when focused
            },
          }}
          inputComponent={TextField}
        />
        {formik.touched.whatsApp && formik.errors.whatsApp ? (
          <div style={{ color: "red" }}>{formik.errors.whatsApp}</div>
        ) : null}
        

        {/* <TextField
          value={formik.values.whatsApp}
          onChange={handleChange}
          name="whatsApp"
          // type={email}
          className={formik.touched.whatsApp && formik.errors.whatsApp ? "mt-8 mb-16 " : "mt-8 mb-16"}
          label="Whatsapp Mobile"
          id="sku"
          variant="outlined"
          type="number"
          inputProps={{ maxLength: 10 }}
          fullWidth
          error={formik.touched.whatsApp && !!formik.errors.whatsApp} // Set error prop to true when there's an error
          InputProps={{
            style: {
              borderColor: formik.touched.whatsApp && formik.errors.whatsApp ? "darkred" : "", // Dark red border color when there's an error
            },
          }}
          InputLabelProps={{
            style: {
              color: formik.touched.whatsApp && formik.errors.whatsApp ? "red" : "", // Red label color when focused
            },
          }}
        />
        {formik.touched.whatsApp && formik.errors.whatsApp ? (
          <div style={{ color: "red" }}>{formik.errors.whatsApp}</div>
        ) : null} */}
        {isLoading ?

          <div style={{ border: '1px solid blue', width: '12%', borderRadius: '20px', paddingLeft: '6px' }} className="whitespace-nowrap mx-4"
          >

            <img src="/buttonload3.gif" style={{ height: '35px' }}></img>
          </div>
          :
          <Button type="submit"
            className="whitespace-nowrap mx-4"
            variant="contained"
            color="secondary"
          // onClick={handleRemoveProduct}

          >
            Submit
          </Button>
         

        }
      </form>




      <ToastContainer style={{ marginTop: '50px' }} />
    </div>
  );
}

export default ContactTab;