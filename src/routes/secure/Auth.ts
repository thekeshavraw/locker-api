/**
 * Define all your API web-routes
 *
 * @author Abhishek Kumar
 */

// import ApiClient from '../../domains/authentication/api-client';
// import AuthServiceClient from '../../domains/authentication/service-client';
import { Router } from 'express';
import { OK, INTERNAL_SERVER_ERROR } from 'http-status';
import { ErrorHandler } from '../../exception/errors';

module.exports = function (app: any) {

     const router = Router();
     // const client = new ApiClient();
     // const auth = new AuthServiceClient();
     const errorHandler = new ErrorHandler();

     // router.use(auth.validateToken);
     // router.post('/verify-otp', async (req: any, res) => {
     //      const { user } = req;
     //      const { otp } = req.body;
     //      return client.verifyOtp(user, otp)
     //           .then((response) => {
     //                return res.status(OK).json({
     //                     status: 'success',
     //                     message: 'Otp Verified',
     //                     data: response
     //                });
     //           }).catch((error: Error) => {
     //                errorHandler.handleError(error, req, res);
     //           })

     // })

     // app.use('/auth', router);

}
