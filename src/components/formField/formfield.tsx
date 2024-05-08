import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useTheme } from '../../context/themeContext';
import './styles.scss'
import * as Yup from 'yup'


export const FormFieldSection = () => {
    const { setDay, setMonth, setYear, month, year, day } = useTheme();
    return (
        <main>
            <Formik
                initialValues={{ day: day || '', month: month || '', year: year || '' }}
                enableReinitialize
                validationSchema={Yup.object({
                    day: Yup.number()
                        .max(31, 'Must be a valid day')
                        .required('Required'),
                    month: Yup.number()
                        .max(12, 'Must be a valid month')
                        .required('Required'),
                    year: Yup.number()
                        .min(1820, 'Must be in the past')
                        .max(new Date().getFullYear(), `Must be ${new Date().getFullYear()} or less`)
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    const day = parseInt(values.day as string, 10);
                    const month = parseInt(values.month as string, 10);
                    const year = parseInt(values.year as string, 10);

                    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
                        setDay(day);
                        setMonth(month);
                        setYear(year);
                    }

                    setTimeout(() => {
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ handleSubmit, errors, touched }) => (
                    <Form className="row g-3 p-0" onFocus={handleSubmit}>
                        <div className="d-flex flex-column col">
                            <label htmlFor="day" className='regular text-Smokey-grey-200'>Day</label>
                            <Field type="text" name="day" id="day" className={`form-control p-3 ${errors.day && touched.day ? 'border-red' : ''}`} />
                            <ErrorMessage name="day" component="div" className="error-message" />
                        </div>
                        <div className="d-flex flex-column col">
                            <label htmlFor="month" className='regular text-Smokey-grey-200'>Month</label>
                            <Field type="text" name="month" id="month" className={`form-control p-3 ${errors.month && touched.month ? 'border-red' : ''}`} />
                            <ErrorMessage name="month" component="div" className="error-message" />
                        </div>
                        <div className="d-flex flex-column col">
                            <label htmlFor="year" className='regular text-Smokey-grey-200'>Year</label>
                            <Field type="text" name="year" id="year" className={`form-control p-3 ${errors.year && touched.year ? 'border-red' : ''}`} />
                            <ErrorMessage name="year" component="small" className="error-message" />
                        </div>
                    </Form>
                )}
            </Formik>
        </main>
    )
}