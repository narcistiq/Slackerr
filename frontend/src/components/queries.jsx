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