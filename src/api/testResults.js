import { toast } from "react-toastify";
import { jsonAPI } from "./axiosInstance";
import { ERROR_MESSAGES } from "../constants/errorMessages";
import { jsonUrl } from "../constants/constants";

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
    await jsonAPI.post(jsonUrl, resultData);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTestResult = async (id) => {
  try {
    console.log(jsonUrl + `/${id}`);
    await jsonAPI.delete(jsonUrl + `/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateTestResultVisibility = async (id, visibility) => {
  try {
    await jsonAPI.patch(jsonUrl + `/${id}`, { visibility });
  } catch (error) {
    console.log(error);
  }
};
