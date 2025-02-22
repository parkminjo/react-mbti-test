import { toast } from "react-toastify";
import { jsonAPI } from "./axiosInstance";
import { ERROR_MESSAGES } from "../constants/errorMessages";

export const getTestResults = async () => {
  try {
    const response = await jsonAPI.get();
    return response.data;
  } catch (error) {
    toast.error(ERROR_MESSAGES.TEST_RESULTS, error);
  }
};

export const createTestResult = async (resultData) => {
  try {
    const response = await jsonAPI.post(resultData);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTestResult = async (id) => {};

export const updateTestResultVisibility = async (id, visibility) => {};
