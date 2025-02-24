import { toast } from "react-toastify";
import { JSON_END_POINT } from "../constants/constants";
import { ERROR_MESSAGES } from "../constants/errorMessages";
import { jsonAPI } from "./axiosInstance";

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
    await jsonAPI.post(JSON_END_POINT, resultData);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTestResult = async (id) => {
  try {
    await jsonAPI.delete(JSON_END_POINT + `/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateTestResultVisibility = async ({ id, visibility }) => {
  try {
    await jsonAPI.patch(JSON_END_POINT + `/${id}`, { visibility: !visibility });
  } catch (error) {
    console.log(error);
  }
};
