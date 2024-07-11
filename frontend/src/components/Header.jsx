import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import styles from "./Header.module.css";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Badge, NavDropdown } from "react-bootstrap";
import { useLogoutMutation } from "../slice/userApiSlice";
import { logout } from "../slice/authSlice";
export const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logoutApiCall] = useLogoutMutation();

  const logouthandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("login");
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(cartItems);
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="md" className="bg-dark">
          <Container>
            <LinkContainer to={"/"}>
              <Navbar.Brand className="text-light ">Super Shop</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className={styles.toggle}
            />
            <Navbar.Collapse id="responsive-navbar-nav ">
              <Nav className="me-auto "></Nav>
              <Nav>
                <LinkContainer to={"/cart"}>
                  <Nav.Link className={styles.navIcons}>
                    <FaShoppingCart />
                    <span className="ps-1 cart">
                      Cart
                      {cartItems.length > 0 && (
                        <Badge pill bg="success" style={{ marginLeft: "5px" }}>
                          {cartItems.reduce((a, c) => {
                            let qty = Number(c.qty);
                            return a + qty;
                          }, 0)}
                        </Badge>
                      )}
                    </span>
                  </Nav.Link>
                </LinkContainer>
                {userInfo ? (
                  <>
                    <NavDropdown title={userInfo.name} id="username">
                      <LinkContainer to={"/profile"}>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logouthandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <LinkContainer to={"/login"}>
                    <Nav.Link
                      eventKey={2}
                      className={`btn btn-dark ${styles.navIcons}`}
                    >
                      <IoMdContact />
                      <span className="ps-1 ">Sign In</span>
                    </Nav.Link>
                  </LinkContainer>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};
