import React, {useState} from 'react';
import Counter from './components/counter';
import GreenButton from './components/green-button';
import ChangeParagraph from './components/change-paragraph';
import Avatar from './components/avatar';
import ContactHeader from './components/contact-header';
import SearchContact from './components/search-bar';
import searchIcon from './imgs/search.png'

function App() {

  let contacts = [
    {
      img: `https://randomuser.me/api/portraits/men/1.jpg`,
      name: "pepe"
    },
    {
      img: `https://randomuser.me/api/portraits/women/2.jpg`,
      name: "carla"
    },
    {
      img: `https://randomuser.me/api/portraits/men/3.jpg`,
      name: "andres"
    },
    {
      img: `https://randomuser.me/api/portraits/women/4.jpg`,
      name: "andrea"
    },
    {
      img: `https://randomuser.me/api/portraits/men/5.jpg`,
      name: "victor"
    },
    {
      img: `https://randomuser.me/api/portraits/men/6.jpg`,
      name: "jose"
    },


  ];

  // .charAt(0).toUpperCase()+contact.name.slice(1)

  const contactsMap = contacts.map((contact, i) => {
    return <Avatar key={i} name={contact.name} img={contact.img}></Avatar>
  })

  
  let [actualContacts, updateContacts] = useState(contactsMap)
  const handleChange = e => {
    const filteredContacts = contacts.filter((contact, i) => contact.name.startsWith(e.target.value))
    updateContacts(filteredContacts);
  }

  return (
    <div>
      <ContactHeader></ContactHeader>
      {/* <SearchContact></SearchContact> */}
      <div className="search__container">
        <img className="search__contact" src={searchIcon}></img>
        <input onChange={handleChange} name="search-input" className="search__input" type="text" placeholder="Search for a contact..."/>
      </div>
      {/* <Counter></Counter>
      <GreenButton></GreenButton>
      <ChangeParagraph></ChangeParagraph> */}
      {contactsMap}
    </div>
  );
}

export default App;
