import { gql } from "@apollo/client";

export const CREATE_APPLICATION = gql`
    mutation CreateApplication( $company: String, $position: String, $applyDate: String, $responseDate: String, $response: String, $url: String ) {
        createApplication ( company: $company, position: $position, applyDate: $applyDate, responseDate: $responseDate, response:$response, url:$url ) {
            company
            position
            applyDate
            responseDate
            response
            url        
        }
    }
`;
export const UPDATE_APPLICATION = gql`
    mutation UpdateApplication( $id: ID!, $input: ApplicationInput! ) {
        updateApplication( id: $id, input: $input ) {
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
export const ADD_USER = gql`
    mutation CreateUser( $email: String!, $password: String!, $name: String ) {
        createUser( email: $email, password: $password, name: $name ) {
            email
            password
            name
        }
    }
`;
// create applications linked to users 
export const CREATE_USER_APPLICATION = gql`
    mutation CreateUserApplication( $input: ApplicationInput!, $user: String! ) {
        createUserApplication( input: $input, user: $user ) {
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