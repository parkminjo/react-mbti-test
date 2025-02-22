import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/constants";
import { deleteTestResult } from "../api/testResults";

export const useDeleteTestResult = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY],
      });
    },
  });
};
