// the resolvers folder create a file for each of your data types
// this is the actual code that fetches data from and sends data to our database.

import AuthenticationError from 'apollo-server-express';
import User from '../../models/userSchema.js';

const userResolvers = {
    
    
    Query: {
        getAllUsers: async () => {
            try {
                return await User.find();
            } catch (error) {
                throw new Error( 'Error fetching users from the database' )
            }
        },
        getUser: async (parent, { id }) => {
            try {
                return await User.findById(id)
            } catch (error) {
                throw new Error( `Error fetching post with ID: ${id} from database`)
            }
        },
        getEmail: async (parent, { email }) => {
            try {
                return await User.findOne( {'email': email } )
            } catch (error) {
                throw new Error( `Error fetching email ${email} from database` )
            }
        },
        getPassword: async (parent, { password }) => {
            try {
                return await User.findOne( {'password': password }) 
            }
            catch (error) {
                throw new Error( `Error fetching password ${password} from database` )
            }
        },
        me: async (parent, args, { user }) => {
            if (!user) throw new AuthenticationError("Not logged in");
            return user;
        },
    },

    Mutation: {
        createUser: async (parent, { email, password, name }) => {
            try {
                const user = new User({ email, password, name });
                return await user.save();
            } catch (error) {
                throw new Error( 'Error creating new user in the database' )
            }
        },
        updateEmail: async (parent, { id, email }) => {
            try {
                return await User.findByIdAndUpdate(id, {'email': email }, { new: true });
            } catch (error) {
                throw new Error( `Error updating user email with ID: ${id}` );
            }
        },
        updatePassword: async (parent, { id, password }) => {
            try {
                return await User.findByIdAndUpdate(id, {'password': password }, { new: true });
            } catch (error) {
                throw new Error( `Error updating account password with id: ${id}` );
            }
        },
        updateName: async (parent, { name }) => {
            try {
                return await User.updateOne( {'name': name })
            } catch (error) {
                throw new Error( 'Error updating name' )
            }
        },
        deleteUser: async (parent, { id }) => {
            try {
                return await User.findByIdAndDelete(id);
            } catch (error) {
                throw new Error( `Error deleting post with ID: ${id} from database `)
            }
        },
        deleteUserByEmail: async (parent, { email }) => {
            try {
                return await User.findOneAndDelete(email);
            } catch (error) {
                throw new Error( `Error deleting post with ID: ${id} from database `)
            }
        }
    
    }
    

};
export default userResolvers;