import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../../models/contact.class';


const ContactForm = ({add, length}) => {

    const nameRef = useRef('');
    const lastNameRef = useRef('');
    const conectedRef = useRef(false);

    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastNameRef.current.value,
            Boolean(conectedRef.current.value) /* Convertimos el valor devuelto por el formulario a boolean */
        );
        add(newContact);
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg m-3' required autoFocus placeholder='Contact Name'/>
                <input ref={lastNameRef} id='inputLastName' type='text' className='form-control form-control-lg m-3' required placeholder='Contact LastName'/>
                <select className='form-control form-control-lg m-3' ref={conectedRef} defaultValue={false} id='selectState'>
                    {/* NOTA: Un formulario siempre devuelve cadenas asi que debemos convertirlo a boolean, la cadena vacia es la unica que equivale a false */}
                    <option value={''}>    
                        No Conectado
                    </option>
                    <option value={true}>
                        Conectado
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-3'>
                    {length > 0 ? 'Add New Contact' : 'Create your First Contact'}
                </button>
            </div>
        </form>
    );
}
ContactForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default ContactForm

