const Button = ({ displayName, value, onClick }) => {
  return (
    <div
      style={{
        padding: 10,
        marginTop: 10,
      }}
    >
      <button onClick = {onClick} value = {value}> {displayName} </button>
    </div>
  );
};

export default Button;
