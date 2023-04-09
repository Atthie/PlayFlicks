import React from 'react';
import { Button, Icon } from 'react-materialize';
import './style.css'
function RedPlayButton() {
  return (
    <Button className="play" style={{backgroundColor:'#FF0000'}}>
      <Icon className="center" style={{ fontSize: '3rem' }}>play_arrow</Icon>
    </Button>
  );
}

export default RedPlayButton;
