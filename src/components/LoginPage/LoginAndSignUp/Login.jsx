import React from "react";
import { Formik } from 'formik'
import * as yup from 'yup'

const Login = () => {

    const validationSchema = yup.object().shape({
        login: yup.string().required('Обязательное поле').test('is-login', 'Логин должен быть на латинице. C или без цифр. Он не можеть быть меньше 2 символов или больше 20', (value) => /^[a-zA-Z\d]{2,20}$/.test(value)),
        password: yup.string().required('Обязательное поле').test('is-login', 'Пароль не можеть быть меньше 2 символов или больше 20', (value) => /^[a-zA-Z\d]{2,20}$/.test(value)),
    })

    return (
        <div>
            <Formik
                initialValues={{
                    login: '',
                    password: '',
                }}
                validateOnBlur
                onSubmit={(values) => { console.log(values) }}
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div>
                        <p>
                            <label htmlFor={`login`}>login</label><br />
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
                        <button
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type={`submit`}
                        >
                            Log in
                        </button>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default Login