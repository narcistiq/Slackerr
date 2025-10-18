import { gql } from "@apollo/client";

export const ADD_APPLICATION = gql`
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