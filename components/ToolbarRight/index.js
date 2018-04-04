import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import RequestReviewButton from '~/RequestReviewButton';
import DropdownMenu from '~/DropdownMenu';
import Badge from 'material-ui/Badge';
import { menuData } from '~/MenuData';
import Gravatar from '~/Gravatar';
import { NotificationsNone } from 'material-ui-icons';
import styled, {ThemeProvider} from 'styled-components';

const ToolBar = styled.div`   
    display: flex;    
    justify-content: right;
    align-items: center;
    vertical-align: middle;
    position: relative;    

@media (max-width: 1200px) {
    display: none;
}
`;

const styles = {
    badge: {
        backgroundColor: '#dd6000',
        border:'2px solid rgba(255,255,255,.87)',       
        top: 23,
        right: 23,
        width: 8,
        height: 8,    
    },   
    tooltip: {
        fontSize: '12px',       
        borderRadius: '2px',    
    }

};

class ToolbarRight extends React.Component {
    
    constructor(props) {       
        super(props);
    }    
    
    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

    render() {          
        return (
        <ToolBar>
            <RequestReviewButton />
            <Badge              
                badgeContent="&nbsp;"
                badgeStyle={styles.badge}
            >           
                {this.props.isFullWidth ? <a href="/notifications"><NotificationsNone style={{paddingLeft:8}} color='rgba(255,255,255,0.87)' /></a> : <a href="/notifications"><NotificationsNone style={{paddingLeft:8}} color='#4d4d4d' /></a> }                                
            </Badge>                    
            <a href="/settings"><Gravatar /></a>
            <DropdownMenu/>
        </ToolBar>
        )
    }
}

const mapStateToProps = (state: ui) => ({
    isFullWidth: state.ui.isFullWidth
  });

export default connect(mapStateToProps)(ToolbarRight);
