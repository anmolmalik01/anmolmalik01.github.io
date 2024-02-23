import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";


const Side = () => {
  return (
    <div className="w-full z-40 flex dlex-row sm:flex-col justify-center items-end text-extra">
      
      <div className="p-3">
        <a href="https://github.com/anmolmalik01">
          <FontAwesomeIcon
            style={{ fontSize: "24px" }}
            icon={faGithub}
            className="opacity-90 transition-all duration-200 ease-in-out hover:scale-110 hover:text-dark sm:hover:text-gray-300 hover:text-extra hover:opacity-100"
          />
        </a>
      </div>

      <div className="p-3">
        <a href="https://twitter.com/anmolmalik01">
          <FontAwesomeIcon
            style={{ fontSize: "23px" }}
            icon={faTwitter}
            className="opacity-90 transition-all duration-200 ease-in-out hover:scale-110 hover:text-dark sm:hover:text-gray-300 hover:text-extra hover:opacity-100"
          />
        </a>
      </div>
      <div className=" p-3 ">
        <a href="https://medium.com/anmolmalik01">
          <FontAwesomeIcon
            style={{ fontSize: "20px" }}
            icon={faMedium}
            className="opacity-90 transition-all duration-200 ease-in-out hover:scale-110 hover:text-dark hover:text-extra hover:opacity-100"
          />
        </a>
      </div>
      <div className="p-3">
        <a href="https://instagram.com/anmolmalik01">
          <FontAwesomeIcon
            style={{ fontSize: "26px" }}
            icon={faInstagram}
            className="opacity-90 transition-all duration-200 ease-in-out hover:scale-110 hover:text-dark hover:text-extra hover:opacity-100"
          />
        </a>
      </div>
    </div>
  )
}

export default Side;