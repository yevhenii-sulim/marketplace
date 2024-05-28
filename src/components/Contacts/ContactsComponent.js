import React from 'react';
import { ContactList } from './ContactsComponent.styled';
import ContactComponent from 'components/ContactComponent/ContactComponent';
import { team } from 'data/team';

export default function ContactsComponent() {
  return (
    <ContactList>
      {team.map(({ id, name, spec, link }) => {
        return (
          <ContactComponent key={id} nameDev={name} spec={spec} link={link} />
        );
      })}
    </ContactList>
  );
}
