import { useDispatch } from 'react-redux';
import { getCampers } from './redux/catalog/operations';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Rewievs = lazy(() => import('./components/Reviews/Reviews'));
const Features = lazy(() => import('./components/Features/Features'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers());
  });

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:camperId" element={<Catalog />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Rewievs />} />
        </Route>
        <Route path="favorites" element={<Favorites />} />
        <Route path="favorites/:camperId" element={<Favorites />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Rewievs />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
