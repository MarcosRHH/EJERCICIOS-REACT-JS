import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'
import '../../styles/contact.scss'

export function ContactComponent({contact, connect, remove}) {

    useEffect(() => {
        console.log('Created Contact')
        return () => {
            console.log(`Contact: ${contact.name} is going to unmount`);
        }
    }, [contact]);


    /**
     * Function that returns a Badge
     * depending on the state of the contact
     */
    console.log(contact)
    function contactConectedBadge(){
        if (contact.conected === true) {
            return(
            <h6 className='mb-0'>
                <span className='badge bg-success'>
                    Online
                </span>
            </h6>)
        }else {
            return(
            <h6 className='mb-0'>
                <span className='badge bg-danger'>
                    Offline
                </span>
            </h6>)
        }
    }

    function contactConectedIcon(){
        if(contact.conected === true){
            return (<i onClick={() => connect(contact)} className='bi-toggle-on contact-action' style={{color: 'blue'}}></i>)
        }else{
            return (<i onClick={() => connect(contact)} className='bi-toggle-off contact-action' style={{color: 'grey'}}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <td>
                <span className='ms-2'>{contact.name}</span>
            </td>
            <td className='align-middle'>
                <span>{contact.last_name}</span>
            </td>
            <td className='align-middle'>
                {/* Execution of function to return badge element */}
                {contactConectedBadge()}
            </td>
            <td className='align-middle'>
                {contactConectedIcon()}
                <i className='bi-trash contact-action' style={{color: 'tomato'}} onClick={() => remove(contact)}></i>
            </td>
        </tr>
    );
};


ContactComponent.propTypes  = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    connect: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default ContactComponent