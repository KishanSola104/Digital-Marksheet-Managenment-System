import api from "./api";

const handleApiError = (error) => {
  throw (
    error.response?.data || {
      success: false,
      message: "Something went wrong.",
    }
  );
};

export const getRoles = async () => {
  try {
    const response = await api.get("/roles");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};