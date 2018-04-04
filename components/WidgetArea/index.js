import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import onScrollTop from '!/onScrollTop';
import onScrollReset from '!/onScrollReset';
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import { HelpOutline, DragHandle } from 'material-ui-icons';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

const drawerOpenWidth = 299;
const drawerVariantWidth = 74;

const Wrapper = styled.div`
  display: block;
  
  @media (min-width: 1500px) {
    padding: 135px 28px 65px;  
  }

  @media (min-width: 1200px) and (max-width: 1499px) {
    padding: 59px 10px 65px 0;
    margin-left: ${props => props.isOpen ? drawerOpenWidth + 'px' : drawerVariantWidth + 'px'};
  }

  @media (max-width: 1200px) {
    padding: 114px 12px;     
  }
`;

const WidgetPanel = styled.div`
  background: #FFFFFF;
  color: rgba(0, 0, 0, 0.87);
  border: 1px solid #CCCCCC;
  box-shadow: 0 5px 5px -5px #333;
  position: relative;  
`;

const WidgetPanelHeader = styled.div` 
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-bottom: 3px solid #dd6000;
  padding: 10px 0 8px 5px;
  text-transform: uppercase;
  font-weight: 700;
`;

const WidgetPanelSubtitle = styled.div`
  max-width: 100%;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 10px 0 10px 5px;
`;

const WidgetPanelContext = styled.div`
  position: absolute;
  bottom: 49px;
  right: 62px;
  text-decoration: none;
  font-family: 'Open Sans Condensed', sans-serif !important;
  font-size: 60px;
  font-weight: 700;
  line-height: 20px;
`;

const Reset = styled.div`
  float: right;
`;

const styles = {
  helpIcon: { 
    float: 'right',
    textAlign: 'right',    
    paddingRight: 5,
    verticalAlign: 'middle',
    color:'#CCCCCC'
  },
  dragHandle: { 
    float: 'right',
    textAlign: 'right',    
    paddingRight: 5,
    verticalAlign: 'middle',
    color:'#CCCCCC'
  },
  tooltip: {
    fontSize: '12px',       
    borderRadius: '2px',    
  }
};

class WidgetArea extends React.Component {

  constructor() {
    super();

    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
      newKey: 0, //force render on variant isOpen                
    };

