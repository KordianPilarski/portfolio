const Hamburger = (props) => {
  const handleShowMobileMenu = () => {
    props.handleShowMobileMenu(true);
  };
  return (
    <svg
      id="mobile-cta"
      className="mobile-menu"
      viewBox="0 0 100 80"
      width="40"
      height="40"
      onClick={handleShowMobileMenu}
    >
      <rect width="100" height="10" fill="rgb(3, 98, 171)"></rect>
      <rect y="30" width="100" height="10" fill="rgb(3, 98, 171)"></rect>
      <rect y="60" width="100" height="10" fill="rgb(3, 98, 171)"></rect>
    </svg>
  );
};

export default Hamburger;
