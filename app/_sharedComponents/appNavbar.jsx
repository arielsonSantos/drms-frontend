"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

export default function AppNavbar() {
    return (
        <Container fluid className="bg-body-tertiary mb-3">
            <ToastContainer autoClose={2000} draggablePercent={30} />
            <Navbar expand="lg">
                <Link href="/" passHref legacyBehavior>
                    <Navbar.Brand>{process.env.NEXT_PUBLIC_COMPANY_NAME}</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                            <Link href="/dumpsters" passHref legacyBehavior>
                                <NavDropdown.Item >Caçambas</NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}