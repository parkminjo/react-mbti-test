import { useQuery } from "@tanstack/react-query";
import { getTestResults } from "../api/testResults";

export const useGetTestResults = () => {
  return useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });
};
