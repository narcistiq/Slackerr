import { useMutation } from "@apollo/client/react"
import { useState } from "react";
import { GET_APPLICATIONS, GET_USER_APPLICATIONS } from "./queries";
import { CREATE_APPLICATION, CREATE_USER_APPLICATION } from "./mutations";
import { useParams } from "react-router-dom";
import "./ApplicationInput.css"


function ApplicationInput () {
    const INIT_STATE = {
        company: "",
        position: "",
        applyDate: "",
        responseDate: "",
        response: "",
        url: ""
    };
    const { userID } = useParams();
    const [addApplication] = useMutation(CREATE_USER_APPLICATION);
    const [formData, setFormData] = useState(INIT_STATE);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    const handleSubmit = async () => {
        await addApplication({
            variables: {
                input: formData,
                user: userID,
            },
            refetchQueries: [
                { 
                    query: GET_USER_APPLICATIONS,
                    variables: { user: userID },
                }
            ],
        });
        console.log(formData)
        setFormData(INIT_STATE);
    };
    return (
        <>
        <h1>Slackerr</h1>
            <div className="wrapper">
                <div className="boxes">
                    <input 
                        className="myInput" 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company name"/>
                    <input 
                        className="myInput" 
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        placeholder="Position"/>
                    <input 
                        className="myInput" 
                        name="applyDate"
                        value={formData.applyDate}
                        onChange={handleInputChange}
                        placeholder="Apply date"/>
                    <input 
                        className="myInput"
                        name="url"
                        value={formData.url}
                        onChange={handleInputChange}
                        placeholder="Url"/>
                    <button className="add" onClick={() => handleSubmit ()}>
                        +Add
                    </button>
                </div>
            </div>
        </>
    );
}
export default ApplicationInput;