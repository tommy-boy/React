import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toggleNavBar from '!/toggleNavBar';
import isLeftNavOpen from '!/isLeftNavOpen';
import VariantPrimaryNav from '~/VariantPrimaryNav';
import Filters from '~/Filters';
import ToolbarRight from '~/ToolbarRight';
import { AppBar, IconButton } from 'material-ui';
import { Drawer } from 'material-ui';
import { ArrowBack } from 'material-ui-icons';
import MenuIcon from 'material-ui-icons/Menu';
import styled, {ThemeProvider} from 'styled-components';
import theme from '../../static/globalstyles';

const NavBarWrapper = styled.div`
  display: none;  

@media (min-width: 1200px) and (max-width: 1499px) {
  display: flex;
  position: fixed;  
  top: 0;
  vertical-align: middle;
  z-index: 1000;
  }                    
}
`;

const Toolbar = styled.div`	 
    position: fixed;   
    top: -6px; 
    right: 0; 
    z-index: 1001;   
`;

const styles = {
  appBar: {   
    height: 60,   
    color: theme.linkSecondaryColor,
    backgroundColor: theme.primaryBackgroundColor,      
  },  

};

export class VariantNavbar extends React.Component {

  constructor() {
    super();
    this.state = {      
      isDocked: true,
      defaultWidth: 288    
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.contentStyle = this.contentStyle.bind(this); 

  }

  componentDidMount() {   
    window.addEventListener( "resize", this.handleWindowResize );        
  }    

  componentWillUnmount() {   
    window.removeEventListener( "resize", this.handleWindowResize );     
  }

  handleWindowResize = ( event ) => {     
    if ( window.innerWidth > 1499 && this.props.isFullWidth == false) {                                                    
      this.props.dispatch (toggleNavBar());       
    }  
  }
  
  handleToggle() {
    this.props.dispatch(isLeftNavOpen());
  }

  contentStyle() {    
    return {     
      flexGrow: 1,
      left: this.props.isOpen && this.state.isDocked
          ? 288
          : 64,   
      transition: '0.3s ease-out',
      position:'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000
    }
  }
    
  render() {       
    return (      
      <NavBarWrapper>          
        <Drawer           
          width={ this.state.defaultWidth }
          open={ this.props.isOpen }                        
          docked={ this.state.isDocked }                          
          containerStyle={{backgroundColor:'#4D4D4D', overflowX:'hidden', overflowY:'hidden', width:this.props.isOpen ? '288px' : '64px', transition: '0.3s ease-out', transform:this.props.isOpen && 'none'}}
          overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.24)',opacity: 0.8}}         
          >
          <AppBar style={styles.appBar}
              iconElementLeft={
              <IconButton touch={true}
                  onClick={ this.handleToggle }
                  iconStyle={{ fill: 'rgba(255,255,255,0.87)'}}
              >                
                {this.props.isOpen ? <ArrowBack /> : <MenuIcon />}
              </IconButton>                
              }
          />
          <VariantPrimaryNav />                                   
        </Drawer>                                 
        <div style={this.contentStyle()}>					 
          <Filters />          
        </div>                        
        <ThemeProvider theme={theme}>    
          <Toolbar>
            <ToolbarRight />
          </Toolbar>
        </ThemeProvider>        
      </NavBarWrapper>
    )
  }
}

const mapStateToProps = (state: ui) => ({
  isFullWidth: state.ui.isFullWidth,
  isOpen: state.ui.isOpen
});

export default connect(mapStateToProps)(VariantNavbar);
