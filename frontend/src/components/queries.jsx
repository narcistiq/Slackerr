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
            user {
                id
            }
        }
    }
`;
export const GET_USERS =  gql`
    query GetAllUsers {
        getAllUsers {
            id
            email
            name
        }
    }
`;
export const GET_EMAIL = gql`
    query GetEmail ( $email: String!) {
        getEmail ( email: $email) {
            id
            email
            name
        }
    }
`;
export const GET_USER_APPLICATIONS = gql`
    query GetUserApplications( $user: String! ) {
        getUserApplications( user: $user ) {
            id
            user {
                id
            }
        }
    }
`;