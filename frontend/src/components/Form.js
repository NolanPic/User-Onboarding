import React from 'react';
import { withFormik, Field } from 'formik';
import * as Yup from 'yup';

const Form = props => {
    const {
        values,
        touched,
        errors,
        handleSubmit
    } = props;

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <Field type="text" name="name" />
            </label>

            <label>
                Email:
                <Field type="email" name="email" />
            </label>

            <label>
                Password:
                <Field type="password" name="password" />
            </label>

            <label>
                I agree to the terms and conditions
                <Field type="checkbox" name="termsAccepted" />
            </label>

            <button type="submit">Submit</button>
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

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too short')
            .max(40, 'Too long')
            .required(),
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string(),
        termsAccepted: Yup.boolean()
            .oneOf([true])
            .required()
    }),

    handleSubmit: (values, { setSubmitting }) => {
        console.log('values', values);
    }
})(Form);