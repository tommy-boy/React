import React from 'react';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui';
import SVGIconVariant from '~/SVGIconVariant';
import Divider from 'material-ui/Divider';
import styled, {ThemeProvider} from 'styled-components';

const NavLeft = styled.div`        

@media (max-width: 1200px) {
    display: none;
}
`;

const VariantPrimaryNav = (pageIndex) => {

    const linkData = [
        {
            href: '/',            
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
        {
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
        },
    ]

    const links = linkData.map((link, i) => {
        const className = pageIndex === i ? 'item active' : 'item';             
        const { href, text, icon, status } = link       
        return (                            
            <Link href={`/${href}`} key={i} prefetch={status}>
                <div> 
                    <ListItem value={i} style={{color:'rgba(255,255,255,0.87)', fontWeight:'bold', whiteSpace: 'nowrap', verticalAlign:'middle', lineHeight:'28px'}} primaryText={text} className={className} name={text} leftIcon={<SVGIconVariant name={icon} />} /> 
                    <Divider style={{backgroundColor: 'rgba(255,255,255,0.27'}} />
                </div>                           
            </Link>
        )
    })   

    return (
        <NavLeft>                         
            { links }                    
        </NavLeft>                  
    )
}

export default VariantPrimaryNav