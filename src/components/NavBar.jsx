import { useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";

const NavBar = ({filterBySearch}) => {
  const [search,setSearch] = useState("")
  const handelForm = (e)=>{
    e.preventDefault();
    filterBySearch(search)
    setSearch("")
  }
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <div className="brand-color">مطعم جديد</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control value={search} onChange={(e) => {
              setSearch(e.target.value);
            }
            } type="text" placeholder="ابحث.." className="mx-2" />
            <button onClick={handelForm} className="btn-search">بحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
