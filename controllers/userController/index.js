// const NewOperationClass = require("../../operations/newOperation").NewOperation;

module.exports = {
  async test(req, res, next) {
    console.log("this is as far as I could get");
    // const newOperation = new NewOperationClass();
    // const { SUCCESS, ERROR, VALIDATION_ERROR, NOT_FOUND } = newOperation.outputs;
    // try {
    //   newOperation.on(SUCCESS, callback).on(ERROR, next).on(VALIDATION_ERROR, next).on(NOT_FOUND, next);
    // } catch (error) {
    //   //handle error
    // }
    // newOperation.operationFunction(params);
  }
};
