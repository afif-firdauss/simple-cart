import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductRoute } from 'router';
import { Loader } from 'components';

const NotFound = lazy(() => import('pages/NotFound'));

function App() {
  return (
    <div className="homepage">
      <Router>
        <Routes>
          {ProductRoute.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense>
              }
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes >
      </Router>
    </div>
  );
}

export default App;
