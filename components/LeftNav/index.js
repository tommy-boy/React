import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
/* import setLeftNav from '!/setLeftNav';
import toggleLeftNav from '!/toggleLeftNav';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; */
import { AppBar, IconButton, List, ListItem, makeSelectable } from 'material-ui';
import { Drawer } from 'material-ui';
import Divider from 'material-ui/Divider';
import NavigationClose from 'material-ui-icons/Close';
import {SupervisorAccount, Timelapse, Sms, AssignmentInd} from 'material-ui-icons';
import Logo from '../../static/img/DAS-Crosshair.png';
import styled from 'styled-components';

let SelectableList = makeSelectable(List);

const drawerWidth = 288;

const styles = {
    root: {
      padding: 0,   
    },      
    listItem: {
      color: 'rgb(128,128,128)',      
      fontSize: '1em',
      fontWeight: 'bold'
    },
    activeItem: {
      color: 'rgb(255,255,255)',  
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

export default class LeftNav extends React.Component {
    
    constructor(props) {
      super(props);                    
    }

    render() {      
        return ( 
          <div style={{zIndex:10000}}>
          <Drawer 
            open={this.props.leftDrawer}   
            docked={true}      
            width={drawerWidth}             
            containerStyle={{backgroundColor:'#4D4D4D', overflowX:'hidden', overflowY:'hidden'}}
            overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.24)',opacity: '.8'}}          
          >
            <AppBar style={{backgroundColor:'#4D4D4D'}}
                title={<img src={Logo} alt="DASLogo" width="40" height="40" />}
                titleStyle={{color:'#FFFFFF', position:'relative', top:10, left:0}}
                showMenuIconButton={false}
                iconElementRight={
                <IconButton touch={true}
                    onClick={ this.props.handleLeftClose }
                    iconStyle={{ fill: 'rgba(255,255,255,0.87)'}}
                >
                    <NavigationClose />
                </IconButton>                
                }
            />
            <SelectableList defaultValue={0}>
              <Link href="/"><ListItem value={0} style={{color:'rgb(255,255,255)', fontWeight:'bold'}} onClick={ this.props.handleLeftClose } primaryText="Home" leftIcon={<Timelapse style={{ fill: '#FFFFFF' }}/>} /></Link>             
              <Divider />
              <Link href="/reviews"><ListItem value={1} style={styles.listItem} onClick={ this.props.handleLeftClose } primaryText="Reviews" leftIcon={<Sms />} /></Link>             
              <Divider />
              <Link href="/surveys"><ListItem value={2} style={styles.listItem} onClick={ this.props.handleLeftClose } primaryText="Surveys" leftIcon={<AssignmentInd />} /></Link>             
              <Divider />
              <Link href="/employees"><ListItem value={3} style={styles.listItem} onClick={ this.props.handleLeftClose } primaryText="Employees" leftIcon={<SupervisorAccount />} /></Link>             
              <Divider />
          </SelectableList>                                     
          </Drawer>
          </div>
        )
    }
}

/* const mapStateToProps = ( openLeftNav ) => ({ openLeftNav })

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLeftNav: bindActionCreators(toggleLeftNav, dispatch),
    setLeftNav: bindActionCreators(setLeftNav, dispatch)
    
  }
}
  
export default connect(mapStateToProps)(LeftNav); */


