import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import MediaQuery from 'react-responsive';
import _ from 'lodash';

import { fetchPages } from '../../../actions';

import Breakpoints from "../../00-style/breakpoints";
import PlaceholderText from '../../01-atom/placeholder/text';
import ServiceCard from '../../02-molecule/cards/service-card';


class ServiceCards extends Component {
  componentDidMount() {
    this.props.fetchPages('services');
  }

  renderPages() {

    const { pages } = this.props;

    if(!pages){
      return(
        <ServiceCard
          height={this.props.height}
          width={this.props.width}
          maxWidth={this.props.maxWidth}
          margin={`0 ${this.props.horizontalMargin}px 0 0`}
          shadowMargin={this.props.shadowMargin}
          title=''
          id="placeholder-client-card"
          clientDescription={<PlaceholderText />}
          hoverHeader=''
          backgroundImage=''
          displayPlaceholder={true} />
      );
    }

    return _.map(this.props.pages, page => {
      return (

        <ServiceCard
          height={this.props.height}
          width={this.props.width}
          maxWidth={this.props.maxWidth}
          margin={`0 ${this.props.horizontalMargin}px 0 0`}
          shadowMargin={this.props.shadowMargin}
          title={page.service_name}
          hoverHeader={page.hover_text}
          id={page.id}
          serviceIcon={`http://directus.wearegodigital.com${page.service_icon.data.url}`}
          clientDescription={<div>
                              <div className='primaryColour'>
                                <MediaQuery minWidth={Breakpoints.mobile}>
                                  <h3 style={{padding:'0.5em 0',fontWeight:'700'}}> {page.service_summary} </h3>
                                </MediaQuery>
                                <MediaQuery maxWidth={Breakpoints.mobile - 1}>
                                  <h4 style={{padding:'0.5em 0',fontWeight:'700'}}> {page.service_summary} </h4>
                                </MediaQuery>
                              </div>
                              <div className='blackColour'>
                                {ReactHtmlParser(page.service_description)}
                              </div>
                            </div>}/>
      );
    });
  }

  render() {

    const cardContainer = {
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center',
      justifyContent: 'flex-start',

      width:'auto',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
      msOverflowStyle: '-ms-autohiding-scrollbar',
      padding: `0px ${this.props.horizontalMargin + (this.props.shadowMargin*2)}px ${this.props.shadowMargin+8}px ${this.props.horizontalMargin}px`
    }

    return(
        <div className="card-container" style={cardContainer}>
            {this.renderPages()}
        </div>
    );
  }
}

function mapStateToProps(state){
  return { pages: state.posts.services};
}

export default connect(mapStateToProps,{ fetchPages })(ServiceCards);
