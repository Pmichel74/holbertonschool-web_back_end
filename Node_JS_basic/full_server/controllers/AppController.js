// Controller class for application-level routes
class AppController {
  /**
   * Handles GET / route
   * Sends a welcome message as a response
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  static getHomepage(req, res) {
    // Respond with a 200 status and a welcome message
    res.status(200).send('Hello Holberton School!');
  }
}

// Export the AppController class for use in route definitions
export default AppController;
