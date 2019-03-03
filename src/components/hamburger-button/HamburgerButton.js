import React from 'react';
import styled from 'styled-components';
import { WHITE, ELECTRIC_BLUE } from '../../utils/colorConstants';

const CombinedButton = styled.div`
  display: block;
  font-family: Cabin, sans-serif;
  font-size: 1em;
  color: ${WHITE};
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: ${ELECTRIC_BLUE};
  }
`

const Hamburger = styled.div`
  display: block;
`

// FIXME: Change use of props to a cleaner, scalable way
const Bar = styled.div`
  position: relative;
  height: 0.25em;
  width: 1.875em;
  margin-top: 2px;
  background: linear-gradient(to right, ${props => props.flipped ? WHITE : ELECTRIC_BLUE} 50%, ${props => props.flipped ? ELECTRIC_BLUE : WHITE } 50%);
  background-size: 200% 100%;
  background-position: ${props => props.flipped ? "left bottom" : "right bottom"} ;
  transition: all 0.8s ease;

  ${CombinedButton}:hover & {
    background-position: ${props => props.flipped ? "right bottom" : "left bottom"};
  }
`

class HamburgerButton extends React.Component {
  render() {
    return (
      <CombinedButton>
        Menu
        <Hamburger>
          <Bar></Bar>
          <Bar></Bar>
          <Bar flipped></Bar>
        </Hamburger>
      </CombinedButton>
    )
  }
}

export default HamburgerButton;
