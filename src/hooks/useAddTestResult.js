import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTestResult } from "../api/testResults";
import { QUERY_KEY } from "../constants/constants";

export const useAddTestResult = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTestResult,
    onMutate: async (testResult) => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEY] });

      const prevTestResults = queryClient.getQueryData([QUERY_KEY]);

      queryClient.setQueryData([QUERY_KEY], (old) => [...old, testResult]);
      return { prevTestResults };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData([QUERY_KEY], context.prevTestResults);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });
};
