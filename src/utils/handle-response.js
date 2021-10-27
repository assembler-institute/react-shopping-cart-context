export const handleResponse = ({
  data = null,
  hasError = false,
  error = null,
}) => {
  return {
    data,
    hasError,
    error,
  };
};
