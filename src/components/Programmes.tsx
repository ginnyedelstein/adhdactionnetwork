"use client";

import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 1.5rem;
  background: #f9fafb;
  scroll-margin-top: 64px;
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
  max-width: 580px;
  margin: 0 auto;
  line-height: 1.65;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
`;

const CardIcon = styled.div`
  width: 44px;
  height: 44px;
  background: #eff6ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  font-size: 1.25rem;
`;

const CardTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
`;

const CardText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.25rem;
`;

const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: auto;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #374151;

  &::before {
    content: "✓";
    color: #2563eb;
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 1px;
  }
`;

const FeaturedCard = styled.div`
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  border-radius: 12px;
  padding: 2.5rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FeaturedContent = styled.div`
  flex: 1;
`;

const FeaturedBadge = styled.span`
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  margin-bottom: 0.75rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const FeaturedTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
`;

const FeaturedText = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  max-width: 480px;
`;

const FeaturedMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.25rem;
  flex-wrap: wrap;
`;

const MetaBadge = styled.span`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.3rem 0.75rem;
  border-radius: 6px;
`;

const JoinBtn = styled.a`
  background: #ffffff;
  color: #1d4ed8;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 700;
  white-space: nowrap;
  transition: all 0.15s;
  display: inline-block;
  flex-shrink: 0;

  &:hover {
    background: #f0f9ff;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const JOIN_URL =
  "https://forms.fillout.com/t/p35enEL9UKus";

const programmes = [
  {
    icon: "🔬",
    title: "Research-Informed Peer Support",
    text: "Join our structured 7-week ADHD & Addiction Recovery Programme, aligned with NICE ADHD Guidelines, offering practical tools for real transformation.",
    features: [
      "FREE 7-week programme",
      "Limited to 12 spaces per cohort",
      "Research-informed approach",
    ],
  },
  {
    icon: "🛠️",
    title: "Comprehensive ADHD Support",
    text: "Access tools for relationship building, work challenges, diet, exercise and sleep management via a custom action plan within a supportive group environment.",
    features: [
      "Custom action plans",
      "Supportive group setting",
      "Practical daily strategies",
    ],
  },
  {
    icon: "🌐",
    title: "Expert-Led Community Network",
    text: "Connect with healthcare professionals, researchers, and individuals with lived ADHD experience in the UK's most supportive neurodiversity community.",
    features: [
      "Healthcare professional network",
      "Research-backed methodologies",
      "Lived experience sharing",
    ],
  },
];

export default function Programmes() {
  return (
    <Section id="programmes">
      <Inner>
        <SectionHeader>
          <SectionTitle>Our Programmes</SectionTitle>
          <SectionSub>
            Research-informed support programmes designed to create lasting
            change in your ADHD management journey
          </SectionSub>
        </SectionHeader>

        <Grid>
          {programmes.map((p) => (
            <Card key={p.title}>
              <CardIcon>{p.icon}</CardIcon>
              <CardTitle>{p.title}</CardTitle>
              <CardText>{p.text}</CardText>
              <FeatureList>
                {p.features.map((f) => (
                  <FeatureItem key={f}>{f}</FeatureItem>
                ))}
              </FeatureList>
            </Card>
          ))}
        </Grid>

        <FeaturedCard>
          <FeaturedContent>
            <FeaturedBadge>Featured Programme</FeaturedBadge>
            <FeaturedTitle>ADHD &amp; Addiction Recovery Programme</FeaturedTitle>
            <FeaturedText>
              Are you living with ADHD and facing challenges with addiction?
              Transform your journey with our supportive, research-informed peer
              group offering practical tools for lasting change.
            </FeaturedText>
            <FeaturedMeta>
              <MetaBadge>FREE programme</MetaBadge>
              <MetaBadge>Limited to 12 spaces</MetaBadge>
              <MetaBadge>7-week duration</MetaBadge>
            </FeaturedMeta>
          </FeaturedContent>
          <JoinBtn href={JOIN_URL} target="_blank" rel="noopener noreferrer">
            Join the Programme
          </JoinBtn>
        </FeaturedCard>
      </Inner>
    </Section>
  );
}
