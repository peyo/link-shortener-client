import { gql } from "@apollo/client";

const GET_LINKS = gql`
  {
    allLinks {
      id
      slug
      description
      link
      shortLink
    }
  }
`;

module.exports = GET_LINKS;
