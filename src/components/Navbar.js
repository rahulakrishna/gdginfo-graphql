import React from 'react';
import styled from 'styled-components';

const Ribbon = styled.div`
  width:100%;
  padding: 10px;
  background: grey;
`;

const NavItem = styled.span`
  font-family: Helvetica;
`;

class Navbar extends React.Component {
  render() {
    return(
      <div>
        <Ribbon>
          <NavItem>Profile</NavItem>
          <NavItem>Recent Activities</NavItem>
          <NavItem>All Repositories</NavItem>
          <NavItem>Members</NavItem>
        </Ribbon>
      </div>
    )
  }
}

export default Navbar;
