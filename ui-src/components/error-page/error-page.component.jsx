import * as React from 'react';
import DefaultHeadComponent from '../default-head/default-head.component';
import './error-page.style.scss';

export const ErrorPage = ({statusCode, path}) => {
  const title = `${statusCode} — example`;

  return (
    <main className="error-page-container">
      <DefaultHeadComponent title={title}/>

      <div>We're sorry, something went wrong :(</div>
    </main>
  );
};

ErrorPage.getInitialProps = ctx => ctx.query;

export default ErrorPage;