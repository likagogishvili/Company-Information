import "./footer.scss";
import { logo } from "../assets/LangingPage/langingImg";
import * as icons from "../assets/footer/footer";
function Footer() {
  var currentTime = new Date();
  var year = currentTime.getFullYear();

  return (
    <footer className="footer-distributed " id="footer">
      <div className="footer-left">
        <a href="/">
          <div
            className="cLogo"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
        </a>
        <div className="footer-icons">
          <a href="/">
            <i style={{ backgroundImage: `url(${icons.fb})` }}></i>
          </a>
          <a href="/">
            <i style={{ backgroundImage: `url(${icons.twitter})` }}></i>
          </a>
          <a href="/">
            <i style={{ backgroundImage: `url(${icons.linkedIn})` }}></i>
          </a>
          <a href="/">
            <i style={{ backgroundImage: `url(${icons.github})` }}></i>
          </a>
        </div>

        <p className="footer-company-name">&copy; Copyright {year}</p>
      </div>

      <div className="footer-left contact-us " style={{width:'30%'}}>
        <h2 >CONTACT INFO</h2>
        <p >
          21 Street, New York + 235 9920 3502 39 support@jaxa.com Office Hours:
          8AM-5PM
        </p>
      </div>

      <div className="footer-right" >
        <form>
          <div className="flex items-center">
            <h2>contact us</h2>
            <svg
              fill="none"
              stroke="#dddddd"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="30px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              ></path>
            </svg>
          </div>
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            placeholder="Enter Email"
            required
          />
          <textarea
            id="message"
            className="text-sm"
            placeholder="Write your thoughts here..."
            required
          ></textarea>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 border border-purple-700 rounded"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
