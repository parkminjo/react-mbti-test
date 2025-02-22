import { toast } from "react-toastify";
import { ERROR_MESSAGES } from "../constants/errorMessages";
import { jsonAPI } from "./axiosInstance";
import { JSON_URL } from "../constants/constants";

export const getTestResults = async () => {
  try {
    const response = await jsonAPI.get("/testResults");
    return response.data;
  } catch (error) {
    toast.error(ERROR_MESSAGES.TEST_RESULTS, error);
  }
};

export const createTestResult = async (resultData) => {
  try {
    await jsonAPI.post(JSON_URL, resultData);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTestResult = async (id) => {
  try {
    console.log(JSON_URL + `/${id}`);
    await jsonAPI.delete(JSON_URL + `/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateTestResultVisibility = async (id, visibility) => {
  try {
    await jsonAPI.patch(JSON_URL + `/${id}`, { visibility });
  } catch (error) {
    console.log(error);
  }
};
