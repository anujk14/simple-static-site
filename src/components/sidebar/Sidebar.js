import React from 'react';
import styled from 'styled-components';
import { BLACK, WHITE } from '../../utils/colorConstants';
import HamburgerButton from "../hamburger-button/HamburgerButton";

const ColouredDiv = styled.div`
  position: absolute;
  color: ${WHITE};
  background-color: ${BLACK};
  height: 100%;
  width: 7em;
`

class Sidebar extends React.Component {
  render() {
    return (
      <ColouredDiv>
        <HamburgerButton></HamburgerButton>
      </ColouredDiv>
    )
  }
}

export default Sidebar;
