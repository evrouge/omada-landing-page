import './styles.css';
import logos from './photos/logo.png'

const Footer = () => {

  return (
    <>
    <footer><br/><br/><br/>
      <form class="form-container">
        <h1>Contact Us!</h1><br/>
        Name: <input placeholder='First and Last Name'></input><br/><br/>
        Email: <input placeholder='Email'></input><br/><br/>
        Message: <textarea placeholder='Message Here'></textarea><br/><br/>
        <input type="submit" value="Send Message"></input>
      </form><br/><br/>
    </footer>
    {/* <div class="image-container">
    <img src={logos} class="bottom-logo"></img>
    </div> */}<br/>
    <p>Omada Capital Management | 2023</p>
    </>
  );
};

export default Footer;
