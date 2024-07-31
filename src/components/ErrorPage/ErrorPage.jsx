const ErrorPage = ({ error }) => {
  console.log(error);
  return (
    <div>
      <h2>Error</h2>
      <h2>Status: {error.response.status}</h2>
      <h2>Info: {error.response.data.msg}</h2>
    </div>
  );
};

export default ErrorPage;
