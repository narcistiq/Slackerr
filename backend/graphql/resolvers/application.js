const Application = require('../../models/applicationSchema');

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
        updateApplication: async (parent, { id, input }) => {
            try {
                return await Application.findByIdAndUpdate(id, {$set: input}, {new: true});
            } catch (error) {
                throw new Error( 'Application not found' );
            }
        },
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
