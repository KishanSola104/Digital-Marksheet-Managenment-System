import api from "./api";

// ================= LOGIN =================

export const loginUser = async (loginData) => {
  try {
    const response = await api.post("/login", loginData);

    return response.data;

  } catch (error) {

    throw error.response?.data || {
      message: "Something went wrong",
    };

  }
};

// ================= SAVE SESSION =================

export const saveAuth = (token, user) => {

  localStorage.setItem("token", token);

  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );

};

// ================= GET TOKEN =================

export const getToken = () => {

  return localStorage.getItem("token");

};

// ================= GET USER =================

export const getCurrentUser = () => {

  const user = localStorage.getItem("user");

  return user ? JSON.parse(user) : null;

};

// ================= LOGOUT =================

export const logoutUser = () => {

  localStorage.removeItem("token");

  localStorage.removeItem("user");

};