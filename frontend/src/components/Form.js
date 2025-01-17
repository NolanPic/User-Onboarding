import React from 'react';
import { withFormik, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Form = props => {
    const {
        touched,
        errors,
        handleSubmit,
        isSubmitting
    } = props;

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <Field type="text" name="name" />
            </label>

            {touched.name && errors.name && <p className="error">{errors.name}</p>}

            <label>
                Email:
                <Field type="email" name="email" />
            </label>

            {touched.email && errors.email && <p className="error">{errors.email}</p>}

            <label>
                Password:
                <Field type="password" name="password" />
            </label>

            {touched.password && errors.password && <p className="error">{errors.password}</p>}

            <label>
                I agree to the terms and conditions
                <Field type="checkbox" name="termsAccepted" />
            </label>

            {touched.termsAccepted && errors.termsAccepted && <p className="error">Please accept the terms and conditions</p>}

            <button type="submit" disabled={isSubmitting}>Submit</button>
        </form>
    );
};

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        password: '',
        termsAccepted: false
    }),

    validationSchema: ({ checkIfEmailIsAvailable }) => { // props can be accepted by validationSchema by turning it into a function vs object
        return Yup.object().shape({
            name: Yup.string()
                .min(2, 'Too short')
                .max(40, 'Too long')
                .required(),
            email: Yup.string()
                .email()
                .test('email-available', 'This email already exists', val => checkIfEmailIsAvailable(val))
                .required(),
            password: Yup.string()
                .min(12, 'Password is too short'),
            termsAccepted: Yup.boolean()
                .oneOf([true])
                .required()
         });
    },

    handleSubmit: (values, { setSubmitting, resetForm, props }) => {
        setSubmitting(true);
        console.log('values', values);
        axios.post('https://reqres.in/api/users', values)
            .then(res => {
                console.log('res', res);
                props.addUser(res.data);
                resetForm();
                setSubmitting(false);
            })
            .catch(err => console.warn(err));
    }
})(Form);