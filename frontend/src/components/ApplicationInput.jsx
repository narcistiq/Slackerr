import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react"
import { useState } from "react";
import "./ApplicationInput.css"

const ADD_APPLICATION = gql`
    mutation CreateApplication( $company:String, $position:String, $applyDate:String, $response: String, $url: String ) {
        createApplication ( company:$company, position:$position, applyDate:$applyDate, responseDate:$responseDate, reponse:$response, url:$url ) {
            company
            position
            applyDate
            responseDate
            response
            url        
        }
    }
`;

function ApplicationInput () {
    const [addApplication] = useMutation(ADD_APPLICATION);
    const [formData, setFormData] = useState({
        company: "",
        position: "",
        applyDate: "",
        responseDate: "",
        response: "",
        url: ""
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    const handleSubmit = ( company, position, applyDate, responseDate, response, url ) => {
        addApplication({
            variables: {
                company: company,
                position: position,
                applyDate: applyDate,
                responseDate: responseDate,
                reponse: response,
                url: url
            }
        });
    }
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
                        name="respoonseDate"
                        value={formData.responseDate}
                        onChange={handleInputChange}
                        placeholder="Response date"/>
                    <input 
                        className="myInput" 
                        name="reponse"
                        value={formData.response}
                        onChange={handleInputChange}
                        placeholder="Reponse"/>
                    <input 
                        className="myInput"
                        name="url"
                        value={formData.url}
                        onChange={handleInputChange}
                        placeholder="Url"/>
                    <button className="add" onClick={() => handleSubmit ( 
                        formData.company,
                        formData.position,
                        formData.applyDate,
                        formData.responseDate,
                        formData.response,
                        formData.url
                    )}>
                        +Add
                    </button>
                </div>
            </div>
        </>
    );
}
export default ApplicationInput;