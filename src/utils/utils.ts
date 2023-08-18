export const statusHandler = (response: any) => {
  const status = response?.data?.success || response?.data?.status;

  return {
    isSuccess: () => status || status === "success",
    isError: () => !status || status === "error",
  };
};
