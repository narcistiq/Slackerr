
import { useQuery } from "@apollo/client/react"
import "./ApplicationList.css"
import { GET_APPLICATIONS } from "./queries";


function ApplicationList () {
    const { loading, error, data } = useQuery(GET_APPLICATIONS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
        <div className="wrapper">
            <div className="applications-box">
            <ul>
                {/* Need to somehow make the applications appear in table? - use the html table function forget about the libraries lol */}
            {data.getAllApplications.map(app => ( 
                <li key={app.id}>
                    {app.company}: {app.position} | {app.applyDate} | {app.responseDate} | {app.response} 
                </li>
            ))} 
            </ul>
            </div>
        </div>
        </>
    );
}
export default ApplicationList;