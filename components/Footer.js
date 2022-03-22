import react from 'react';

const copyrightYear = new Date().getFullYear();

const Footer = () => {
 return (
  <footer>
    <div className="flex justify-center items-center">
      Copyright &copy;{copyrightYear}
    </div>
  </footer>
 )
}
export default Footer;