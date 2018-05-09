import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ribbon = styled.div`
  width:100%;
  padding: 10px;
  background: grey;
`;

const NavItem = styled.span`
  font-family: Helvetica;
  padding: 10px;
  background: rgba(0,0,0,0.5);
  margin: 10px;
  color: white;
`;

class Navbar extends React.Component {
  render() {
    return(
      <div>
        <Ribbon>
          <NavItem><Link to='/'>Profile</Link></NavItem>
          <NavItem><Link to='/recent'>Recent Activities</Link></NavItem>
          <NavItem><Link to='/repos'>All Repositories</Link></NavItem>
          <NavItem><Link to='/members'>Members</Link></NavItem>
        </Ribbon>
      </div>
    )
  }
}

export default Navbar;
