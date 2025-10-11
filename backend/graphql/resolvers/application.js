const Application = require('../../models/applicationSchema');

const updateField = async ( id, attr, value ) => {
    try {
        return await Application.findByIdAndUpdate(id, { [attr]: value }, { new:true });
    } catch (error) {
        console.error( `Mongoose update error for Id: ${id}, Field: ${attr}, Value: ${value}` );
        throw new Error( `Error updating ${attr} of application with ID: ${id}` );
    }
}
module.exports = {
    
    Query: {
        getAllApplications: async () => {
            try {
                return await Application.find()
            } catch (error) {
                throw new Error( `Error fetching applications from the database` );
            }
        },
        getApplication: async (parent, { id }) => {
            try {
                return await Application.findById(id);
            } catch (error) {
                throw new Error( `Error fetching application with ID: ${id}` );
            }
        },
    },

    Mutation: {
        createApplication: async (parent, {
            company, position, applyDate, responseDate, response, url
        }) => {
            try {
                const application = new Application( {company, position, applyDate, responseDate, response, url} );
                return await application.save()
            } catch (error) {
                throw new Error( `Error creating new application in the database` );
            }
        },
        updateCompany: async (parent, { id, company }) => updateField(id, 'company', company),
        updatePosition: async(parent, { id, position }) => updateField(id, 'position', position),
        updateApplyDate: async (parent, { id, applyDate }) => updateField(id, 'applyDate', applyDate),
        updateResponseDate: async(parent, { id, responseDate }) => updateField(id, 'responseDate', responseDate),
        updateReponse: async(parent, { id, response }) => updateField(id, 'response', response),
        updateUrl: async(parent, { id, url }) => updateField(id, 'url', url),
        deleteApplication: async(parent, { id }) => {
            try {
                return await Application.findByIdAndDelete(id);
            } catch (error) {
                console.error( `Mongoose deletion error deleting application with ID: ${id}` );
                throw new Error( `Error deleting application with ID: ${id}` );
            }
        }
    }
}
