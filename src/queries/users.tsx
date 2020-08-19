import gql from "graphql-tag";

const GET_PROJECT_LIST_QUERY = gql`
  query Project {
    projects {
      name
    }
  }
`;

export default GET_PROJECT_LIST_QUERY;
