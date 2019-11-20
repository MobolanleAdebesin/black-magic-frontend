import React from "react";
import { storiesOf } from "@storybook/react";
import IconButton from "../IconButtons/IconButtons";
import Arrow from "./iconfinder_arrow-right_3313579.svg";
import Fist from "./icon.svg";

storiesOf("IconButton", module)
  .add("Link", () => <IconButton label="" type="link" icon={Arrow} />)
  .add("Like", () => <IconButton label="" type="like" icon={Fist} />)