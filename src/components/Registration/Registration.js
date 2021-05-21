import React from "react";
import "./Registration.scss";
import { SecondaryButton } from "../../UI/buttons/Button";
import { PrimaryHr } from "../../UI/hr/blackHrs";
import GoogleAuthIcon from "../../UI/GoogleAuthIcon/GoogleAuthIcon";
import InputElement from "../../UI/InputElement/InputElement";
import FormWrapper from "../../UI/FormWrapper/FormWrapper";

const Registration = () => {
  return (
    <FormWrapper>
      <div className="auth__header">
        <h3 className="text__title__black">Welcome to BeatyWonderland</h3>
        <h5 className="text__cotitle__black">Please Sign Up</h5>
      </div>
      <PrimaryHr margin={"2em auto"} />

      <div class="form__wrapper">
        <form
          action="return false"
          style={{ width: "fit-content" }}
        >
          <div className="row">
            <InputElement type={"text"} placeholder={"Email"}>
              <i class="fas fa-envelope "></i>
            </InputElement>

            <InputElement type={"text"} placeholder={"Password"}>
              <i class="fas fa-lock "></i>
            </InputElement>

            <InputElement type={"text"} placeholder={"Repeat Password"}>
              <i class="fas fa-lock "></i>
            </InputElement>

            <SecondaryButton
              text={"Sign Up"}
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
      <GoogleAuthIcon text={"Sign Up with Google"} />
    </FormWrapper>
  );
};

export default Registration;
