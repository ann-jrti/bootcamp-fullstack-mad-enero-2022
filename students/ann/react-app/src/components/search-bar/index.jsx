import './style.css'
import searchIcon from '../../imgs/search.png'
import React, {useState} from 'react'
import Avatar from '../avatar';

function SearchContact(props) {

  // let [actualContacts, updateContacts] = useState(props.contact)

  // const handleChange = e => {
  //   const filteredContacts = contacts.filter((contact, i) => {
  //     if (contact.name.startsWith(e.target.value)) {
  //       return <Avatar key={i} name={contact.name} img={contact.img}></Avatar>
  //     }
  //   })
  //   updateContacts(filteredContacts)
  // }

  return(
    <div className="search__container">
      <img className="search__contact" src={searchIcon}></img>
      <input name="search-input" className="search__input" type="text" placeholder="Search for a contact..."/>
    </div>
  )
}

export default SearchContact;