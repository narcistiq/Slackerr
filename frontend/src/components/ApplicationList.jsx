import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react"
import "./ApplicationList.css"

const GET_APPLICATIONS = gql`
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
function ApplicationList () {
    const { loading, error, data } = useQuery(GET_APPLICATIONS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
        <div className="wrapper">
            <div className="applications-box">
            <ul>
            {data.getAllApplications.map(app => (
                <li key={app.id}>
                    {app.company} 
                    {app.position} 
                    {app.applyDate} 
                    {app.responseDate} 
                    {app.response} 
                </li>
            ))}
            </ul>
            </div>
        </div>
        </>
    );
}
export default ApplicationList;