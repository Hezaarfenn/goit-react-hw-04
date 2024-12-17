const ErrorMessage = ({ message }) => {
  return (
    <div>
      <p>{message || 'An unexpected error occurred. Please try again.'}</p>
    </div>
  );
};

export default ErrorMessage;
