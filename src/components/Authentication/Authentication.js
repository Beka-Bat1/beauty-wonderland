import React from "react";
import "./Authentication.scss";
import { SecondaryButton } from "../../UI/buttons/Button";
import { PrimaryHr } from "../../UI/hr/blackHrs";

const Authentication = () => {
  return (
    <div className="container">
      <div className="auth__wrapper">
        <div className="auth__header">
          <h3 className="text__title__black">Welcome to BeatyWonderland</h3>
          <h5 className="text__cotitle__black"> Login to your Account</h5>
        </div>

          <PrimaryHr />

        <div class="form__wrapper">
          <form
            action="https://google.com/search"
            style={{ width: "fit-content" }}
          >
            <input className="auth__input" type="text" placeholder="Email" />

            <input className="auth__input" type="text" placeholder="Password" />

            <div className="row">
              <SecondaryButton
                text={"Sign In"}
                width={"60%"}
                margin={"2em auto"}
                padding={"10px"}
              />
            </div>
          </form>
        </div>
        {/* divider */}
        <div className="divider">
          <hr className="col-5" />
          <p className="col-1 text-center">or</p>
          <hr className="col-5" />
        </div>
        {/* form */}
      </div>
    </div>
  );
};

export default Authentication;
