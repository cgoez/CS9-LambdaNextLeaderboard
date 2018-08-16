const Validator = require("validator");
const checkEmpty = require("../checkEmpty");

module.exports = function validateUpdateInput(data) {
  let errors = {};

  data.currentPassword = !checkEmpty(data.currentPassword)
    ? data.currentPassword
    : "";
  data.newPassword = !checkEmpty(data.newPassword) ? data.newPassword : "";
  data.newPassword2 = !checkEmpty(data.newPassword2) ? data.newPassword2 : "";

  // current password
  if (Validator.isEmpty(data.currentPassword)) {
    errors.currentPassword = "Current password field is required";
  }

  // new password
  if (Validator.isEmpty(data.newPassword)) {
    errors.newPassword = "New password field is required";
  } else if (!Validator.isLength(data.newPassword, { min: 6 })) {
    errors.newPassword = "Password must be at least 6 characters";
  }

  // new password confirmation
  if (Validator.isEmpty(data.newPassword2)) {
    errors.newPassword2 = "Confirm Password field is required";
  } else if (!Validator.equals(data.newPassword, data.newPassword2)) {
    errors.newPassword2 = "Passwords do not match";
  }

  return {
    errors,
    isValid: checkEmpty(errors)
  };
};
