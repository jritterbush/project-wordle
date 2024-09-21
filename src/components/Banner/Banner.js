// type = happy | sad
function Banner({ type, children }) {
  return <div className={`banner ${type}`}>{children}</div>;
}

export default Banner;
