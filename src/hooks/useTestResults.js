import { useQuery } from "@tanstack/react-query";
import { getTestResults } from "../api/testResults";

export const useTestResults = () => {
  return useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });
};
