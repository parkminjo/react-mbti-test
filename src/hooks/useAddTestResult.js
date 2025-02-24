import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTestResult } from "../api/testResults";
import { QUERY_KEY } from "../constants/constants";

export const useAddTestResult = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTestResult,
    onSuccess: queryClient.invalidateQueries({
      queryKey: [QUERY_KEY],
    }),
  });
};
