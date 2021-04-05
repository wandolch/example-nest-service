import * as React from 'react';
import './template_1.style.scss';
import DefaultHeadComponent from '../../components/default-head/default-head.component';
import { initializeCall } from '../../utils/call.utils';
import CallButton from '../../components/call-button/call-button.component';

export const Template_1 = ({ pageContent, searchQuery }) => {
  const {head, text, images, widgets, ENV} = pageContent;
  head.libHost = ENV.ENV_URL;

  function handleCallClick() {
    const lib = initializeCall(widgets.lib, searchQuery);
    lib.navigate();
  }

  return (
    <main className="template-1-container">
      <DefaultHeadComponent head={head}/>

      <div className="info-side">
        <img src={ENV.UPLOADS_URL + images.logo} className="logo-img" alt="Logo"/>
        <CallButton onClick={handleCallClick}/>
        <div className="call-note">{text.note}</div>
      </div>
      <div className="phone-image-side">
        <img src="/assets/phone-isr.jpg" className="phone-img" alt="Phone image"/>
      </div>
    </main>
  );
};

Template_1.getInitialProps = ctx => ({ pageContent: ctx.query, searchQuery: ctx.req.query });
