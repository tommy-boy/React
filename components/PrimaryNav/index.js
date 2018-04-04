import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ActiveLink from '~/ActiveLink';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toggleNavBar from '!/toggleNavBar';
import Logo from '../../static/img/DAS-Crosshair.png';
import { List, ListItem } from 'material-ui';
import SVGIcon from '~/SVGIcon';
import styled, {ThemeProvider} from 'styled-components';

const linkColor = 'rgba(255,255,255,0.87)'

const NavLeft = styled.div`    
    display: flex;   
    padding: 0 0 0 40px;
    vertical-align: middle;      
    justify-content: left;
    align-items: center;
`;

const DASLogo = styled.img`      
    padding-right: 18px;
    z-index: 100; 

@media (max-width: 1200px) {
    display: none;
}
`;

const Label = styled.div`       
    display: inline-flex;
    vertical-align: middle;
    line-height: 32px;
`;

const IconStyle = styled.div` 
    display: inline-flex;     
    vertical-align: middle;
    line-height: 24px;
    padding-top: 6px;
    padding-right: 14px;       
`;

class PrimaryNav extends React.Component {
    
    constructor() {
      super()
    }
    
    componentDidMount() {         
        const elWidth = ReactDOM.findDOMNode(this).offsetWidth;        
        if (elWidth > 1024 || window.innerWidth < 1500) {                            
            this.props.dispatch ( toggleNavBar () )
        }                      
    }
    
    render() {
        const linkData = [
            {
                href: '',            
                text: 'Home',
                icon: 'Timelapse',
                status: true
            },
            {
                href: 'reviews',
                text: 'Reviews',
                icon: 'Sms',
                status: true
            },
            {
                href: 'surveys',
                text: 'Surveys',
                icon: 'AssignmentInd',
                status: true
            },
            {
                href: 'employees',
                text: 'Employees',
                icon: 'People',
                status: false
            },
            {
                href: 'pl',
                text: 'People Logix',
                icon: 'SentimentSatisfied',
                status: false
            },
            {
                href: 'sl',
                text: 'Social Logix',
                icon: 'AirplanemodeActive',
                status: false
            },
           /*  {
                href: 'rl',
                text: 'Response Logix',
                icon: 'Cake',
                status: false
            },
            {
                href: 'sa',
                text: 'Social Ads',
                icon: 'DonutLarge',
                status: false  
            }, */
        ]

        const links = linkData.map((link, i) => {
            const className = this.props.pageIndex === i ? 'item active' : 'item';             
            const { href, text, icon, status } = link;
            
            return (                
                <ActiveLink href={`/${href}`} key={i} prefetch={status}>
                    <ListItem className={className} name={text} >
                        <IconStyle><SVGIcon name={icon} color={linkColor} /></IconStyle>
                        <Label>{text}</Label>
                    </ListItem>                    
                </ActiveLink>
            )
        })

        return (
            <NavLeft>
                <DASLogo src={Logo} alt="DASLogo" width="40" height="40" />
                { links }                    
            </NavLeft>                  
        )
    }
}

const mapStateToProps = (state: ui) => ({
    isFullWidth: state.ui.isFullWidth
  });

export default connect(mapStateToProps)(PrimaryNav);
