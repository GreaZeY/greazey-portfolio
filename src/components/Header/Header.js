import Link from 'next/link';
import React, {useRef ,useState,useEffect} from 'react';
import { AiFillGithub, AiFillLinkedin,AiFillCodepenSquare } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi'
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Logo } from './HeaderStyles';


const Header = ({resumeLink}) => {
  const manageContact = useRef()
const [contactStatus,setContactStatus] = useState('closed')


  const contactMe = () => {
    const contactBox = document.getElementById("hid");
    console.log(manageContact.current.id)
    if (manageContact.current.id === 'contact') {
      if (contactStatus === 'closed') {
        contactBox.style.visibility = 'visible'
        contactBox.classList.add("emailBox");
        setContactStatus('opened')
      } else {
        contactBox.style.visibility = 'hidden'
        contactBox.classList.remove("emailBox");
        setContactStatus('closed')
      }
    }


  }

  const check =(e)=>{
    if(contactStatus==='opened'&& e.target.classList[0]!=='form'&& e.target.classList[1]!=='form'){
      const contactBox = document.getElementById("hid");
      contactBox.style.visibility = 'hidden'
      contactBox.classList.remove("emailBox");
      setContactStatus('closed')
    }
  }


  useEffect(() => {
    if(document){
      document.addEventListener('click',check)
    }
    return () => {
      document.removeEventListener('click',check)
    }
  }, [contactStatus])

  return (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: "50px", marginTop: "-5px" }}>
            <img draggable="false" style={{ width: "35px", height: "40px", filter: 'invert(1)' }} src="vercel.svg"></img>
            <Span >Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>

        </li>
      </Div2>
      <Div3>
        <SocialIcons style={{ marginTop: "-20px" }} href="https://github.com/GreaZey" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons style={{ marginTop: "-20px" }} href="https://www.linkedin.com/in/greazey " target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons style={{ marginTop: "-20px" }} href="https://codepen.io/greazey" target="_blank">
          <AiFillCodepenSquare size="3rem" />
        </SocialIcons>
        <div className="resume">
          <a className="resumelink" style={{ color: 'rgb(0, 255, 149)' }} href={resumeLink} target="_blank">
            Resume
          </a>
        </div>
      </Div3>
      <button ref={manageContact} className="mail" id="contact" onClick={contactMe} >
        <HiMail className="mail" id="mail" />
      </button>
      <div className="form" id="hid">
        <form className="form" action="https://formsubmit.co/c7bdc6daa6b8e16eeedc124a794b9e39" method="POST">
          <p className="form" style={{ margin: '20px 0 10px 50px', fontSize: '30px', fontWeight: '600', letterSpacing: '1px' }}>Contact Me</p>
          <div  className="inputs form">
            <input className="form" type="hidden" name="_subject" value="E-mail from greazey.tk" />
            <p className="form" id='name'>Name</p>
            <input className="form" type="text" name="name" placeholder="Enter Name" required />
            <p className="form" id='emailip'>E-mail</p>
            <input className="form" type="email" name="email" placeholder="Enter E-mail" required />
            <p className="form" id='message'>Message</p>
            <textarea className="form" style={{ height: '100px', width: '270px', borderRadius: '12px' }} type="text" name="message" placeholder="Write your message" required />
            <input className="form" type='hidden' name="_next" value="https://greazey.tk/thankyou.html" />
            <input className="form" style={{ marginTop: '25px', alignSelf: 'center', background: '#00ffaa' }} type="submit" value="Send" />
          </div>
        </form>
      </div>
    </Container>
  );
}
export default Header;
