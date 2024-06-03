"use client";
import {
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavItem,
  CNavLink,
  CNavTitle,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
} from "@coreui/react";
import { useState } from "react";

export default function NavBar() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CNavbar expand="lg" className="bg-body-tertiary">
        <CContainer fluid>
          <CNavbarBrand href="/ ">Browser Video AutoPlay Test</CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              {" "}
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle>Success Example</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="/test-scenario/normal-autoplay">
                    Normal Auto Play
                  </CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle>Scenarios</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="/test-scenario/normal-autoplay">
                    Normal Auto Play
                  </CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CNavItem>
                <CNavLink href="#">About</CNavLink>
              </CNavItem>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
}
