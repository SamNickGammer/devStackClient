import { Switch, Route, Redirect } from 'react-router-dom';
import NavMenuDesktop from '../components/NavMenuDesktop';
import RightSidePanel from '../components/RightSidePanel';
import QuesListPage from './QuesListPage';
import AllTagsPage from './AllTagsPage';
import AllUsersPage from './AllUsersPage';
import QuestionPage from './QuestionPage';
import AskQuestionPage from './AskQuestionPage';
import UserPage from './UserPage';
import NotFoundPage from './NotFoundPage';
import { useAuthContext } from '../context/auth';

import { Container, Grid } from '@material-ui/core';

const Routes = () => {
  const { user } = useAuthContext();

  return (
    <Container disableGutters>
      <Grid
        container
        direction="row"
        wrap="nowrap"
        justifyContent="space-between"
      >
        <Switch>
          <Route exact path="/devStackClient">
            <NavMenuDesktop />
            <QuesListPage />
            <RightSidePanel />
          </Route>
          <Route exact path="/devStackClient/ask">
            {user ? (
              <>
                <NavMenuDesktop />
                <AskQuestionPage />
                <RightSidePanel />
              </>
            ) : (
              <Redirect to="/devStackClient" />
            )}
          </Route>
          <Route exact path="/devStackClient/tags">
            <NavMenuDesktop />
            <AllTagsPage />
          </Route>
          <Route exact path="/devStackClient/users">
            <NavMenuDesktop />
            <AllUsersPage />
          </Route>
          <Route exact path="/devStackClient/user/:username">
            <NavMenuDesktop />
            <UserPage />
          </Route>
          <Route exact path="/devStackClient/questions/:quesId">
            <NavMenuDesktop />
            <QuestionPage />
          </Route>
          <Route exact path="/devStackClient/tags/:tagName">
            <NavMenuDesktop />
            <QuesListPage tagFilterActive={true} />
            <RightSidePanel />
          </Route>
          <Route exact path="/devStackClient/search/:query">
            <NavMenuDesktop />
            <QuesListPage searchFilterActive={true} />
            <RightSidePanel />
          </Route>
          <Route>
            <NavMenuDesktop />
            <NotFoundPage />
            <RightSidePanel />
          </Route>
        </Switch>
      </Grid>
    </Container>
  );
};

export default Routes;
