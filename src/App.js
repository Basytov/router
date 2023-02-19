import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./components/page/HomePage";
import MyCard from "./components/myCard/MyCart";
import MyOrders from "./components/myOrders/MyOrders";
import ProductPage from "./components/productPage/ProductPage";
import ProductDetails from "./components/productDetails/ProductDetails";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />

        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/my-card" element={<MyCard />} />
        <Route path="/my-orders" element={<MyOrders />} />
      </Routes>
      <StyledButton onClick={() => navigate(-1)}>Go back</StyledButton>
     
    </div>
  );
}

export default App;


const StyledButton = styled.button`
  text-decoration: none;
  font-size: 20px;
  border: none;
  color: white;
margin-left: 500px;

  border-radius: 20px;
  :hover {
    background-color: #0caea6;
  }
`;
