import React from "react";
import ReactDOM from "react-dom";

import SoftPhone from "react-softphone";
import { WebSocketInterface } from "jssip";

const config = {
  domain: "pbx.zadarma.com",
  uri: "sip:88198-103@pbx.zadarma.com",
  password: "fAg9DRtcL7",
  ws_servers: "wss://pbx.zadarma.com:4443/",
  sockets: new WebSocketInterface("wss://pbx.zadarma.com:4443/"),
  display_name: "***",
  debug: true
};

const setConnectOnStartToLocalStorage = (newValue) => {
  // Handle save the auto connect value to local storage
  return true;
};
const setNotifications = (newValue) => {
  // Handle save the Show notifications of an incoming call to local storage
  return true;
};
const setCallVolume = (newValue) => {
  // Handle save the call Volume value to local storage
  return true;
};
const setRingVolume = (newValue) => {
  // Handle save the Ring Volume value to local storage
  return true;
};

const App = () => (
  <div style={{ position: "absolute" }}>
    <SoftPhone
      callVolume={33} //Set Default callVolume
      ringVolume={44} //Set Default ringVolume
      connectOnStart //Auto connect to sip
      notifications //Show Browser Notification of an incoming call
      config={config} //Voip config
      setConnectOnStartToLocalStorage={setConnectOnStartToLocalStorage} // Callback function
      setNotifications={setNotifications} // Callback function
      setCallVolume={setCallVolume} // Callback function
      setRingVolume={setRingVolume} // Callback function
      timelocale={"UTC+3"} //Set time local for call history
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("container"));
