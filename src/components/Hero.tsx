"use client";

import styled from "styled-components";

const HeroSection = styled.section`
  background: linear-gradient(135deg, rgb(138 30 30) 0%, #1d4ed8 50%, rgb(56 162 37) 100%);
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

const VideoStatsLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  overflow: hidden

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StatColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 1.25rem 1rem;
  text-align: center;
  max-width: 180px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
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
  align-items: baseline;
  gap: 0.5rem;
`;

const AuthorName = styled.div`
  font-weight: 700;
  font-size: 0.9rem;
  color: #111827;
  white-space: nowrap;
  display: inline-block;
  gap: 1.5rem;
`;

const AuthorRole = styled.div`
  font-size: 0.8rem;
  color: #9ca3af;
  display: inline-block;
`;

const Card = styled.div`
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem 1.75rem;
  text-align: left;
  margin: 0 30px;
`;

const JOIN_URL = "https://forms.fillout.com/t/r6JmuqVA4Dus";

const stats = [
  { value: "82%", label: "of participants learnt new ADHD management strategies*" },
  { value: "100%", label: "of participants highly recommended the programme*" },
  { value: "100%", label: "of participants reported reduced ADHD symptoms*" },
  { value: "15%", label: "less GP visits due to programme*" },
];

export default function Hero() {
  return (
    <HeroSection>
      <HeroTitle>Transform Your ADHD Journey</HeroTitle>
      <HeroSub>
        Join the leading ADHD community for research-informed peer support,
        practical tools, and meaningful connections that foster real change and
        personal growth.
      </HeroSub>

      <VideoStatsLayout>
        <StatColumn>
          {stats.slice(0, 2).map((s) => (
            <StatCard key={s.value}>
              <StatValue>{s.value}</StatValue>
              <StatLabel>{s.label}</StatLabel>
            </StatCard>
          ))}
        </StatColumn>

        <video
          controls
          loop
          playsInline
          style={{ width: "40%", height: "auto", borderRadius: "10px", flexShrink: 0 }}
        >
          <source src="/trailer.mp4" type="video/mp4" />
        </video>

        <StatColumn>
          {stats.slice(2, 4).map((s) => (
            <StatCard key={s.value}>
              <StatValue>{s.value}</StatValue>
              <StatLabel>{s.label}</StatLabel>
            </StatCard>
          ))}
        </StatColumn>
      </VideoStatsLayout>

      <Card>
        <Quote>
          &ldquo;As a clinician and an ADHD individual this has been a
          transformative experience for me. In 7 weeks to have learnt so much
          about myself, my ADHD and how to manage it is unparalleled, this is
          such an incredible program and I wish it was available to
          everyone.&rdquo;
        </Quote>
        <Attribution>
          <AuthorName>Dr. Gia Whitecross, </AuthorName>
          <AuthorRole>
            Consultant Psychiatrist, MBBS, MRCPsych, MSc (Distinction),
            PGDipCAT
          </AuthorRole>
        </Attribution>
      </Card>

      <br />

      <div style={{ fontSize: "x-small" }}>
        *Results from 35 programme participants funded by Public Health England
        in December 2025
      </div>
    </HeroSection >
  );
}