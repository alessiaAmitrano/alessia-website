import {NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import Header from '../components/Header';
import MediumArticlesGrid from '../components/MediumArticlesGrid';
import { ROUTES } from '../shared/enums';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  margin-top: 73px;
`;


function WebDevMain() {
  let { path, url } = useRouteMatch();
  const activeNavItemStyle = {textDecoration: "underline"};
  return (
    <>
      <Header>
        <NavLink
          to={`${url}${ROUTES.EXPERIENCE}`}
          activeStyle={activeNavItemStyle}
        >
          Experience
        </NavLink>
        <NavLink to={`${url}${ROUTES.BLOG}`} activeStyle={activeNavItemStyle}>
          Blog
        </NavLink>
      </Header>
      <ContentWrapper>
        <Switch>
          <Route path={`${path}${ROUTES.EXPERIENCE}`}>
            <MediumArticlesGrid />
          </Route>
          <Route path={`${path}${ROUTES.BLOG}`}>
            <MediumArticlesGrid />
          </Route>
        </Switch>
      </ContentWrapper>
    </>
  );
}

export default WebDevMain;
