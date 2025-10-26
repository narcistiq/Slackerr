import Application from '../../models/applicationSchema.js';
import User from "../../models/userSchema.js"
import mongoose from "mongoose";

console.log("hit")
const applicationResolvers = {
    
    Query: {
        getAllApplications: async () => {
            try {
                return await Application.find().populate('user');
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
        getUserApplications: async (parent, { user }) => {
            if (!user) throw new AuthenticationError("Not logged in")
            try {
                const foundUser = await User.findById(user);
                if (!foundUser) throw new Error( `User not found: ${user}`)
                return await Application.find({ user: foundUser.id }).populate('user'); // find user and populate the original variable with User objects instead of String
            } catch (error) {
                console.error( `Error fetching user application: ${error}` );
                throw new Error( "Invalid user ID" );
            }
            
        }
    },

    Mutation: {
        createUserApplication: async (parent, { input, user }) => {
            if (!user) throw new AuthenticationError("Not logged in")
            try {
                const foundUser = await User.findById(user);
                if (!foundUser) throw new Error ( `User not found: ${user}` );

                const application = new Application({ ...input, user: foundUser.id });
                const savedApp = await application.save();
                savedApp.user = foundUser;
                return savedApp;
         
            } catch (error) {
                throw new Error( `Error creating new application in the database for user ${user}, Error: ${error.message}` );
            }
        },
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
        updateApplication: async (parent, { id, input, user }) => {
            try {
                return await Application.findByIdAndUpdate(id, { ...input, user }, {new: true}).populate('user');
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
export default applicationResolvers;