import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useId } from "react";

export default function ContactForm({ HendleSubmit }) {
  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();
  return (
    <>
      <Formik
        initialValues={{ id: "", name: "", number: "" }}
        onSubmit={HendleSubmit}
        validationSchema={FormSchema}
      >
        <Form className={css.container}>
          <div className={css.itemContainer}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field name="name" id={nameFieldId}></Field>
          </div>
          <ErrorMessage name="name" component="span" />
          <div>
            <label htmlFor={numberFieldId}>Namber </label>
            <Field name="number" id={numberFieldId}></Field>
          </div>
          <ErrorMessage name="number" component="span" />

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
