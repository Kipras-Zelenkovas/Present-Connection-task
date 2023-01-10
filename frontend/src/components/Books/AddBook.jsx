import { Field, Form, Formik } from "formik";
import { minLength, minOverviewLength } from "../../validation/validate";
import { addBook } from "../API/books";

export const AddBook = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <Formik
                initialValues={{
                    author: "",
                    name: "",
                    overview: "",
                }}
                onSubmit={(values) => {
                    addBook(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="border-2 p-2 bg-neutral-400 border-black h-fit w-80">
                        <Field
                            type="text"
                            name="author"
                            placeholder="J.K.Rowling"
                            validate={minLength}
                            className="p-2 m-4 block"
                        />
                        {errors.author && touched.author ? (
                            <div className="pl-4 text-red-600">
                                {errors.author}
                            </div>
                        ) : null}
                        <Field
                            type="text"
                            name="name"
                            placeholder="Harry Potter"
                            validate={minLength}
                            className="p-2 m-4 block"
                        />
                        {errors.name && touched.name ? (
                            <div className="pl-4 text-red-600">
                                {errors.name}
                            </div>
                        ) : null}
                        <Field
                            type="text"
                            name="overview"
                            placeholder="Some text..."
                            validate={minOverviewLength}
                            className="p-2 m-4 block"
                            as="textarea"
                        />
                        {errors.overview && touched.overview ? (
                            <div className="pl-4 text-red-600">
                                {errors.overview}
                            </div>
                        ) : null}
                        <div className="flex justify-end pr-4">
                            <button
                                type="submit"
                                className="border-2 border-black p-1 font-medium"
                            >
                                Add book
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
