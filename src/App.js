import React, { Suspense, lazy } from "react";
import Loading from "./Components/Loading/Loading";
import Home from "./Screen/Home";
import Vaccines from "./Screen/Vaccines";
import Sintomi from "./Screen/Sintomi";
import ErrorPage from "./Screen/ErrorPage";
import Error from "./Components/Error/Error";
import {
  loaderDataSidebar,
  loaderDataCovid,
  loaderDataVaccines,
} from "./Loader";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const HomePage = lazy(() => import("./Screen/HomePage"));

function App() {
  const pages = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        }
        path="/"
        loader={loaderDataSidebar}
        errorElement={<Error />}
      >
        <Route
          element={<Home />}
          index
          loader={loaderDataCovid}
          errorElement={<Error />}
        />
        <Route
          element={<Vaccines />}
          path="/vaccini"
          loader={loaderDataVaccines}
          errorElement={<Error />}
        />
        <Route element={<Sintomi />} path="/sintomi" />
        <Route element={<ErrorPage />} path="*" />
      </Route>
    )
  );
  return <RouterProvider router={pages} />;
}

export default App;
