import React, {useState, useEffect} from 'react';
import '../../styles/contact.scss';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/form/contactForm';
import { Contact } from '../../models/contact.class';

const ContactListComponent = () => {

    const defaultContact1 = new Contact ('Fulanito', 'de OpenBootcamp', false );
    const defaultContact2 = new Contact ('Menganito', 'de OpenBootcamp', true );
    const defaultContact3 = new Contact ('Sultanito', 'de OpenBootcamp', false );
    

    // Estado del componente
    const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Contact State has been modified');
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log('ContactList component is going to unmount...')
        }
    }, [contacts])

    function conectedContact(contact){
        console.log('change state of this contact', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].conected = !contacts[index].conected;
        setContacts(tempContacts);
    }

    function removeContact(contact){
        console.log('Remove this contact:', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index,1);
        setContacts(tempContacts);
    }

    function addContact(contact){
        console.log('Add this contact:', contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Last Name</th>
                        <th scope='col'>State</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { contacts.map((contact, index) => {
                        return (
                                <ContactComponent 
                                    key={index} 
                                    contact={contact}
                                    connect={conectedContact}
                                    remove={removeContact}
                                >
                                </ContactComponent>
                            )
                        }
                    )}
                </tbody>
            </table>
        )
    }

    let contactsTable;

    if(contacts.length > 0){
        contactsTable = <Table></Table>
    }else{
        contactsTable = (
        <div>
            <h3> There are no contacts to show</h3>
            <h4>Please, create one</h4>
        </div>
        )
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
    <div className='m-3'>
        <div className='col-12 d-flex justify-content-center align-items-center'>
            <div className='card'>
                {/* Card Header (title) */}
                <div className='card-header p-3'>
                    <h5>
                        Your Contacts:
                    </h5>
                </div>
                {/* Card Body (content) */}
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                    {/* TODO: Add Loading Spinner */}
                    {loading ? (<p style={loadingStyle}>Loading Contacts...</p>) : contactsTable}
                </div>
            </div>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
            <ContactForm add={addContact} length={contacts.length}></ContactForm>
        </div>
    </div>
    );
};

export default ContactListComponent;