import React from "react";
import { Formik } from 'formik'
import * as yup from 'yup'
import { NavLink } from "react-router-dom";

const validationSchema = yup.object().shape({
    name: yup.string().required('Обязательное поле'),
    secondName: yup.string().required('Обязательное поле'),
    login: yup.string().required('Обязательное поле'),
    password: yup.string().required('Обязательное поле'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательное поле'),
    email: yup.string().email('Введите правильный емеил').required('Обязательное поле'),
    confirmEmail: yup.string().email('Введите правильный емеил').oneOf([yup.ref('email')], 'Емейлы не совпадают').required('Обязательное поле'),
})


const SignUp = () => {


    return (

        <div>
            <div>Have an account?</div>
            <div>
                {<NavLink to={'/login'}>login</NavLink>}
            </div>
            <h1>Sign up</h1>
            <Formik
                initialValues={{
                    name: '',
                    secondName: '',
                    login: '',
                    password: '',
                    confirmPassword: '',
                    email: '',
                    confirmEmail: '',
                }}
                validateOnBlur
                onSubmit={(values) => { console.log(values) }}
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div>
                        <p>
                            <label htmlFor={`name`}>Name</label><br />
                            <input
                                type={`text`}
                                name={`name`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                        </p>
                        {touched.name && errors.name && <p>{errors.name}</p>}
                        <p>
                            <label htmlFor={`secondName`}>Second name</label><br />
                            <input
                                type={`text`}
                                name={`secondName`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.secondName}
                            />
                        </p>
                        {touched.secondName && errors.secondName && <p>{errors.secondName}</p>}
                        <p>
                            <label htmlFor={`login`}>Login</label><br />
                            <input
                                type={`text`}
                                name={`login`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.login}
                            />
                        </p>
                        {touched.login && errors.login && <p>{errors.login}</p>}
                        <p>
                            <label htmlFor={`email`}>email</label><br />
                            <input
                                type={`text`}
                                name={`email`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </p>
                        {touched.email && errors.email && <p>{errors.email}</p>}
                        <p>
                            <label htmlFor={`confirmEmail`}>Confirm email</label><br />
                            <input
                                type={`text`}
                                name={`confirmEmail`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmEmail}
                            />
                        </p>
                        {touched.confirmEmail && errors.confirmEmail && <p>{errors.confirmEmail}</p>}
                        <p>
                            <label htmlFor={`password`}>password</label><br />
                            <input
                                type={`password`}
                                name={`password`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </p>
                        {touched.password && errors.password && <p>{errors.password}</p>}
                        <p>
                            <label htmlFor={`confirmPassword`}>Confirm password</label><br />
                            <input
                                type={`password`}
                                name={`confirmPassword`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                            />
                        </p>
                        {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                        <button
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type={`submit`}
                        >Submit</button>
                    </div>
                )}

            </Formik>
        </div>
    )
}

export default SignUp