import { gql } from "@apollo/client";

const CREATE_LINK = gql`
  mutation CreateLink($slug: String, $description: String!, $link: String!) {
    createLink(slug: $slug, description: $description, link: $link) {
      id
      slug
      description
      link
      shortLink
    }
  }
`;

export default CREATE_LINK;
