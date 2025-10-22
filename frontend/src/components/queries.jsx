import { gql } from "@apollo/client";

export const GET_APPLICATIONS = gql`
    query GetAllApplications {
        getAllApplications {
            id
            company
            position
            applyDate
            responseDate
            response
            url
        }
    }
`;
export const GET_USERS =  gql`
    query GetAllUsers {
        getAllUsers {
            id
            email
            password
            name
        }
    }
`;
export const GET_EMAIL = gql`
    query GetEmail ( $email: String!) {
        getEmail ( email: $email) {
            email
        }
    }
`;