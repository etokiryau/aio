import { NavLink } from 'react-router-dom';

const CustomNavLink = (props) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <NavLink {...props} onClick={handleClick}>
      {props.children}
    </NavLink>
  );
}

export default CustomNavLink;