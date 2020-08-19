import gql from "graphql-tag";

export const GET_PROJECT_LIST_QUERY = gql`
  query Project {
    projects(sort: "createdAt:asc") {
      id
      name
      createdAt
    }
  }
`;

export const FETCH_PROJECT_ITEM_QUERY = gql`
  query Project($id: ID!) {
    project(id: $id) {
      id
      name
      createdAt
      config
    }
  }
`;

export const ADD_PROJECT_ITEM = gql`
  mutation CreateProject($name: String!, $email: String!) {
    createProject(input: { data: { name: $name, email: $email } }) {
      project {
        id
        name
        email
        createdAts
      }
    }
  }
`;

export const UPDATE_WOO_PROJECT_ITEM = gql`
  mutation UpdateProject($id: ID!, $config: JSON!) {
    updateProject(
      input: {
        where: { id: $id }
        data: { config: $config }
      }
    ) {
      project {
        id
        config
      }
    }
  }
`;
