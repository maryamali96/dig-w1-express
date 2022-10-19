const success = (message, results, statusCode) => {
    return {
      message,
      success: true,
      code: statusCode,
      results
    };
  };
  const error = (message, statusCode) => {
    return {
      message,
      code: statusCode,
      success: false
    };
  };
module.exports = {
    success,
    error
}