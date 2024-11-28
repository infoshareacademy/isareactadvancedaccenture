import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Admin } from "./admin";
import { Menu } from "./menu";
import { Details } from "./menu/details";
import { Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { PageWrapper } from "../common/page-wrapper";

export const Content = () => (
  <Suspense
    fallback={
      <PageWrapper title="LALAA">
        <CircularProgress />
      </PageWrapper>
    }
  >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/:id" element={<Details />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </Suspense>
);
