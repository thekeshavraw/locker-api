/**
 * Define interface for Organazation Model
 *
 * @author Sandeep Maity
 */

interface INetworkUser {
    user_id: {
        type: Number
    },
    role_id: {
        type: Number
    },
    isActive: {
        type: Boolean
    }
}

interface IOrganization {
    name: {
        type: String
    },
    desc: {
        type: String
    },
    category: {
        id: {
            type: Number
        },
        name: {
            type: String
        }
    },
    isActive: {
        type: Boolean
    },
    users: {
        type: INetworkUser[]
    },
    visibility: {
        type: String
    }
}



export {
    IOrganization,
    INetworkUser
};
