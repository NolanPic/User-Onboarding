import React from 'react';
import { withFormik, Field } from 'formik';

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

    handleSubmit: (values, { setSubmitting }) => {
        console.log('values', values);
    }
})(Form);