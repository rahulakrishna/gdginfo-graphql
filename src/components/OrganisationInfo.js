import React from 'react';
import { connect } from 'react-redux';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import styled from 'styled-components';

const Wrapper = styled.section`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 34px;
  font-weight: bold;
`;

const SubTitle = styled.h4`
  font-size: 24px;
  font-weight: lighter;
`;

class OrganisationInfo extends React.Component{
    render() {
        if(this.props.organisationQuery.loading) {
          return <div>Loading...</div>;
        }
        if(this.props.organisationQuery.error) {
          return <div>Error...</div>;
        }
          return(
              <div>
                  {JSON.stringify(this.props)}
                  <Wrapper>
                    <Title>{this.props.organisationQuery.organization.description}</Title>
                    <SubTitle>{this.props.organisationQuery.organization.name}</SubTitle>
                  </Wrapper>
              </div>
          )
    }
}

export const ORGANISATION_INFO_QUERY = gql`
  query OrganisationQuery($organisation: String!) {
    organization(login: $organisation) {
      name
      avatarUrl
      description
      repositories(first:20) {
        totalCount
      }
    }
  }
`;

export default graphql(ORGANISATION_INFO_QUERY,{name:'organisationQuery'})(OrganisationInfo);
