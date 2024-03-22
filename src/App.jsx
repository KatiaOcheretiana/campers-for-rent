import { useDispatch } from 'react-redux';
import { getCampers } from './redux/catalog/operations';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';

import { lazy } from 'react';

const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Features = lazy(() => import('./components/Features/Features'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers());
  });

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<h1>Home</h1>} />
        <Route path="/favorites" element={<h2>favorites</h2>} />
        <Route path="/catalog" element={<Catalog />}>
          <Route path="/catalog/features" element={<Features />} />
          <Route path="/catalog/reviews" element={<>rewievs</>} />
        </Route>
      </Route>
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
}

export default App;