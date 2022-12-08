/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import {
  RiArrowRightSFill, RiCloseFill, RiExternalLinkLine, RiMailFill, RiWhatsappFill,
} from 'react-icons/ri';
import moment from 'moment/moment';
import Primjs from 'prismjs';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';
import '../style/contact-code-style.css';
import loadingGif from '../assets/img/loading.gif';

const Contact = () => {
  const [contacts, setContacts] = useState(false);
  const [findMe, setFindMe] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSended, setIsSended] = useState(false);
  const [dateNow, setDateNow] = useState(moment().format('MMMM Do YYYY, h:mm a'));
  useEffect(() => {
    Primjs.highlightAll();
  }, [name, email, message, dateNow]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateNow(moment().format('MMMM Do YYYY, h:mm a'));
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const codePrview = `const button = document.querySelector('#sendBtn');
    const message = {
      name: "${name}",
      email: "${email}",
      message: "${message}",
      date: "${dateNow}",
    };

    button.addEventListener('click', () => {
      form.send(message);
    });`;
  const findMeList = [
    {
      name: 'Github',
      link: 'https://github.com/luxuling',
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/saskiya.affifah.5/',
    },
    {
      name: 'Tiktok',
      link: 'https://www.tiktok.com/@jagonyakmuu?lang=en',
    },
    {
      name: 'Fiver',
      link: 'https://www.fiverr.com/litlelixuling?public_mode=true',
    },
  ];
  const sendEmailHandler = () => {
    setLoading(true);
    emailjs.send('service_ka9ljjt', 'template_1cslmr9', {
      from_name: name,
      message,
      reply_to: email,
    }, 'OsT27hJTb37QFmEua').then(() => {
      setLoading(false);
      setIsSended(true);
    }).catch((error) => {
      console.log(error);
    });
  };
  return (
    <div className="min-h-screen md:h-screen flex flex-col w-full bg-lightPrimary pt-[60px] md:pt-[50px]">
      <div className="w-full h-[65px] px-[2rem] flex items-center text-myWhite md:hidden">
        <h1>_contact</h1>
      </div>
      <div className="w-full md:flex h-full">
        <div className="w-full md:w-[306px] md:h-full md:border-r md:border-dropDown">
          <div className="w-full h-[31px] text-myWhite bg-dropDown md:bg-transparent md:border-b border-dropDown flex items-center px-[2rem] gap-3" onClick={() => setContacts(!contacts)}>
            <RiArrowRightSFill className={`text-lg ${contacts && 'rotate-90'}`} />
            <span className="hover:text-mySlate cursor-pointer">contacts</span>
          </div>
          <div className={`w-full ${contacts && 'pl-[2rem] py-2'}`}>
            <div className={`${contacts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 h-0'} px-[2rem] flex items-center gap-2 text-mySlate text-sm transition-all ease-in-out duration-200 hover:text-myWhite cursor-pointer`}>
              <RiMailFill />
              <a href="mailto:antonisaputra049@gmail.com">antonisaputra049@gmail.com</a>
            </div>
            <div className={`${contacts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 h-0'} px-[2rem] flex items-center gap-2 text-mySlate text-sm transition-all ease-in-out duration-200 delay-200 hover:text-myWhite cursor-pointer`}>
              <RiWhatsappFill />
              <a href="https://wa.link/nu2nqw" target="blank">+6287819444100</a>
            </div>
          </div>
          <div className="w-full h-[31px] text-myWhite bg-dropDown md:bg-transparent md:border-b border-dropDown  flex items-center px-[2rem] gap-3 mt-1 md:mt-0" onClick={() => setFindMe(!findMe)}>
            <RiArrowRightSFill className={`text-lg ${findMe && 'rotate-90'}`} />
            <span className="hover:text-mySlate cursor-pointer">find-me-also-in</span>
          </div>
          <div className={`w-full ${findMe && 'px-[2rem] py-2'}`}>
            {findMeList.map((acc) => {
              return (
                <div className={`${findMe ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 h-0'} px-[2rem] flex items-center gap-2 text-mySlate text-sm transition-all ease-in-out duration-200 hover:text-myWhite cursor-pointer`}>
                  <RiExternalLinkLine />
                  <a href={acc.link} target="blank">{acc.name}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-4 w-full flex md:flex-col md:py-0 justify-center md:w-auto grow">
          <div className="hidden md:block border-b border-dropDown w-full text-mySlate overflow-hidden">
            <span className="w-[221px] h-[32px] border-r border-dropDown px-[1rem] flex items-center justify-between">contact_txt.txt <RiCloseFill /></span>
          </div>
          <div className="md:flex md:h-full">
            {isSended ? (
              <div className="w-[291px] h-auto flex flex-col gap-3 md:w-1/2 md:border-r md:border-dropDown md:h-full md:px-[4rem] md:pt-[3rem] items-center text-center">
                <h1 className="text-[2rem] text-myWhite">Thank you! 🙏</h1>
                <p className="text-mySlate">Your message has been accepted. You will recieve answer really soon!</p>
                <button type="button" className="w-[146px] h-[38px] text-sm rounded-md bg-dropDown hover:bg-mySlate flex items-center justify-center text-myWhite" onClick={() => setIsSended(false)}>send-new-message</button>
              </div>
            ) : (
              <div className="w-[291px] h-auto flex flex-col gap-3 md:w-1/2 md:border-r md:border-dropDown md:h-full md:px-[4rem] md:pt-[3rem]">
                <div className="flex flex-col w-full text-mySlate gap-1">
                  <span>_name</span>
                  <input type="text" required className="outline-none border border-dropDown rounded-md h bg-mediumPrimary h-[41px] px-2 focus:border-2 focus:border-mySlate" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className="flex flex-col w-full text-mySlate gap-1">
                  <span>_email</span>
                  <input type="email" required className="outline-none border border-dropDown rounded-md h bg-mediumPrimary h-[41px] px-2 focus:border-2 focus:border-mySlate" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <textarea className="h-[145px] resize-none w-full rounded-md bg-mediumPrimary border border-dropDown text-mySlate outline-none focus:border-2 focus:border-mySlate" onChange={(e) => setMessage(e.target.value)} value={message} />
                <button type="submit" className="w-[146px] h-[38px] text-sm rounded-md bg-dropDown hover:bg-mySlate flex items-center justify-center text-myWhite" onClick={sendEmailHandler}>
                  {loading ? (
                    <img src={loadingGif} alt="" className="w-[50px]" />
                  ) : (
                    'submit-message'
                  )}
                </button>
              </div>
            )}
            <div className="hidden md:flex w-1/2">
              <pre id="contact-priview" className="language-javascript">
                <code>{codePrview}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
