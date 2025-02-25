import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTestResultVisibility } from "../api/testResults";
import { QUERY_KEY } from "../constants/constants";

export const useUpdateTestVisibility = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTestResultVisibility,
    onMutate: async ({ id: testId, visibility }) => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEY] });

      const prevTestResults = queryClient.getQueryData([QUERY_KEY]);

      queryClient.setQueryData([QUERY_KEY], (old) =>
        old.map((test) =>
          test.id === testId ? { ...test, visibility: !visibility } : test
        )
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
