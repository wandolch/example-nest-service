import * as React from 'react';
import './template_2.style.scss';
import DefaultHeadComponent from '../../components/default-head/default-head.component';
import { initializeCall } from '../../utils/call.utils';
import CallButton from '../../components/call-button/call-button.component';
import UserForm from '../../components/user-form/user-form.component';

export const Template_2 = ({ pageContent, searchQuery }) => {
  const {head, images, widgets, ENV} = pageContent;
  head.libHost = ENV.ENV_URL;

  function handleUserFormChange(field, value) {
    searchQuery[field] = value;
  }

  function handleCallClick() {
    const lib = initializeCall(widgets.lib, searchQuery);
    lib.navigate();
  }

  return (
    <main className="template-2-container">
      <DefaultHeadComponent head={head}/>

      <img src={ENV.UPLOADS_URL  + images.logo} className="logo-img" alt="Logo"/>
      <UserForm onChange={handleUserFormChange} user={searchQuery}/>
      <CallButton onClick={handleCallClick}/>
    </main>
  );
};

Template_2.getInitialProps = ctx => ({ pageContent: ctx.query, searchQuery: ctx.req.query });
