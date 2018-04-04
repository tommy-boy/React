import React from 'react'
import PropTypes from 'prop-types';
import PrimaryNav from '~/PrimaryNav';
import ToolbarRight from '~/ToolbarRight';
import Filters from '~/Filters';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../static/globalstyles';
import toggleNavBar from '!/toggleNavBar';
import toggleMobileMenu from '!/toggleMobileMenu';
import setPageIndex from '!/setPageIndex';
import SVGIcon from '~/SVGIcon'

const Wrapper = styled.div`
    display: none;

    @media (min-width: 1499px) {
        display: block;         
        width: 100%; 
    }
`;

const NavBarWrapper = styled.div`
    display: flex;    
    position: fixed;  
    top: 0;
    width: 100%;
    background-color: #4D4D4D;
    height: 77px;
    vertical-align: middle;
    z-index: 1000;
`;

const Toolbar = styled.div`	
    position: absolute;
    top: 2px;
    right: 0;       
    padding: 0 20px; 
`;



class DesktopNavbar extends React.Component {

    constructor() {
        super()
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize);
    }

    handleWindowResize = (event) => {
        if (window.innerWidth < 1500 && this.props.isFullWidth == true) {
            this.props.toggleNavBar();
        }
        
    }

    contentStyle() {    
        return {               
          transition: '0.3s ease-out',
          position:'fixed',
          top: 77,
          width: '100%',
          zIndex: 1000
        }
      }

    render() {
        const _toggleMobileMenu = () => {
            toggleMobileMenu();
        }
        return (
            <Wrapper>
                <ThemeProvider theme={theme}>
                    <NavBarWrapper>
                        <PrimaryNav />
                        <Toolbar><ToolbarRight /></Toolbar>
                    </NavBarWrapper>
                </ThemeProvider> 
                <div style={this.contentStyle()}>	
                    <Filters />
                </div>               
            </Wrapper>
        )
    }
}

const mapStateToProps = ({ openMobileMenu, pageIndex, ui }) => ({ openMobileMenu, pageIndex, isFullWidth: ui.isFullWidth })

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMobileMenu: bindActionCreators(toggleMobileMenu, dispatch),
        setPageIndex: bindActionCreators(setPageIndex, dispatch),
        toggleNavBar: bindActionCreators(toggleNavBar, dispatch),        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DesktopNavbar);

