import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { AppBar, IconButton, List, ListItem } from 'material-ui';
import { Drawer, RaisedButton } from 'material-ui';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import NavigationClose from 'material-ui-icons/Close';
import {SupervisorAccount, InfoOutline, Grade, ContentCopy, ContentPaste} from 'material-ui-icons';
import Logo from '../../static/img/DAS-Crosshair.png';
import styled from 'styled-components';

const drawerWidth = 288;

const styles = {
    root: {
      padding:0,   
    },
    list:{  
      padding:0,           
      overflow:'hidden',      
    },    
    listItem:{
      padding:0,
      width:drawerWidth,  
      height:52,
      fontSize:'1em',
    },
    activeItem: {
        color: 'rgb(255,255,255)',  
    },
    appBar: {      
      height:64,
      color:'rgba(0, 0, 0, 0.87)',
      backgroundColor:'#FFFFFF',     
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width:`calc(100% - ${drawerWidth}px)`,    
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

export default class RightNav extends React.Component {
    
    constructor(props) {
        super(props);              
    }    

    render() {      
        return ( 
            <Drawer open={this.props.rightDrawer}   
                openSecondary={true}
                width={drawerWidth}                 
                containerStyle={{overflowX:'hidden', overflowY:'hidden'}}
                >
                <AppBar style={styles.appBar}
                title="Appbar"
                titleStyle={{color:'#4D4D4D'}}
                iconElementLeft={
                    <IconButton touch={true}
                        onClick={ this.props.handleRightClose }
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
                    buttonStyle={{borderRadius:0}}
                />
                </Link>
                <List style={{height:94,overflow:'hidden'}}>                  
                    <ListItem style={{backgroundColor:'none'}} ><Avatar src="../../static/img/uxceo-128.jpg" style={{position:'relative', top:'5px'}} size={55} /></ListItem>          
                    <ListItem style={{left:67,bottom:84,backgroundColor:'none',cursor:'default'}} 
                        primaryText={account.name}            
                    />
                    <ListItem style={{left:67,bottom:112,backgroundColor:'none',cursor:'default'}}
                        primaryText={account.owner}            
                    />
                    <Link href="/settings">
                        <ListItem style={{color:'#dd6000',left:67,bottom:140,backgroundColor:'none'}}             
                            primaryText="Settings"                       
                        />
                    </Link>
                </List>
                <Divider />         
                <List style={styles.list} >
                    <ListItem style={styles.listItem}
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
                    <ListItem style={styles.listItem}
                        primaryText="Help"
                        leftIcon={<InfoOutline/>}                       
                        nestedItems={[                           
                            <ListItem key={1} primaryText="More" insetChildren={true} />,                            
                            <ListItem key={2} primaryText="Less" insetChildren={true} />,                            
                            <ListItem key={3} primaryText="Page breaks" insetChildren={true} />,                            
                        ]} 
                    />       
                </List>
                <Divider />
                <Link href="/logout">
                    <RaisedButton style={{padding: 0, height: '52px', boxShadow:0}}
                        backgroundColor='rgba(216,216,216,0.37)'                     
                        label="Log Out" 
                        labelStyle={{color:'rgba(0,0,0,1)', lineHeight:'52px', float: 'right',}}
                        fullWidth={true}
                        buttonStyle={{borderRadius:0}}
                    />
                </Link>
            </Drawer>
        )
    }
}

/* const mapStateToProps = ( openRightNav ) => ({ openRightNav })

const mapDispatchToProps = (dispatch) => {
  return {
    toggleRightNav: bindActionCreators(toggleRightNav, dispatch),
    setRightNav: bindActionCreators(setRightNav, dispatch)
    
  }
}
  
export default connect(mapStateToProps)(RightNav); */

