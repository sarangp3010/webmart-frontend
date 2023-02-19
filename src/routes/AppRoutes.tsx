import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { BarsLoader } from "../components/loader/loader";
import routes from "../routes/routes";

const AppRoutes = () => {
  return (
    <Suspense fallback={<BarsLoader />}>
      <div className="h-screen bg-indigo-100">
        <div className="px-4 m-0">
          <Routes>
            {(routes || []).map(({ element: Element, path }, index) => (
              <>
                <Route path={`/${path}`} element={<Element />} key={index} />
              </>
            ))}
          </Routes>
        </div>
      </div>
    </Suspense>
  );
};

export default AppRoutes;
