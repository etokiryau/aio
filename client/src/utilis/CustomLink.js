import { Link } from 'react-router-dom';

const CustomLink = (props) => {
  const handleClick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  };

  return (
    <Link {...props} onClick={handleClick}>
      {props.children}
    </Link>
  );
}

export default CustomLink;