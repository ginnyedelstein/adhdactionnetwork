"use client";

import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-weight: 700;
  font-size: 1rem;
  color: #1a1a2e;
`;

const LogoIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  font-size: 0.875rem;
  flex-shrink: 0;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: 0.9rem;
  color: #4b5563;
  font-weight: 500;
  transition: color 0.15s;

  &:hover {
    color: #2563eb;
  }
`;

const CTAButton = styled.a`
  background: #1d4ed8;
  color: #ffffff;
  padding: 0.5rem 1.125rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  transition: background 0.15s;
  white-space: nowrap;

  &:hover {
    background: rgb(56 162 37);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: #374151;
    border-radius: 2px;
    transition: all 0.2s;
  }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    flex-direction: column;
    padding: 1rem 1.5rem 1.5rem;
    border-top: 1px solid #e5e7eb;
    gap: 1rem;
  }
`;

const MobileLink = styled(Link)`
  font-size: 1rem;
  color: #374151;
  font-weight: 500;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f3f4f6;
`;

const MobileCTA = styled.a`
  background: rgb(56 162 37);
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  margin-top: 0.5rem;
`;

const JOIN_URL =
  "https://forms.fillout.com/t/r6JmuqVA4Dus";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <NavInner>
        <Logo href="/">
          <LogoIcon><img src="/logo_small.png" alt="ADHD Action Network" /></LogoIcon>          ADHD Action Network
        </Logo>

        <NavLinks>
          <li>
            <NavLink href="#programmes">Programmes</NavLink>
          </li>
          <li>
            <NavLink href="#aboutus">About Us</NavLink>
          </li>
        </NavLinks>

        <CTAButton href={JOIN_URL} target="_blank" rel="noopener noreferrer">
          Join The Programme
        </CTAButton>

        <HamburgerButton
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </HamburgerButton>
      </NavInner>

      <MobileMenu $open={menuOpen}>
        <MobileLink href="#programmes" onClick={() => setMenuOpen(false)}>
          Programmes
        </MobileLink>
        <MobileLink href="#aboutus" onClick={() => setMenuOpen(false)}>
          About Us
        </MobileLink>
        <MobileCTA href={JOIN_URL} target="_blank" rel="noopener noreferrer">
          Join The Programme
        </MobileCTA>
      </MobileMenu>
    </Nav>
  );
}
