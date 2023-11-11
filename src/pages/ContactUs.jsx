import React from 'react'
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';

import style from './contactus.module.css'
import { Col, Container, Row } from 'react-bootstrap';


const ContactUs = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" })
    },
    validationSchema: yup.object({
      name: yup.string().min(6, "name must have at least 6 characters").required(),
      email: yup.string().email().required(),
      message: yup.string().min(10, "message must have at least 10 characters").required()
    })
  })

  const renderNameError = formik.touched.name && formik.errors.name && <span style={{ color: "red" }}>{formik.errors.name}</span>
  const renderEmailError = formik.touched.email && formik.errors.email && <span style={{ color: "red" }}>{formik.errors.email}</span>
  const renderMessageError = formik.touched.message && formik.errors.message && <span style={{ color: "red" }}>{formik.errors.message}</span>

  return (
    <section style={{background:"#388470"}} className={style.contactSection}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={style.formBody}>
              <div>
                <h2>Contact Us</h2>
              </div>
              <form action="" onSubmit={formik.handleSubmit}>
                <div>
                  <label htmlFor="name" className={style.names}>Full Name: </label>
                  <input type="text" name='name' id='name' value={formik.values.name} onChange={formik.handleChange} className='form-control'/>
                  {renderNameError}
                </div>

                <div>
                  <label htmlFor="email" className={style.names}>Email: </label>
                  <input type="email" name='email' id='email' value={formik.values.email} onChange={formik.handleChange} className='form-control'/>
                  {renderEmailError}
                </div>

                <div>
                  <label htmlFor="message" className={style.names}>Message: </label>
                  <textarea name="message" id="message" cols="10" rows="4" value={formik.values.message} onChange={formik.handleChange} className='form-control'></textarea>
                  {renderMessageError}
                </div>
                <div>
                  <button type='submit' className='btn btn-primary mt-3'>Submit</button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactUs