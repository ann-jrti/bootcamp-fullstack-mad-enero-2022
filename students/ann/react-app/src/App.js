import React, {useState} from 'react';
import Counter from './components/counter';
import GreenButton from './components/green-button';
import ChangeParagraph from './components/change-paragraph';
import Avatar from './components/contact-list';
import ContactHeader from './components/contact-header';

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

  const contactsMap = contacts.map( contact => {
    return <Avatar img={contact.img}></Avatar>
  })
  return (
    <div>
      <ContactHeader></ContactHeader>
      {/* <Counter></Counter>
      <GreenButton></GreenButton>
      <ChangeParagraph></ChangeParagraph> */}
      {contactsMap}
    </div>
  );
}

export default App;
