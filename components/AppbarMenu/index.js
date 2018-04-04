import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Logo from '../../static/img/DAS-Crosshair.png';
import { ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { AppBar, IconButton, IconMenu, Menu, MenuItem } from 'material-ui';
import {ListItem} from "material-ui/List";
import Divider from 'material-ui/Divider';
import { Drawer, Badge, RaisedButton } from 'material-ui';
import {BottomNavigation, BottomNavigationItem, BottomNavigationButton} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications-none';
import Account from 'material-ui/svg-icons/action/supervisor-account';
import Profile from 'material-ui/svg-icons/social/person-outline';
import Timelapse from 'material-ui/svg-icons/image/timelapse';
import Sms from 'material-ui/svg-icons/notification/sms';
import Assignment from 'material-ui/svg-icons/action/assignment-ind';
import ArrowDropRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Info from 'material-ui/svg-icons/action/info-outline';
import avatar from '../static/logo.png';
import Avatar from 'material-ui/Avatar';
import styled from 'styled-components';

const AppBarWrapper = styled.div`
  display: none;

@media (min-width: 600px) and (max-width: 1200px) {
  display: block; 
}
`; 

const MobileAppBarWrapper = styled.div`
  display: none; 

@media (max-width: 599px){
  display: block;
}
`;

const MobileFooterWrapper = styled.div`
display: none;

@media (max-width: 599px) { 
    display: block;        
    width: 100%;       
    position: fixed;
    left:0;
    bottom: 0; 
    z-index: 10000;      
    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
    &:hover {
        box-shadow: 0 0 .24rem gray;
    }
}
`;

const account = {
  name: 'Fresh fruits package',
  owner: 'Fruit Loops'
};

const drawerWidth = 250;

const styles = {
  root: {
    padding: 0,
    display: 'flex',
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
  leftIcon: {
    fill:'rgb(255,255,255)'
  },
  appBar: {     
    display:'-webkit-flex',
    width: '100%',
    height: 64,
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor:'#FFFFFF',
    boxShadow:'0 0 2px 0 rgba(0,0,0,.4)',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,    
  }, 
  title: {         
    width: '33%',   
    marginTop: '12px',
    textAlign: 'center',   
    verticalAlign: 'middle',    
  },
  nav: {
    display:'flex',              
    width: '33%',    
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

export default class AppbarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      open: false,
      leftDrawer: false,
      rightDrawer: false,
    };
    this._handleLeftToggle = this._handleLeftToggle.bind(this)
  }

  _handleLeftToggle = () => this.setState({leftDrawer: !this.state.leftDrawer, rightDrawer: false});
  _handleLeftClose = () => this.setState({leftDrawer: false});
  _handleRightToggle = () => this.setState({rightDrawer: !this.state.rightDrawer, leftDrawer: false});
  _handleRightClose = () => this.setState({rightDrawer: false});

  render() {      
    return ( 
      <div>
      <AppBarWrapper>                
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
            <ToolbarGroup style={{float:'right'}}>  
              <Badge style={styles.ico}  
                  badgeContent={10}      
                  badgeStyle={{backgroundColor:'#dd6000', border:'2px solid #FFFFFF', top: 11, right: '-1px', width: 8, height: 8}}
              >
                <IconButton touch={true} style={{float:'right', textAlign:'right', padding:0}}
                  iconStyle={{ color: 'rgba(77,77,77,0.87)'}}
                  tooltip="Notifications"
                  tooltipStyles={styles.tooltip}
                  tooltipPosition={'bottom-center'}
                  >
                  <NotificationsIcon />
                </IconButton>
              </Badge>         
              <IconButton touch={true} style={{float:'right', padding:0}}
                onClick={ this._handleRightToggle }
                iconStyle={{ fill: 'rgba(77,77,77,0.87)'}}
              >
                <MoreVertIcon />
              </IconButton>                
            </ToolbarGroup>             
          }
        />        
        <Drawer
          docked={true}
          width={drawerWidth} 
          open={this.state.leftDrawer}
          containerStyle={{backgroundColor:'#4D4D4D', overflowX:'hidden', overflowY:'hidden'}}
          overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.24)',opacity: .8}}          
        >
          <AppBar style={{backgroundColor:'#4D4D4D', boxShadow:'0 0 2px 0 rgba(255,255,255,.4)', display:'-webkit-flex'}}
            title="Main Menu"
            titleStyle={{color:'#FFFFFF'}}
            showMenuIconButton={false}
            iconElementRight={
              <IconButton touch={true}
                onClick={ this._handleLeftClose }
                iconStyle={{ fill: 'rgba(255,255,255,0.87)'}}
              >
                <NavigationClose />
              </IconButton>                
            }
          /> 
          <Menu autoWidth={false}>        
            <Link href="/"><MenuItem style={{color:'rgb(255,255,255', fontWeight:700, textTransform:'uppercase'}} onClick={ this._handleLeftClose } primaryText="Home" leftIcon={<Timelapse style={{ fill: '#FFFFFF' }}/>} /></Link>
            <Link href="/reviews"><MenuItem style={{color:'rgb(165,165,165', fontWeight:700, textTransform:'uppercase'}} onClick={ this._handleLeftClose } primaryText="Reviews" leftIcon={<Sms style={{ fill: 'rgb(165,165,165' }}/>} /></Link>
            <Link href="/surveys"><MenuItem style={{color:'rgb(165,165,165', fontWeight:700, textTransform:'uppercase'}} onClick={ this._handleLeftClose } primaryText="Surveys" leftIcon={<Assignment style={{ fill: 'rgb(165,165,165' }}/>} /></Link>
            <Link href="/employees"><MenuItem style={{color:'rgb(165,165,165', fontWeight:700, textTransform:'uppercase'}} onClick={ this._handleLeftClose } primaryText="Employees" leftIcon={<Account style={{ fill: 'rgb(165,165,165' }}/>} /></Link>
          </Menu>
        </Drawer>        

        <Drawer docked={true}         
          openSecondary={true}
          width={drawerWidth} 
          open={this.state.rightDrawer}
          containerStyle={{overflowX:'hidden', overflowY:'hidden'}}
        >
          <AppBar style={styles.appBar}
            title="Appbar"
            titleStyle={{color:'#4D4D4D'}}
            iconElementLeft={
              <IconButton touch={true}
                onClick={ this._handleRightClose }
                iconStyle={{ fill: 'rgba(77,77,77,0.87)'}}
              >
                <NavigationClose />
              </IconButton>                
            }
          />
          <Link href="/request">
            <RaisedButton style={styles.button}
              backgroundColor='#dd6000'
              label="REQUEST REVIEW" 
              labelStyle={{color:'#FFFFFF', lineHeight:'52px'}}
              fullWidth={true}
            />
          </Link>
          <Menu style={{padding:0,height:80,overflow:'hidden'}}>                  
            <MenuItem><Avatar src="../../static/img/uxceo-128.jpg" style={{position:'relative', top:'18px'}} size={50} /></MenuItem>          
            <ListItem style={{left:67,bottom:67}} 
              primaryText={account.name}            
            />
            <ListItem style={{left:67,bottom:97}}
              primaryText={account.owner}            
            />
            <Link href="/settings">
            <MenuItem style={{color:'#dd6000',left:67,bottom:127}}             
              primaryText="Settings"                       
            />
            </Link>
          </Menu>
          <Menu style={styles.menu} >
            <Divider />
            <MenuItem style={styles.menuItemStyle}
              primaryText="User Management"            
              leftIcon={<Account/>}
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <MenuItem primaryText="Grid lines" insetChildren={true} />,
                <MenuItem primaryText="Copy" insetChildren={true} />,
                <Divider />,
                <MenuItem primaryText="Paste" insetChildren={true} />,
              ]}
            />
            <Divider />
            <MenuItem style={styles.menuItemStyle}
              primaryText="Help"
              leftIcon={<Info/>}
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <MenuItem primaryText="More" insetChildren={true} />,
                <MenuItem primaryText="Less" insetChildren={true} />,
                <Divider />,
                <MenuItem primaryText="Page breaks" insetChildren={true} />,
              ]} 
            />         
          </Menu>
          <Link href="/logout">
          <RaisedButton style={styles.button}
              backgroundColor='rgba(216,216,216,0.37)'
              label="Log Out" 
              labelStyle={{color:'rgba(0,0,0,1)', lineHeight:'52px', float: 'right',}}
              fullWidth={true}
          />
          </Link>
        </Drawer>
      </AppBarWrapper>

      
      <MobileAppBarWrapper>
        <AppBar style={styles.appBar}              
          title="HOME"
          titleStyle={{color:'#4D4D4D', paddingLeft:20}}           
          onLeftIconButtonTouchTap={this._handleLeftToggle}
          iconElementLeft={
            <IconButton touch={true}
              onClick={ this._handleLeftToggle }
              iconStyle={{ fill: 'rgba(77,77,77,0.87)'}}
            >
              <MenuIcon />
            </IconButton>                
          }         
        />
        <Drawer
          docked={true}
          width={drawerWidth} 
          open={this.state.leftDrawer}
          containerStyle={{backgroundColor:'#4D4D4D', overflowX:'hidden', overflowY:'hidden'}}
          overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.24)',opacity: .8}}          
        >
          <AppBar style={{backgroundColor:'#4D4D4D', boxShadow:'0 0 2px 0 rgba(255,255,255,.4)'}}
            title={<img src={Logo} alt="DASLogo" width="40" height="40" />}
            titleStyle={{color:'#FFFFFF', position:'relative', top:10, left:0}}
            showMenuIconButton={false}
            iconElementRight={
              <IconButton touch={true}
                onClick={ this._handleLeftClose }
                iconStyle={{ fill: 'rgba(255,255,255,0.87)'}}
              >
                <NavigationClose />
              </IconButton>                
            }
          /> 
          <Menu autoWidth={false}>        
            <Link href="/"><MenuItem style={{color:'rgb(255,255,255', fontWeight:700, textTransform:'uppercase'}} onClick={ this._handleLeftClose } primaryText="Home" leftIcon={<Timelapse style={{ fill: '#FFFFFF' }}/>} /></Link>
            <Link href="/reviews"><MenuItem style={{color:'rgb(165,165,165', fontWeight:700, textTransform:'uppercase'}} onClick={ this._handleLeftClose } primaryText="Reviews" leftIcon={<Sms style={{ fill: 'rgb(165,165,165' }}/>} /></Link>
            <Link href="/surveys"><MenuItem style={{color:'rgb(165,165,165', fontWeight:700, textTransform:'uppercase'}} onClick={ this._handleLeftClose } primaryText="Surveys" leftIcon={<Assignment style={{ fill: 'rgb(165,165,165' }}/>} /></Link>
            <Link href="/employees"><MenuItem style={{color:'rgb(165,165,165', fontWeight:700, textTransform:'uppercase'}} onClick={ this._handleLeftClose } primaryText="Employees" leftIcon={<Account style={{ fill: 'rgb(165,165,165' }}/>} /></Link>
          </Menu>
        </Drawer>       
      </MobileAppBarWrapper>

      <MobileFooterWrapper>  
        <Paper zDepth={1} style={{fontSize:10}}>
            <BottomNavigation style={{display:'flex', left:12}} selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem style={styles.nav}
                    label="NOTIFICATIONS"                     
                    icon={<Badge style={{padding:0, height:25 }}     
                            badgeContent={0}                     
                            badgeStyle={{backgroundColor:'#dd6000', border:'2px solid #FFFFFF', top:0, right:30, width:8, height:8 }}
                        >
                        {/* This cannot be done! Buttons in buttons! Use a different Element if needed
                          <IconButton touch={true} style={{bottom:10}}
                              iconStyle={{ color: 'rgba(77,77,77,0.87)'}}                        
                          >
                              
                          </IconButton>
                        */}
                          <NotificationsIcon />
                        </Badge>
                        }                                        
                />
                <BottomNavigationItem style={styles.nav}
                    label="REQUEST REVIEWS"
                    icon={<Sms />}
                    onClick={() => this.select()}
                />
                <BottomNavigationItem style={styles.nav}
                    label="PROFILE"
                    icon={<Profile />}
                    onClick={ this._handleRightToggle }                 
                />
            </BottomNavigation>
        </Paper>
            
        <Drawer docked={true}         
          openSecondary={true}          
          width={drawerWidth} 
          open={this.state.rightDrawer}
          containerStyle={{overflowX:'hidden', overflowY:'hidden', height: 'calc(100% - 0px)', top: 0}}
          overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.24)',opacity: .8}}
        >
        <AppBar style={styles.appBar}
            title="Appbar"
            titleStyle={{color:'#4D4D4D'}}
            iconElementLeft={
              <IconButton touch={true}
                onClick={ this._handleRightClose }
                iconStyle={{ fill: 'rgba(77,77,77,0.87)'}}
              >
                <NavigationClose />
              </IconButton>                
            }
          />                    
          <Menu style={{padding:0,height:80,overflow:'hidden'}}>                  
              <MenuItem><Avatar src="../../static/img/uxceo-128.jpg" style={{position:'relative', top:'18px'}} size={50} /></MenuItem>          
              <ListItem style={{left:67,bottom:67}} 
              primaryText={account.name}            
              />
              <ListItem style={{left:67,bottom:97}}
              primaryText={account.owner}            
              />
              <Link href="/settings">
              <MenuItem style={{color:'#dd6000',left:67,bottom:127}}             
              primaryText="Settings"                       
              />
              </Link>
          </Menu>
          <Menu style={styles.menu} >
              <Divider />
              <MenuItem style={styles.menuItemStyle}
              primaryText="User Management"            
              leftIcon={<Account/>}
              rightIcon={<ArrowDropRight />}
              menuItems={[
                  <MenuItem primaryText="Grid lines" insetChildren={true} />,
                  <MenuItem primaryText="Copy" insetChildren={true} />,
                  <Divider />,
                  <MenuItem primaryText="Paste" insetChildren={true} />,
              ]}
              />
              <Divider />
              <MenuItem style={styles.menuItemStyle}
              primaryText="Help"
              leftIcon={<Info/>}
              rightIcon={<ArrowDropRight />}
              menuItems={[
                  <MenuItem primaryText="More" insetChildren={true} />,
                  <MenuItem primaryText="Less" insetChildren={true} />,
                  <Divider />,
                  <MenuItem primaryText="Page breaks" insetChildren={true} />,
              ]} 
              />         
          </Menu>
          <Link href="/logout">
          <RaisedButton style={styles.button}
              backgroundColor='rgba(216,216,216,0.37)'
              label="Log Out" 
              labelStyle={{color:'rgba(0,0,0,1)', lineHeight:'52px', float: 'right',}}
              fullWidth={true}
          />
          </Link>
        </Drawer>
      </MobileFooterWrapper >   
      </div>

    );
  }
}