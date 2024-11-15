import "./Appheader.css"
import { Appinputforms } from "../Inputs/Appinputs"
import { Submitbutton } from "../buttons/Button"
import userImage from '../../assets/user.png';

export function Appheader(params) {
  return (
    <>
      <div className="container">
        <div>
          <img className="user" src={userImage} alt="Description of image" />
        </div>

        <div className="cardwrapper">
          <Appinputforms type={"text"} placeholder={"name"} />
          <Appinputforms type={"text"} placeholder={"last name"} />
          <Appinputforms type={"email"} placeholder={"email"} />
          <Appinputforms type={"password"} placeholder={"password"} />
          <Appinputforms type={"data"} placeholder={"birth date"} />
          <Submitbutton />
        </div>
      </div>




    </>
  )
}