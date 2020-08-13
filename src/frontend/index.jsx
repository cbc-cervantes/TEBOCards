import React from "react";
import { hydrate, render } from 'react-dom';
import { Router } from 'react-router';
import App from "./routes/App.jsx";

const isProduction = false;

if (typeof window !== 'undefined') {
  const renderContent = (content, element) => {
    isProduction ? hydrate(content, element) : render(content, element);
  };
  renderContent(

        <App isLogged={false} />

    ,
    document.getElementById('root'),
  );
}
