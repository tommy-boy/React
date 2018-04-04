import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Popover from 'material-ui/Popover';
import {Menu, MenuItem, RaisedButton } from 'material-ui';
import {List, ListItem} from "material-ui/List";
import {ArrowDropDown, SupervisorAccount, InfoOutline, Grade, ContentCopy, ContentPaste} from 'material-ui-icons';
import Avatar from 'material-ui/Avatar';
import styled from 'styled-components';

const account = {
  name: 'Fresh fruits package',
  owner: 'Fruit Loops'
};

const Dropdown = styled.div` 
  display: inline-block;  
  vertical-align: middle;

  @media (max-width: 1200px) { 
    display: none;                 
  } 
`;

const styles = {
  root: {
    display:'flex',
    flexWrap: 'nowrap',
    padding: 0,
    justifyContent: 'space-around',
  },
  paper: {   
    margin: '56px 32px 16px -18px',
  },
  menu: {            
    paddingBottom: '0px',
    overflow: 'hidden',
  },
  menuItemStyle:{
    padding: '0 12px',
  }, 
  button: {
    boxShadow: '0',
    borderRadius: 0,
    padding: 0,
    height: '56px !important',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

export default class DropdownMenu extends React.Component {

  constructor(props) {   
    super(props);
    this.state = {      
      open: false,
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'top',
      },
      targetOrigin: {
        horizontal: 'left',
        vertical: 'top',
      },
    };
  }
  
  handleTouchTap = (event) => {   
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {

    return (       
    <Dropdown>
      <IconButton onClick={this.handleTouchTap} touch={true} iconStyle={{color:'#4D4D4D'}} tooltipPosition="top-left">         
        <ArrowDropDown />
      </IconButton>     
      <Popover style={styles.paper}            
        open={this.state.open}
        anchorEl={this.state.anchorEl} 
        anchorOrigin={this.state.anchorOrigin}
        targetOrigin={this.state.targetOrigin}        
        canAutoPosition={true}
        autoCloseWhenOffScreen={true}
        onRequestClose={this.handleRequestClose}               
      > 
        <Menu style={{padding:0,height:80,overflow:'hidden'}}>                  
          <MenuItem><Avatar src="../../static/img/uxceo-128.jpg" style={{position:'relative', top:'18px'}} size={50} /></MenuItem>          
          <ListItem style={{left:67,bottom:67}} 
            primaryText={account.name}            
          />
          <ListItem style={{left:67,bottom:97}}
            primaryText={account.owner}            
          />
          <MenuItem style={{color:'#dd6000',left:67,bottom:127}}             
            primaryText="Settings"
            //containerElement={<Link href="/settings"></Link>}             
          />
        </Menu>
        <List style={styles.menu} >
          <Divider />
          <ListItem style={styles.menuItemStyle}
            primaryText="User Management"            
            leftIcon={<SupervisorAccount/>}           
            nestedItems={[                           
              <ListItem key={1} primaryText="Grid lines"
                  leftIcon={<Grade />}
                  insetChildren={true} 
              />,                            
              <ListItem key={2} primaryText="Copy"
                  leftIcon={<ContentCopy />}
                  insetChildren={true} />,                            
              <ListItem key={3} primaryText="Paste"
                  leftIcon={<ContentPaste />}
                  insetChildren={true} />,                            
            ]}
          />
          <Divider />
          <ListItem style={styles.menuItemStyle}
            primaryText="Help"
            leftIcon={<InfoOutline/>}           
            nestedItems={[                           
              <ListItem key={1} primaryText="More" insetChildren={true} />,                            
              <ListItem key={2} primaryText="Less" insetChildren={true} />,                            
              <ListItem key={3} primaryText="Page breaks" insetChildren={true} />,                            
            ]} 
          />     
        </List>   
        <RaisedButton style={styles.button}
            backgroundColor='rgba(216,216,216,0.37)'
            label="Log Out" 
            labelStyle={{color:'rgba(0,0,0,1)', lineHeight:'56px', float:'right'}}
            fullWidth={true}
          />       
      </Popover>
    </Dropdown>              
    );
  }
}



