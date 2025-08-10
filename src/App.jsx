import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import RootLayout from "./layout/RootLayout";
import SellPage from "./SellPage";
import BuyPage from "./BuyPage";
import Support from "./Support";
import { loader, productDetailsLoader } from "./loader/loader";
import ProductsDetails from "./ProductsDetails";
import BuyLayout from "./BuyLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} loader={loader} />
        <Route path="sell" element={<SellPage />} />
        <Route path="buy" element={<BuyLayout />}>
          <Route index element={<BuyPage />} loader={loader} />
        </Route>
        <Route
          path=":id"
          element={<ProductsDetails />}
          loader={productDetailsLoader}
        />
        <Route path="support" element={<Support />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
