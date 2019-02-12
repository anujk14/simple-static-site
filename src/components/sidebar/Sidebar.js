import React from 'react';
import styled from 'styled-components';
import { BLACK, WHITE } from '../../utils/colorConstants';

const ColouredDiv = styled.div`
  position: absolute;
  color: ${WHITE};
  background-color: ${BLACK};
  height: 100%;
  width: 10%;
`

class Sidebar extends React.Component {
  render() {
    return (
      <ColouredDiv>
      </ColouredDiv>
    )
  }
}

export default Sidebar;
