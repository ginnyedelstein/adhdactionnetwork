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
  max-width: 550px;
  margin: 0 auto;
  line-height: 1.65;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem 1.75rem;
`;

const CardIcon = styled.div`
  width: 44px;
  height: 44px;
  background: #eff6ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.25rem;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.6rem;
`;

const CardText = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
`;

const CommitmentBox = styled.div`
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 2rem 2.25rem;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const CommitmentText = styled.div`
  flex: 1;
`;

const CommitmentTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 0.5rem;
`;

const CommitmentBody = styled.p`
  font-size: 0.9rem;
  color: #3b82f6;
  line-height: 1.65;
`;

const NiceLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #2563eb;
  text-decoration: underline;
  white-space: nowrap;

  &:hover {
    color: #1d4ed8;
  }
`;

const foundations = [
  {
    icon: "🎯",
    title: "Mission",
    text: "Build a supportive ADHD community and space focusing on sharing experiences through practical and actionable strategies that will improve our lives.",
  },
  {
    icon: "👁️",
    title: "Vision",
    text: "Foster human connections to action change and growth.",
  },
  {
    icon: "💡",
    title: "Purpose",
    text: "To improve ADHD management outcomes through community support, customizable tailored tools and innovation.",
  },
];

export default function Foundation() {
  return (
    <Section>
      <Inner>
        <SectionHeader>
          <SectionTitle>Our Foundation</SectionTitle>
          <SectionSub>
            Building a supportive ADHD community through research-informed
            approaches and continuous innovation
          </SectionSub>
        </SectionHeader>

        <Grid>
          {foundations.map((f) => (
            <Card key={f.title}>
              <CardIcon>{f.icon}</CardIcon>
              <CardTitle>{f.title}</CardTitle>
              <CardText>{f.text}</CardText>
            </Card>
          ))}
        </Grid>

        <CommitmentBox>
          <CommitmentText>
            <CommitmentTitle>Our Commitment to Excellence</CommitmentTitle>
            <CommitmentBody>
              Our programme is unique — we actively listen and adapt. We collect
              feedback from our community and review the latest research to
              upgrade our processes, keeping pace with changing times and
              emerging best practices.
            </CommitmentBody>
            <NiceLink
              href="https://www.nice.org.uk/guidance/NG87"
              target="_blank"
              rel="noopener noreferrer"
            >
              View NICE ADHD Guidelines →
            </NiceLink>
          </CommitmentText>
        </CommitmentBox>
      </Inner>
    </Section>
  );
}