    this.onLayoutChange = this.onLayoutChange.bind(this); 
    this.handleBreakpointChange = this.handleBreakpointChange.bind(this);    
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);    
    this.setState({ mounted: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    this.setState({ mounted: false });   
  }

  componentWillReceiveProps(nextProps) {
    if( nextProps.isOpen !== this.props.isOpen) {       
      this.setState({ newKey: Math.random() });    
    }
  }

  handleScroll = (event) => {
    let scrollTop = event.srcElement.body.scrollTop;
    if (scrollTop == 0 && this.props.isScroll == true) {
      this.props.dispatch(onScrollReset())
    } else if (scrollTop > 0 && this.props.isScroll == false) {
      this.props.dispatch(onScrollTop())
    }    
  }

  resetLayout() {
    this.setState({ layouts: {} });
  }
 
  onLayoutChange(layout, layouts) {    
    saveToLS("layouts", layouts);
    this.setState({ layouts });      
  }

  handleBreakpointChange=(breakpoint)=>{    
    this.setState({
      currentScreenSize: breakpoint
    })
  }

  generateLayout() {
    return [
      {
        x: 0,
        y: 0,
        w: 1,
        h: 3,
        i: "1"
      },
      {
        x: 1,
        y: 0,
        w: 1,
        h: 3,
        i: "2"
      },
      {
        x: 2,
        y: 0,
        w: 1,
        h: 3,
        i: "3"
      },
      {
        x: 3,
        y: 0,
        w: 1,
        h: 3,
        i: "4"
      },
      {
        x: 0,
        y: 1,
        w: 2,
        h: 6,
        i: "5"
      },
      {
        x: 2,
        y: 1,
        w: 2,
        h: 6,
        i: "6"
      },
      {
        x: 0,
        y: 2,
        w: 2,
        h: 6,
        i: "7"
      },
      {
        x: 2,
        y: 2,
        w: 2,
        h: 6,
        i: "8"
      },
      {
        x: 2,
        y: 6,
        w: 0,
        h: 1,
        i: "9"
      }
    ]
  }

  generateWidgets() {  
    return [       
      <ResponsiveReactGridLayout key={this.state.newKey}      
        autoSize={true}
        useCSSTransforms={true}
        listenToWindowResize={true}
        margin={[10, 20]}
        measureBeforeMount={true}
        isDraggable={true}
        isResizable={false}        
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 320 }}
        cols={{ lg: 4, md: 4, sm: 2, xs: 1, xxs: 1 }}
        rowHeight={40}
        preventCollision={false}
        verticalCompact={true}       
        layouts={this.state.layouts}
        onLayoutChange={(layout, layouts) =>
          this.onLayoutChange(layout, layouts)
        }
        onBreakpointChange={(breakpoint)=>{this.handleBreakpointChange(breakpoint)}}
      >
        <WidgetPanel key="1" data-grid={{ x: 0, y: 0, w: 1, h: 4 }}>
          <WidgetPanelHeader>Overall Review Rating
            <DragHandle style={styles.dragHandle} hoverColor='tomato' />
            <HelpOutline style={styles.helpIcon} />
          </WidgetPanelHeader>
          <WidgetPanelSubtitle>A</WidgetPanelSubtitle>
          <WidgetPanelContext>4.66</WidgetPanelContext>
        </WidgetPanel>
        <WidgetPanel key="2" data-grid={{ x: 1, y: 0, w: 1, h: 4 }}>
          <WidgetPanelHeader>Last 30 Day Review Rating
            <DragHandle style={styles.dragHandle} hoverColor='tomato' />
            <HelpOutline style={styles.helpIcon} />
          </WidgetPanelHeader>
          <WidgetPanelSubtitle>B</WidgetPanelSubtitle>
          <WidgetPanelContext>4.66</WidgetPanelContext>
        </WidgetPanel>
        <WidgetPanel key="3" data-grid={{ x: 2, y: 0, w: 1, h: 4 }}>
          <WidgetPanelHeader>Overall Reviews
            <DragHandle style={styles.dragHandle} hoverColor='tomato' />
            <HelpOutline style={styles.helpIcon} />
          </WidgetPanelHeader>
          <WidgetPanelSubtitle>C</WidgetPanelSubtitle>
          <WidgetPanelContext>5486</WidgetPanelContext>
        </WidgetPanel>
        <WidgetPanel key="4" data-grid={{ x: 3, y: 0, w: 1, h: 4 }}>
          <WidgetPanelHeader>Last 30 Day Reviews
            <DragHandle style={styles.dragHandle} hoverColor='tomato' />
            <HelpOutline style={styles.helpIcon} />
          </WidgetPanelHeader>
          <WidgetPanelSubtitle>D</WidgetPanelSubtitle>
          <WidgetPanelContext>35</WidgetPanelContext>
        </WidgetPanel>
        <WidgetPanel key="5" data-grid={{  x: 0, y: 1, w: 2, h: 6 }}>
          <WidgetPanelHeader>Survey &amp; Review Rating Average
            <DragHandle style={styles.dragHandle} hoverColor='tomato' />
            <HelpOutline style={styles.helpIcon} />
          </WidgetPanelHeader>
          <WidgetPanelSubtitle>E</WidgetPanelSubtitle>
        </WidgetPanel>
        <WidgetPanel key="6" data-grid={{ x: 2, y: 1, w: 2, h: 6 }}>
          <WidgetPanelHeader>Reviews &amp; Average Rating
            <DragHandle style={styles.dragHandle} hoverColor='tomato' />
            <HelpOutline style={styles.helpIcon} />
          </WidgetPanelHeader>
          <WidgetPanelSubtitle>F</WidgetPanelSubtitle>
        </WidgetPanel>
        <WidgetPanel key="7" data-grid={{ x: 0, y: 2, w: 2, h: 6 }}>
          <WidgetPanelHeader>Review Site Rating For Date Range
            <DragHandle style={styles.dragHandle} hoverColor='tomato' />
            <HelpOutline style={styles.helpIcon} />
          </WidgetPanelHeader>
          <WidgetPanelSubtitle>G</WidgetPanelSubtitle>
        </WidgetPanel>
        <WidgetPanel key="8" data-grid={{ x: 2, y: 2, w: 2, h: 6 }}>
          <WidgetPanelHeader>Survey Stats
            <DragHandle style={styles.dragHandle} hoverColor='tomato' />
            <HelpOutline style={styles.helpIcon} />
          </WidgetPanelHeader>
          <WidgetPanelSubtitle>H</WidgetPanelSubtitle>
        </WidgetPanel>
        <WidgetPanel key="9" data-grid={{ x: 0, y: 3, w: 4, h: 4 }}>
          <WidgetPanelHeader>Enterprise Details
            <DragHandle style={styles.dragHandle} hoverColor='tomato' />
            <HelpOutline style={styles.helpIcon} />
          </WidgetPanelHeader>
          <WidgetPanelSubtitle>I</WidgetPanelSubtitle>
        </WidgetPanel>
      </ResponsiveReactGridLayout>
    ]
  }

  render() { 
    return (            
      <Wrapper isOpen={this.props.isOpen} onScroll={this.handleScroll}>	         
          {this.generateWidgets()}       
      </Wrapper>     
    );
  }
}

const mapStateToProps = (state: ui) => ({
  isScroll: state.ui.isScroll,
  isOpen: state.ui.isOpen
});

export default connect(mapStateToProps)(WidgetArea);

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}
