"use client";

import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 1.5rem;
  background: #ffffff;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 800;
  color: #111827;
  margin-bottom: 1rem;
`;

const SectionSub = styled.p`
  font-size: 1.05rem;
  color: #6b7280;
  max-width: 400px;
  margin: 0 auto;
`;

const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 769px) {
    &::before {
      content: "";
      position: absolute;
      top: 28px;
      left: calc(16.66% + 28px);
      right: calc(16.66% + 28px);
      height: 2px;
      background: #e5e7eb;
      z-index: 0;
    }
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const StepNumber = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #2563eb;
  color: white;
  font-size: 1.25rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 0 6px #eff6ff;
`;

const StepTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.6rem;
`;

const StepText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.65;
  max-width: 280px;
`;

const steps = [
  {
    n: 1,
    title: "Join Our Free Programme",
    text: "Sign up for our research-informed ADHD support programme. No cost, just commitment to your growth and recovery journey.",
  },
  {
    n: 2,
    title: "Connect with our Community",
    text: "Join a supportive group of up to 12 members, guided by trained facilitators using NICE-aligned methodologies.",
  },
  {
    n: 3,
    title: "Transform Your ADHD Management",
    text: "Build lasting relationships, develop effective coping strategies, and create sustainable systems for managing ADHD in daily life.",
  },
];

export default function HowItWorks() {
  return (
    <Section>
      <Inner>
        <SectionHeader>
          <SectionTitle>How It Works</SectionTitle>
          <SectionSub>Simple steps to start your transformation</SectionSub>
        </SectionHeader>
        <Steps>
          {steps.map((s) => (
            <Step key={s.n}>
              <StepNumber>{s.n}</StepNumber>
              <StepTitle>{s.title}</StepTitle>
              <StepText>{s.text}</StepText>
            </Step>
          ))}
        </Steps>
      </Inner>
    </Section>
  );
}
