import React from "react";

export const Footer = (props) => {
  return (
    
     <footer className="py-2" style={props.mode === "dark" ? { color: "white",backgroundColor:"#404040" ,opacity:"0.6"} : { color: "black" ,backgroundColor:"#E3F2FD"}}>
            <p className="text-center">© 2021 Supreet, All Rights reserved</p>
    </footer>
    
  );
};
