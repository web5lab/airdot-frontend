import React from "react";
import { NavLink } from "react-router-dom";
import "./QuestDataL.css";
import { AiOutlineLink } from "react-icons/ai";

function QuestDataL(props) {
  return (
    <div>
      <div className="Lmaindiv">
        <h4>Your Task</h4>
        <div className="linkbg">
          <NavLink
            to="https://twitter.com/login?lang=en"
            className="navlinktask"
          >
            <h3>
              <AiOutlineLink /> {props.task}
            </h3>

            <h3 className="divmy">{props.xppoints} </h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default QuestDataL;
