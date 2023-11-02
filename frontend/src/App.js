import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import{LinkContainer} from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/esm/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SigninScreen from './screens/SigninScreen';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShippingAddressScreen from './screens/ShippingAddress';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import Button from 'react-bootstrap/Button';
import {useState,useEffect } from 'react';
import axios from 'axios';
import { getError } from './utils';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';





function App() {

  const { state,dispatch: ctxDispatch} = useContext(Store);
  const {cart,userInfo} = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
  localStorage.removeItem('shippingAddress');
  localStorage.removeItem('paymentMethod');
  window.location.href = '/signin';
  
 
};

const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);


  return (
    <BrowserRouter>
     <div className={
          sidebarIsOpen
            ? 'd-flex flex-column site-container active-cont'
            : 'd-flex flex-column site-container'
        }
      >
    <ToastContainer position="bottom-center" limit={1} />
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Button variant="dark"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <i className="fas fa-bars"></i>
              </Button>

            <LinkContainer to="/">
            <Navbar.Brand>Shopzyy</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls='basic-navbar'/>
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
            <SearchBox />
            <Nav className="me-auto w-100 justify-content-end">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/chatbot">
                      <NavDropdown.Item>Chat here</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                )}
              </Nav>
          </Container>
          </Navbar>

      </header>

      <div
          className={
            sidebarIsOpen
              ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
          <Nav className="flex-column text-white w-100 p-2">
            <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer
                  to={`/search/category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link>{category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </div>

      <main>
      <Container className="mt-3">
        <Routes>

          <Route path="/product/:slug" element={<ProductScreen/>}/>
          <Route path="/search" element={<SearchScreen/>} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/shipping"element={<ShippingAddressScreen />}></Route>
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/order/:id" element={<OrderScreen />}></Route>
          <Route path="/payment" element={<PaymentMethodScreen />}></Route>
          <Route path="/" element={<HomeScreen/>}/>

        </Routes>
        </Container>
      </main>
      <footer>
        <div className='text-center'>All rights reserved</div>
        </footer>
    </div>
    </BrowserRouter>
    
     
  );
}

export default App;
