"use client";

import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 1.5rem;
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  text-align: center;
  color: white;
`;

const Inner = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 1.25rem;
`;

const Sub = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.65;
  margin-bottom: 2.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.a`
  background: #ffffff;
  color: #1d4ed8;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 700;
  transition: all 0.15s;
  display: inline-block;

  &:hover {
    background: #f0f9ff;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const JOIN_URL =
  "https://forms.fillout.com/t/p35enEL9UKus";

export default function CTABanner() {
  return (
    <Section>
      <Inner>
        <Title>Ready to Transform Your ADHD Journey?</Title>
        <Sub>
          Join our free 7-week programme and become part of a community that
          understands your challenges and celebrates your successes.
        </Sub>
        <ButtonGroup>
          <PrimaryBtn href={JOIN_URL} target="_blank" rel="noopener noreferrer">
            Join Free Programme
          </PrimaryBtn>
        </ButtonGroup>
      </Inner>
    </Section>
  );
}
