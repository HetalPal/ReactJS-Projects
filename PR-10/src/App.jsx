import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import AddMenu from "./component/AddMenu";
import MenuList from "./component/MenuList";
import EditMenu from "./component/EditMenu";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        {/* STARTER */}
        <Route path="/add-starter" element={<AddMenu category="starter" />} />
        <Route path="/starter-list" element={<MenuList category="starter" />} />

        {/* MAIN */}
        <Route path="/add-main" element={<AddMenu category="main" />} />
        <Route path="/main-list" element={<MenuList category="main" />} />

        {/* DRINK */}
        <Route path="/add-drink" element={<AddMenu category="drink" />} />
        <Route path="/drink-list" element={<MenuList category="drink" />} />

        {/* DESSERT */}
        <Route path="/add-dessert" element={<AddMenu category="dessert" />} />
        <Route path="/dessert-list" element={<MenuList category="dessert" />} />

        <Route path="/edit-menu/:id" element={<EditMenu />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;