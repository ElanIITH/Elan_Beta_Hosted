import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='footer' id='footer'>
        <div className='upper-footer'>
          <span className='heading'>SEND US A MAIL</span>
          <span className='mail' id='mail'>
            <a href='mailto:elan@iith.ac.in' rel='noopener noreferrer'>elan@iith.ac.in</a>
          </span>
        </div>
        <div className='middle-footer'>
          <div className='contact-poc'>
            <div className='heading poc-heading'>CONTACT US</div>
            <div className='poc'>
              <div className='poc-inner'>
                <span className='poc-name'>Tanmay Vishwasrao</span>
                <span>Overall Co-ordinator</span>
                <span>elan.oc@sa.iith.ac.in</span>
                <span>+91 99236 26782</span>
              </div>
              <div className='poc-inner'>
                <span className='poc-name'>Syed Mishaal</span>
                <span>Overall Co-ordinator</span>
                <span>elan.oc@sa.iith.ac.in</span>
                <span>+91 74185 95805</span>
              </div>
              <div className='poc-inner'>
                <span className='poc-name'>Harsha Vardhan Pulavarthi</span>
                <span>Sponsorship Head</span>
                <span>elan.sponsorship@sa.iith.ac.in</span>
                <span>+91 94911 87225</span>
              </div>
              <div className='poc-inner'>
                <span className='poc-name'>Sai Charan Ajjarapu</span>
                <span>Sponsorship Head</span>
                <span>elan.sponsorship@sa.iith.ac.in</span>
                <span>+91 83320 28101</span>
              </div>
              <div className='poc-inner'>
                <span className='poc-name'>Saket Kashyap</span>
                <span>PR & Outreach Head</span>
                <span>elan.outreach@sa.iith.ac.in</span>
                <span>+91 92341 68717</span>
              </div>
              <div className='poc-inner'>
                <span className='poc-name'>Naishadha Voruganti</span>
                <span>PR & Outreach Head</span>
                <span>elan.outreach@sa.iith.ac.in</span>
                <span>+91 93900 27710</span>
              </div>
            </div>
          </div>

          <div className='contact-socials'>
            <div className='heading socials-heading'>SOCIALS</div>
            <div className='social-link link-red'><Link target={'_blank'}
                                                        to='https://www.instagram.com/elan_nvision.iith'>INSTAGRAM</Link>
            </div>
            <div className='social-link link-green'><Link target={'_blank'}
                                                          to='https://x.com/elan_nvision'>x</Link></div>
            <div className='social-link link-yellow'><Link target={'_blank'}
                                                           to='https://www.facebook.com/elannvision.iithyderabad/'>FACEBOOK</Link>
            </div>
            <div className='social-link link-orange'><Link target={'_blank'}
                                                           to='https://www.linkedin.com/company/elan-nvision-iith/'>LINKEDIN</Link>
            </div>
          </div>
        </div>
        <div className='bottom-footer'></div>
      </div>
    </>
  );
}

export default Footer;