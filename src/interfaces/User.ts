/**
 * Define interface for User Model
 *
 * @author Abhishek Kumar
 */
export interface IUser {
     username: {
          type: String
     },
     profile: {
          name: {
               first: {
                    type: String
               },
               last: {
                    type: String
               },
          },
          email: {
               type: String
          },
          gender: {
               type: String
          },
          dob: {
               type: String
          },
          avatar: {
               type: String
          },
          contact: {
               mobile: {
                    code: {
                         type: String
                    },
                    num: {
                         type: String
                    }
               },
               phone: {
                    code: {
                         type: String
                    },
                    num: {
                         type: String
                    }
               }
          }
     },
     source: {
          name: {
               type: String
          },
          id: {
               type: String
          }
     },
     password: {
          salt: {
               type: String
          },
          value: {
               type: String
          },
          reset: {
               token: {
                    type: String
               },
               expire: {
                    type: String
               }
          }
     },
     token: {
          key: {
               type: String,
          }
          expire: {
               type: String,
          },
          temp: {
               token: {
                    type: String
               },
               expire: {
                    type: String
               }
          },
     },
     otp: {
          type: String
     },
     meta: {
          created: {
               type: Date
          },
          modified: {
               type: Date
          }
     },
     isActive: {
          type: Boolean
     },
     id: {
          type: Number
     }

}

export default IUser;
