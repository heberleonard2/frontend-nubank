import React from "react";

import QRCode from "react-native-qrcode-svg";

import { Container, Code } from "./styles";

export default function Menu() {
  let logoFromFile = require("~/assets/qrcodee.png");
  return (
    <Container>
      <QRCode value="Just some string value" logo={logoFromFile} />
    </Container>
  );
}
