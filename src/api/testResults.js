import { toast } from "react-toastify";
import { JSON_END_POINT } from "../constants/constants";
import { ERROR_MESSAGES } from "../constants/errorMessages";
import { jsonAPI } from "./axiosInstance";

/**
 * 테스트 결과 조회하기
 * @returns testResults
 */
export const getTestResults = async () => {
  try {
    const { data: testResults } = await jsonAPI.get("/testResults");
    return testResults;
  } catch (error) {
    toast.error(ERROR_MESSAGES.TEST_RESULTS, error);
  }
};

/**
 * 테스트 결과 추가하기
 * @param {*} resultData
 */
export const createTestResult = async (resultData) => {
  try {
    await jsonAPI.post(JSON_END_POINT, resultData);
  } catch (error) {
    toast.error(ERROR_MESSAGES.TEST_RESULTS_ADD, error);
  }
};

/**
 * 테스트 결과 삭제하기
 * @param {*} testId
 */
export const deleteTestResult = async (testId) => {
  try {
    await jsonAPI.delete(JSON_END_POINT + `/${testId}`);
  } catch (error) {
    toast.error(ERROR_MESSAGES.TEST_RESULTS_DELETE, error);
  }
};

/**
 * 테스트 결과 공개 여부 변경
 * @param {*} testId, visibility
 */
export const updateTestResultVisibility = async ({ testId, visibility }) => {
  try {
    await jsonAPI.patch(JSON_END_POINT + `/${testId}`, {
      visibility: !visibility,
    });
  } catch (error) {
    toast.error(ERROR_MESSAGES.TEST_RESULTS_UPDATE, error);
  }
};
