"use client";

import styled from "styled-components";
import Link from "next/link";

const FooterEl = styled.footer`
  background: #111827;
  color: #d1d5db;
  padding: 4rem 1.5rem 2rem;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const BrandCol = styled.div``;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 1rem;
`;

const LogoIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  font-size: 0.75rem;
`;

const BrandName = styled.span`
  font-weight: 700;
  font-size: 0.95rem;
  color: #f9fafb;
`;

const BrandDesc = styled.p`
  font-size: 0.85rem;
  color: #9ca3af;
  line-height: 1.65;
  margin-bottom: 0.75rem;
`;

const ColTitle = styled.h4`
  font-size: 0.85rem;
  font-weight: 700;
  color: #f9fafb;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 1rem;
`;

const ColLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const ColLink = styled.li`
  a {
    font-size: 0.875rem;
    color: #9ca3af;
    transition: color 0.15s;

    &:hover {
      color: #e5e7eb;
    }
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #1f2937;
  margin-bottom: 1.5rem;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Legal = styled.div`
  font-size: 0.8rem;
  color: #6b7280;
  line-height: 1.6;
`;

export default function Footer() {
  return (
    <FooterEl>
      <Inner>
        <TopGrid>
          <BrandCol>
            <LogoRow>
              <LogoIcon><img src="/logo_small.png" alt="ADHD Action Network" /></LogoIcon>
              <BrandName>ADHD Action Network</BrandName>
            </LogoRow>
            <BrandDesc>
              Building a supportive ADHD community through research-informed
              peer support, practical tools, and connections that foster real
              change and growth.
            </BrandDesc>
            <BrandDesc>
              Our programme is aligned with NICE ADHD Guidelines and offers
              research-informed support for adults with ADHD across the UK.
            </BrandDesc>
          </BrandCol>

          <div>
            <ColTitle>Quick Links</ColTitle>
            <ColLinks>
              <ColLink>
                <Link href="#programmes">Programmes</Link>
              </ColLink>
              <ColLink>
                <Link href="#community">Community</Link>
              </ColLink>
              <ColLink>
                <Link href="mailto:info@adhdactionnetwork.com">Contact Us: info@adhdactionnetwork.com</Link>
              </ColLink>
            </ColLinks>
          </div>

          <div>
            <ColTitle>Resources</ColTitle>
            <ColLinks>
              <ColLink>
                <a
                  href="https://www.nice.org.uk/guidance/NG87"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NICE Guidelines
                </a>
              </ColLink>
              <ColLink>
                <a
                  href="https://www.nhs.uk/conditions/attention-deficit-hyperactivity-disorder-adhd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NHS ADHD Guide
                </a>
              </ColLink>
              <ColLink>
                <a
                  href="https://adhdaware.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ADHD Aware
                </a>
              </ColLink>
            </ColLinks>
          </div>

          <div>
            <img src="/logo_large.png" alt="ADHD Support" style={{ width: "100%", borderRadius: "23px" }} />
          </div>
        </TopGrid>

        <Divider />

        <BottomRow>
          <Legal>
            <div>ADHD ACTION NETWORK LTD · Policy Number: ABO 2448573</div>
            <div>© 2024 ADHD Action Network. Supporting the ADHD community across the UK.</div>
          </Legal>
        </BottomRow>
      </Inner>
    </FooterEl>
  );
}
