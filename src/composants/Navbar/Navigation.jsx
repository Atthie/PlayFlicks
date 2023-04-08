import React from 'react';
import { NavItem, Navbar,Icon } from 'react-materialize';
import './style.css'
function MyComponent() {
  return (
    <Navbar
    alignLinks="right"
    className='nav'
    brand={
      <a href="#" className='logo'>
        <Icon className="large material-icons">play_arrow</Icon>
       <h6>PlayFlicks</h6> 
      </a>
    }
    id="mobile-nav"
    menuIcon={<Icon style={{fontSize:'40px'}}>menu</Icon>}
    options={{
      draggable: true,
      edge: 'right',
      inDuration: 250,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 200,
      preventScrolling: true,
    }}
  >
    <NavItem to='/'className='un' style={{fontFamily:'Alegreya',fontSize:'20px'}} href="#">Acceuil</NavItem>
    <NavItem className='deux'style={{fontFamily:'Alegreya',fontSize:'20px'}} href="#">Film</NavItem>
    <NavItem className='liens trois' style={{fontFamily:'Alegreya',fontSize:'20px'}} href="#">Series</NavItem>
  </Navbar>
  
  );
}

export default MyComponent;
