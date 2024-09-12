import React from 'react';
import { ContactList, Group, LogoTeam } from './ContactsList.styled';
import ContactComponent from 'components/ContactComponent/ContactComponent';
import { team } from 'data/team';
import TeamSvg from 'SvgComponents/TeamSvg/TeamSvg';

function firstGroup(team) {
  const firstGroup = [];
  for (let i = 0; i < Math.ceil(team.length / 2); i++) {
    firstGroup.push(team[i]);
  }
  return firstGroup;
}
function secondGroup(team) {
  const secondGroup = [];
  for (let i = Math.ceil(team.length / 2); i < team.length; i++) {
    secondGroup.push(team[i]);
  }
  return secondGroup;
}

export default function ContactsList() {
  return (
    <ContactList>
      <Group className="first">
        {firstGroup(team).map(({ id, name, spec, link }) => {
          return (
            <ContactComponent key={id} nameDev={name} spec={spec} link={link} />
          );
        })}
      </Group>
      <LogoTeam>
        <TeamSvg />
      </LogoTeam>
      <Group className="second">
        {secondGroup(team).map(({ id, name, spec, link }) => {
          return (
            <ContactComponent key={id} nameDev={name} spec={spec} link={link} />
          );
        })}
      </Group>
    </ContactList>
  );
}
