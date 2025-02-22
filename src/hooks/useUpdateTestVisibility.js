import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTestResultVisibility } from "../api/testResults";
import { QUERY_KEY } from "../constants/constants";

export const useUpdateTestVisibility = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY],
      });
    },
  });
};
