import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type Link {
        id: String
        url: String
        category: String
        title: String
        description: String
        imageUrl: String
        users: [String]
    }
    type Query {
        links: [Link]!
    }
`;