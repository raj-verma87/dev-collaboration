const ERROR_MESSAGES = {
  AUTH: {
    EMAIL_EXISTS: "Email already exists",
    INVALID_CREDENTIALS: "Invalid email or password",
    TOKEN_REQUIRED: "Access denied. No token provided.",
    TOKEN_INVALID: "Invalid token. Authentication failed.",
    UNAUTHORIZED: "Unauthorized access",
  },
  USER: {
    NOT_FOUND: "User not found",
    UNAUTHORIZED_ACTION: "You are not authorized to perform this action",
  },
  COMMON: {
    SOMETHING_WENT_WRONG: "Something went wrong",
    INVALID_ID: "Invalid ID format",
    REQUIRED_FIELDS: "Required fields are missing",
    RESOURCE_EXISTS: "Resource already exists",
    NOT_FOUND: "Resource not found",
  },
  WORKSPACE: {
    ALREADY_MEMBER: "User is already a member of this workspace",
    NOT_MEMBER: "You are not a member of this workspace",
  },
  VALIDATION: {
    INVALID_EMAIL: "Email format is invalid",
  },
};

module.exports = ERROR_MESSAGES;
