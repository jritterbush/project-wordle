// type = happy | sad
function Banner({ type, children, action, actionText }) {
  return (
    <div className={`banner ${type}`}>
      {children}
      {action && actionText && <button onClick={action}>{actionText}</button>}
    </div>
  );
}

export default Banner;
