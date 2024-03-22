import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Navigation } from './components/Navigation/Navigation';
// import { Loader } from './Loader';

export const AppLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Suspense fallback={<>Loading</>}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyles />
    </>
  );
};
