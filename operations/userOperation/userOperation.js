const Operation = require("../operation");

class UserOperation extends Operation {
  constructor() {
    super();
    // Initializing variables for services
  }
  // Create class methods
  async login({ email, password }) {
    // This function will handle the login for the user
    const { SUCCESS, ERROR, VALIDATION_ERROR, NOT_FOUND } = this.outputs;
    try {
      // Type your operations with the service or any logic here
      // return to Success info and the object
      return this.emit(SUCCESS, {});
    } catch (error) {
      console.log(error);
      if (error.message === "ValidationError") {
        return this.emit(VALIDATION_ERROR, error);
      } else if (error.message === "NotFoundError") {
        return this.emit(NOT_FOUND, error);
      } else {
        return this.emit(ERROR, error);
      }
    }
  }
}
UserOperation.setOutputs(["SUCCESS", "ERROR", "VALIDATION_ERROR", "NOT_FOUND"]);
module.exports = UserOperation;
