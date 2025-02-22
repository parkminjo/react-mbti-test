import { jsonAPI } from "./axiosInstance";

export const getTestResults = async () => {
  try {
    const response = await jsonAPI.get();
    return response.data;
  } catch (error) {
    console.log(error);
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
