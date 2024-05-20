import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useId } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
const initialValue = {
  name: "",
  number: "",
};

const Validation = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be min 3 symbols")
    .max(50, "Must be no more then 50 symbols")
    .required("Required field"),
  number: Yup.string()
    .min(2, "Must be min 2 symbols")
    .max(50, "Must be no more then 50 symbols")
    .required("Required field"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={Validation}
      onSubmit={(values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <Form className={css["contact-form"]}>
        <label htmlFor={nameId}>Name</label>
        <Field
          className={css["contact-inputs"]}
          type="text"
          name="name"
          id={nameId}
        />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberId}>Number</label>
        <Field
          className={css["contact-inputs"]}
          type="phone"
          name="number"
          id={numberId}
        />
        <ErrorMessage name="number" component="span" />

        <button className={css["add-btn"]} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
