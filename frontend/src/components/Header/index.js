import React, {useState} from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from 'reactstrap';
import { Link,useHistory } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);
  const url = window.location.href;
  console.log(url);

  if(url === "http://localhost:3000/") {
    console.log('É essa')
  }
  const toggle = () => {
    setOpen(!open);
  }

  const history = useHistory();
    function handleLogout () {
        localStorage.clear();
        history.push('/');

    }
  return (
    <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={ Link } to={'/'}>Filmes</NavbarBrand>
      <NavbarToggler onClick={ toggle } />
      <Collapse isOpen={open} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            { url === "http://localhost:3000/" || url === "http://localhost:3000/login" || url === "http://localhost:3000/register"?<NavLink tag={Link} to='/login'>Login</NavLink>: <NavLink tag={Link} onClick={handleLogout}>Logout</NavLink>}
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  )
}

export default Header;