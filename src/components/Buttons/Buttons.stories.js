import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Buttons";


storiesOf("Button", module)
  .add("Sign Up", () => <Button label="Sign Up" type="signUp" />)
  .add ("Comment", () => <Button label="Comment" type="comment" />)
  .add("Reviews", () => <Button label="Reviews" type="reviews" />)
  .add("About", () => <Button label="About" type="about" />)

