module.exports = {
  preset: "react-native",
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@helpers/(.*)$": "<rootDir>/src/helpers/$1",
    "^@layouts/(.*)$": "<rootDir>/src/layouts/$1",
    "^@interceptor/(.*)$": "<rootDir>/src/interceptor/$1",
    "^@services/(.*)$": "<rootDir>/src/services/$1",
    "^@store/(.*)$": "<rootDir>/src/store/$1",
    "^@screens/(.*)$": "<rootDir>/src/screens/$1"
  }
};
