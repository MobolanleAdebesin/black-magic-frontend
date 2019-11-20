import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Buttons";
import Arrow from "./iconfinder_arrow-right_3313579.svg";
import Fist from "./icon.svg";

storiesOf("Button", module)
  .add("Link", () => <Button label="" type="link" icon={Arrow} />)
  .add("Like", () => <Button label="" type="like" icon={Fist} />)
  .add("Sign Up", () => <Button label="Sign Up" type="signUp" />)
  .add ("Comment", () => <Button label="Comment" type="comment" />)
  .add("Reviews", () => <Button label="Reviews" type="reviews" />)
  .add("About", () => <Button label="About" type="about" />)
