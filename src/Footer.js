
import './styles.css'

const Footer = () => {

  return (
    <footer><br/>
      <form>
        Name:<input></input>
        Email:<input></input>
        Message:<textarea></textarea>
        <input type="submit" value="Send Message"></input>
      </form>
<br/>
      <p>&copy; {new Date().getFullYear()} OMADA CAPITAL MANGAGEMENT. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
