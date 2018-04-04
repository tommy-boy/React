import React from 'react';
import Link from 'next/link';
/* import { connect } from 'react-redux';
import { bindActionCreators } from 'redux' */
import PropTypes from 'prop-types';
import LeftNav from '~/LeftNav';
import RightNav from '~/RightNav';
import Filters from '~/Filters';
/* import toggleLeftNav from '!/toggleLeftNav';
import toggleRightNav from '!/toggleRightNav'; */
import { createMuiTheme, MuiThemeProvider, withStyles } from 'material-ui/styles';
import Logo from '../../static/img/DAS-Crosshair.png';
import { ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { AppBar, IconButton } from 'material-ui';
import Badge from 'material-ui/Badge';
import MenuIcon from 'material-ui-icons/Menu';
import {MoreVert, NotificationsNone} from 'material-ui-icons';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: none;

    @media (min-width: 600px) and (max-width: 1201px) {
        display: block;               
        width: 100%; 
        margin: 0 auto;
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
    menu:{   
      top: '6px',    
      padding: 0,
      overflow:'hidden',
      zIndex: 0,   
    },
    activeItem: {
      color:'rgb(255,255,255'
    },
    menuItemStyle:{
      padding: 0,
      width: drawerWidth,  
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
      zIndex: 10000  
    }, 
    title: {         
      width: '33%',   
      marginTop: '12px',
      textAlign: 'center',   
      verticalAlign: 'middle',    
    },   
    ico: {     
      padding: 0,
    },
    button: {
      boxShadow: '0',
      borderRadius: 0,
      padding: 0,
      height: '52px !important',
    },
    tooltip: {
      fontSize: '12px',       
      borderRadius: '2px',    
    }
};

const account = {
    name: 'Fresh fruits package',
    owner: 'Fruit Loops'
};

export default class TabletNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rightDrawer: false,
            leftDrawer: false,                    
        };           
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
                        title={<img src={Logo} alt="DASLogo" width="40" height="40" />}
                        titleStyle={styles.title}
                        iconStyleLeft={{width:'33%'}}
                        iconStyleRight={{width:'33%'}}
                        onLeftIconButtonTouchTap={this._handleLeftToggle}      
                        iconElementLeft={
                        <IconButton touch={true}
                            onClick={ this._handleLeftToggle }
                            iconStyle={{ fill: 'rgba(77,77,77,0.87)'}}
                        >
                            <MenuIcon />
                        </IconButton>                
                        }
                        iconElementRight={
                        <ToolbarGroup style={{float:'right'}} >  
                            <Badge style={styles.ico}  
                            badgeContent="&nbsp;"  
                            badgeStyle={{backgroundColor:'#dd6000', border:'2px solid #FFFFFF', top: 11, right: '-1px', width: 8, height: 8}}
                            >
                            <IconButton touch={true} style={{textAlign:'right', padding:0}}
                                iconStyle={{ color: 'rgba(77,77,77,0.87)'}}
                                tooltip="Notifications"
                                tooltipStyles={styles.tooltip}
                                tooltipPosition={'bottom-center'}
                                >
                                <NotificationsNone />
                            </IconButton>
                            </Badge>         
                            <IconButton touch={true} style={{float:'right', padding:0}}
                                onClick={ this._handleRightToggle }
                                iconStyle={{ fill: 'rgba(77,77,77,0.87)'}}
                            >
                            <MoreVert />
                            </IconButton>                
                        </ToolbarGroup>             
                        }
                    />
                    <LeftNav leftDrawer={this.state.leftDrawer}
                        handleLeftToggle={this._handleLeftToggle}
                        handleLeftClose={this. _handleLeftClose}                    
                    />                       
                    <RightNav rightDrawer={this.state.rightDrawer}
                        handleRightToggle={this._handleRightToggle}
                        handleRightClose={this. _handleRightClose}  />                                        
                </NavBarWrapper>
                <div style={{position: 'fixed', top: 65, width: '100%', zIndex: 1}}>
                    <Filters />	    
                </div>               
            </Wrapper>
        )
    }
}