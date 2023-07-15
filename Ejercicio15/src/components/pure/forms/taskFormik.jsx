import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../../models/task.class';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Models
import { LEVELS } from '../../../models/levels.enum';


const TaskFormik = ({add, length}) => {

    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL
    }

    const validationSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(6, 'name too short')
                .max(12, 'name too long')
                .required('name is required'),
            description: Yup.string()
                .max(30, 'description too long')
                .required('description is required'),
        }
    )

    function addTask(values){
        const newTask = new Task(
            values.name,
            values.description,
            false,
            values.level
        );
        add(newTask);
    }

    return (
        <Formik
        initialValues = {initialValues}
        // *** Yup Validation Schema ***
        validationSchema = {validationSchema}
        // ** onSubmit Event
        onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 1000));
            alert(JSON.stringify(values, null, 2));
            addTask(values);
        }}
    >
        {({ values,
                    touched,
                    errors,
                    isSubmitting,
                     }) => (
                        <Form className="d-flex justify-content-center align-items-center" style={{width: '400px'}}>
                            <div className='d-flex flex-column justify-content-center align-middle'>
                                <label htmlFor="name">Name</label>
                                <Field id="name" type="text" name="name" 
                                    className='form-control form-control-lg align-middle mb-4 ' 
                                    placeholder="Task name" />
                                
                                {/* Username Errors */}
                                {
                                    errors.name && touched.name &&
                                    (
                                        <ErrorMessage name="name" component='div'></ErrorMessage>
                                    )
                                }
                                <label htmlFor="description">Description</label>
                                <Field id="description" type="text" name="description"
                                    className='form-control form-control-lg mb-4' 
                                    placeholder="Task description" />
                                {/* Description Errors */}
                                {
                                    errors.description && touched.description &&
                                    (
                                        <ErrorMessage name="description" component='div'></ErrorMessage>
                                    )
                                }
                                <label htmlFor="level">Level</label>
                                <Field className='form-control form-control-lg mb-4' defaultValue={LEVELS.NORMAL}
                                    component="select"
                                    id="level"
                                    name="level"
                                    multiple={false}>
                                        <option value={LEVELS.NORMAL}>Normal</option>
                                        <option value={LEVELS.URGENT}>Urgent</option>
                                        <option value={LEVELS.BLOCKING}>Blocking</option>
                                </Field>
                                <button type='submit' className='btn btn-success btn-lg align-middle mb-4'>
                                    {length > 0 ? 'Add New Task' : 'Create your First Task'}
                                </button>
                                {isSubmitting ? (<p>Creating new task...</p>): null}
                            </div>

                        </Form>
                    )
            }

    </Formik>
    );
}

TaskFormik.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskFormik;
