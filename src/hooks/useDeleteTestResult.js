import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/constants";
import { deleteTestResult } from "../api/testResults";

export const useDeleteTestResult = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTestResult,
    onMutate: async (testResultId) => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEY] });

      const prevTestResults = queryClient.getQueryData([QUERY_KEY]);

      queryClient.setQueryData([QUERY_KEY], (old) =>
        old.filter((test) => test.id !== testResultId)
      );
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
