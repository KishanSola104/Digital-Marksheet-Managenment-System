import api from "./api";

//url must be with prefixed http://localhost:8000/api/
// ===========================================
// Common API Error Handler
// ===========================================

const handleApiError = (error) => {
  throw (
    error.response?.data || {
      success: false,
      message: "Something went wrong. Please try again.",
    }
  );
};

// ===========================================
// SCHOOL AUTHENTICATION
// ===========================================

// Register School
export const registerSchool = async (schoolData) => {
  try {
    const response = await api.post(import.meta.env.VITE_BACKEND_API_URL+"/auth/register-school", schoolData);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// School Login
export const schoolLogin = async (loginData) => {
  try {
    const response = await api.post(import.meta.env.VITE_BACKEND_API_URL+"/auth/school-login", loginData);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Verify Logged-in School
export const verifySchool = async () => {
  try {
    const response = await api.get(import.meta.env.VITE_BACKEND_API_URL+"/auth/verify-school");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// ===========================================
// EMPLOYEE AUTHENTICATION
// ===========================================

// Employee Login
export const employeeLogin = async (loginData) => {
  try {
    console.log(loginData);
    
    const response = await api.post(import.meta.env.VITE_BACKEND_API_URL+"/auth/employee-login", loginData);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Forgot Password
export const forgotPassword = async (data) => {
  try {
    const response = await api.post(import.meta.env.VITE_BACKEND_API_URL+"/auth/forgot-password", data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Change Password
export const changePassword = async (data) => {
  try {
    const response = await api.post(import.meta.env.VITE_BACKEND_API_URL+"/auth/change-password", data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Logout
export const logout = async () => {
  try {
    const response = await api.post(import.meta.env.VITE_BACKEND_API_URL+"/auth/logout");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// ===========================================
// LOCAL STORAGE HELPERS
// ===========================================

// Save Login Session
export const saveAuth = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

// Get JWT Token
export const getToken = () => {
  return localStorage.getItem("token");
};

// Get Logged-in User
export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Clear Local Session
export const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// Logout User
export const logoutUser = async () => {
  try {
    await logout();
  } catch (error) {
    // Ignore backend logout errors and clear session anyway
    console.error(error);
  } finally {
    clearAuth();
  }
};
