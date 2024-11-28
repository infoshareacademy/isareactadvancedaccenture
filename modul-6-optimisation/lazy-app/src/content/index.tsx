import { Route, Routes } from "react-router-dom";
import { Menu } from "./menu";
import { Details } from "./details";
import { lazy, Suspense } from "react";

const LazyHome = lazy(() => import("./home"));
const LazyAdmin = lazy(() =>
  import("./admin").then((module) => ({ default: module.Admin }))
);

export const Content = () => (
  <Suspense fallback={<h1>Loading</h1>}>
    <Routes>
      <Route path="/" element={<LazyHome />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/:id" element={<Details />} />
      <Route path="/admin" element={<LazyAdmin />} />
    </Routes>
  </Suspense>
);
