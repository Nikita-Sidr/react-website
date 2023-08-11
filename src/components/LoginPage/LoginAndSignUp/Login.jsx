import React, { useEffect, useRef, useState } from "react"
import { Formik } from 'formik'
import * as yup from 'yup'
import { login } from "../../../redux/auth-reducer";
import { connect } from "react-redux"
import { redirect } from "react-router-dom";


const Login = (props) => {

    const [isValidated, setIsValidated] = useState(false);

    useEffect(() => {
        document.addEventListener('keyup', detectKeyDown, true);
        return () => {
            document.removeEventListener('keyup', detectKeyDown, true);
        };
    }, [isValidated]);

    const formikRef = useRef()

    const detectKeyDown = (e) => {
        if (e.key === 'Enter') {
            setIsValidated(true)
            formikRef.current.handleSubmit()
        }
    }

    const validationSchema = yup.object().shape({
        login: yup.string().required('Обязательное поле').test('is-login', 'Логин должен быть на латинице. C или без цифр. Он не можеть быть меньше 2 символов или больше 20', (value) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)),
        password: yup.string().required('Обязательное поле').test('is-login', 'Пароль не можеть быть меньше 2 символов или больше 40', (value) => /^[a-zA-Z\d]{2,40}$/.test(value)),
    })


    if (props.isAuth) {
        redirect('/profile')
    }
    return (
        <div>
            <Formik
                innerRef={formikRef}
                initialValues={{
                    login: '',
                    password: ''
                }}
                validateOnBlur
                onSubmit={(values, { setSubmitting }) => {
                    setIsValidated(true)
                    validationSchema.validate(values)
                        .then(() => {
                            props.login(values.login, values.password)
                            setSubmitting(false)
                        })
                        .catch(() => { 
                            setSubmitting(false)
                        })
                }}
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, isValidated }) => (
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
                        <div>
                            <p>
                                <label htmlFor={`checkbox`}></label><br />
                                <input
                                    type={'checkbox'}
                                    name={'checkbox'}
                                    value={values.isRemembered}
                                />remember me
                            </p>
                        </div>
                        <button
                            disabled={!isValid && !dirty && !isValidated}
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


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login)