import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import LeftNav from '~/LeftNav';
import RightNav from '~/RightNav';
import Filters from '~/Filters';
import MobileFooter from '~/MobileFooter'
import { createMuiTheme, MuiThemeProvider, withStyles } from 'material-ui/styles';
import { AppBar, IconButton, IconMenu, Menu, MenuItem } from 'material-ui';
import { Drawer } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import NavigationClose from 'material-ui-icons/Close';
import {SupervisorAccount, Timelapse, Sms, AssignmentInd} from 'material-ui-icons';
import Avatar from 'material-ui/Avatar';
import styled from 'styled-components';

const Wrapper = styled.div`
display: none;

@media (max-width: 599px){
    display: block;               
    width: 100%; 
    padding: 0px;
}
`;

const NavBarWrapper = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    border-bottom: 1px solid #ededed;
    z-index: 1000; 
`;

const drawerWidth = 250;

const styles = {
    root: {
      padding: 0,   
    },   
    activeItem: {
      color:'rgb(255,255,255'
    },    
    appBar: {      
      height: 64,
      color: 'rgba(0, 0, 0, 0.87)',
      backgroundColor:'#FFFFFF',
      boxShadow:'0 0 2px 0 rgba(0,0,0,.4)',
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,    
    }, 
};

const account = {
name: 'Fresh fruits package',
owner: 'Fruit Loops'
};

export default class MobileNavbar extends React.Component {

    constructor(props) {
      super(props); 
      this.state = {        
        leftDrawer: false,
        rightDrawer: false,                            
    };
      this._handleLeftToggle = this._handleLeftToggle.bind(this)
      this._handleRightToggle = this._handleRightToggle.bind(this)           
    }

    _handleLeftToggle = () => this.setState({leftDrawer: !this.state.leftDrawer, rightDrawer: false});
    _handleLeftClose = () => this.setState({leftDrawer: false});
    _handleRightToggle = () => this.setState({rightDrawer: !this.state.rightDrawer, leftDrawer: false});
    _handleRightClose = () => this.setState({rightDrawer: false});

    render() {      
        return (
            <Wrapper>
                <NavBarWrapper>                
                    <AppBar style={styles.appBar}              
                        title="HOME"
                        titleStyle={{color:'#4D4D4D', paddingLeft:20}}           
                        onLeftIconButtonTouchTap={ this._handleLeftToggle }
                        iconElementLeft={
                            <IconButton touch={true}
                                onClick={ this._handleLeftToggle }
                                iconStyle={{ fill: 'rgba(77,77,77,0.87)'}}
                            >
                            <MenuIcon />
                            </IconButton>                
                        }         
                    />
                    <LeftNav leftDrawer={this.state.leftDrawer}
                    handleLeftToggle={this._handleLeftToggle}
                    handleLeftClose={this._handleLeftClose}                    
                    />
                    <RightNav rightDrawer={this.state.rightDrawer}                    
                        handleRightClose={this._handleRightClose}  />                                                                                                      
                    <MobileFooter handleRightToggle={this._handleRightToggle}
                    />
                </NavBarWrapper>
                <div style={{position:'fixed', top: 65, width: '100%', zIndex: 1}}>
                    <Filters />
                </div>	                   
            </Wrapper> 
        )
    }
}
