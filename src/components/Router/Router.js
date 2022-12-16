import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Get_Book from "../Get_Book/Get_Book";
import Add_Book from "../Addbook/Add_Book";
import Edit_Book from "./../Edit_Book/Edit_Book";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Get_Book />} />
          <Route path="/addbook" element={<Add_Book />} />
          <Route path="/editbook/:id" element={<Edit_Book />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;