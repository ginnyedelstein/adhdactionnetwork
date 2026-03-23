"use client";

import styled from "styled-components";

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%);
  color: white;
  padding: 3.5rem 1.5rem 3.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
        ellipse at 20% 50%,
        rgba(255, 255, 255, 0.05) 0%,
        transparent 60%
      ),
      radial-gradient(
        ellipse at 80% 20%,
        rgba(255, 255, 255, 0.05) 0%,
        transparent 60%
      );
    pointer-events: none;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.35rem 0.875rem;
  border-radius: 100px;
  margin-bottom: 1.5rem;
  letter-spacing: 0.02em;
`;

const BadgeDot = styled.span`
  width: 6px;
  height: 6px;
  background: #86efac;
  border-radius: 50%;
  display: inline-block;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroSub = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.65;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
`;

const PrimaryBtn = styled.a`
  background: #ffffff;
  color: #1d4ed8;
  padding: 0.75rem 1.75rem;
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

const SecondaryBtn = styled.a`
  background: rgba(255, 255, 255, 0.12);
  color: white;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.15s;
  display: inline-block;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 700px;
  margin: 0px auto 2.5rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 1.25rem 1rem;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.4rem;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.3;
`;

const Quote = styled.p`
  font-size: 0.9rem;
  color: #374151;
  line-height: 1.7;
  flex: 1;
  margin-bottom: 1rem;
  font-style: italic;
`;

const Attribution = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  font-weight: 700;
  font-size: 0.9rem;
  color: #111827;
`;

const AuthorRole = styled.div`
  font-size: 0.8rem;
  color: #9ca3af;
`;

const Card = styled.div`
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem 1.75rem;
  text-align: left;
`;

const JOIN_URL =
  "https://forms.fillout.com/t/r6JmuqVA4Dus";

const stats = [
  { value: "82%", label: "of participants learnt new ADHD management strategies*" },
  { value: "100%", label: "of participants highly recommended the programmee*" },
  { value: "100%", label: "of participants reported reduced ADHD symptoms*" },
  { value: "15%", label: "less GP visits due to programme*" },
];

export default function Hero() {
  return (
    <HeroSection>
      <Badge>
        <BadgeDot />
        NICE Guidelines Aligned
      </Badge>
      <HeroTitle>Transform Your ADHD Journey</HeroTitle>
      <HeroSub>
        Join the leading ADHD community for research-informed peer
        support, practical tools, and meaningful connections that foster real
        change and personal growth.
      </HeroSub>
      {/* <ButtonGroup>
        <PrimaryBtn href={JOIN_URL} target="_blank" rel="noopener noreferrer">
          Join The Programme
        </PrimaryBtn>
      </ButtonGroup> */}
      <StatsGrid>
        {stats.map((s) => (
          <StatCard key={s.value}>
            <StatValue>{s.value}</StatValue>
            <StatLabel>{s.label}</StatLabel>
          </StatCard>
        ))}
      </StatsGrid>
      <Card>
        <Quote>"As a clinician and an ADHD individual this has been a transformative experience for me. In 7 weeks to have
          learnt so much about myself, my ADHD and how to manage it is unparalleled, this is such an incredible program and I wish it was available to everyone."</Quote>
        <Attribution>
          <AuthorInfo>
            <AuthorName>Dr. Gia Whitecross</AuthorName>
            <AuthorRole>Consultant Psychiatrist, MBBS, MRCPsych, MSc
              (Distinction), PGDipCAT (participant in London Borough of Islington programme December 2025)</AuthorRole>
          </AuthorInfo>
        </Attribution>
      </Card>
      <br />
      <div style={{ fontSize: "x-small" }}>
        *Results from 35 programme participants funded by Public Health England in December 2025
      </div>
    </HeroSection>
  );
}
