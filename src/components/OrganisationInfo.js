import React from 'react';
import { connect } from 'react-redux';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class OrganisationInfo extends React.Component{        
    render() {
        return(
            <div>
                {JSON.stringify(this.props)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        organisation:state.organisation
    }
}

function mapDispatchToProps(action) {
    return {

    }
}

export const ORGANISATION_INFO_QUERY = gql`
  query OrganisationQuery($organisation: String!) {
    organization(login: $organisation) {
      description
    }
  }
`

export default graphql(ORGANISATION_INFO_QUERY,{name:'organisationQuery'})(OrganisationInfo);
