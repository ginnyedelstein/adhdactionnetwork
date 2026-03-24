"use client";

import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 1.5rem;
  background: #f9fafb;
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
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #111827;
  margin-bottom: 0.75rem;
`;

const SectionSub = styled.p`
  font-size: 1rem;
  color: #6b7280;
  max-width: 550px;
  margin: 0 auto;
  line-height: 1.65;
`;

const Layout = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  /* gap: 2rem; */
  align-items: start;

  @media (max-width: 768px) {
    /* grid-template-columns: 1fr; */
  }
`;

const TeamCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const TeamCard = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.75rem;
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
`;

const Avatar = styled.div<{ $color: string }>`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  flex-shrink: 0;
`;

const MemberInfo = styled.div`
  flex: 1;
`;

const MemberName = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.2rem;
`;

const MemberRole = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

const MemberBio = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 0.75rem;
`;

const Links = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const ContactLink = styled.a`
  font-size: 0.8rem;
  color: #2563eb;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const AboutBox = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
`;

const AboutTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.875rem;
`;

const AboutText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const GoalBox = styled.div`
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
`;

const GoalTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 0.5rem;
`;

const GoalText = styled.p`
  font-size: 0.85rem;
  color: #3b82f6;
  line-height: 1.65;
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
`;

const ValueItem = styled.div`
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.875rem;
`;

const ValueTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.2rem;
`;

const ValueSub = styled.div`
  font-size: 0.75rem;
  color: #9ca3af;
`;

const team = [
  {
    initials: "NP",
    color: "#2563eb",
    name: "Nick Pairaudeau",
    role: "Founder & Director",
    bio: "Operations and strategy leader driving innovation in ADHD support blending community-driven solutions with academic research-driven approaches and technology.",
    email: "info@adhdactionnetwork.com",
    linkedin: "https://www.linkedin.com/in/nick-pairaudeau",
  },
  {
    initials: "EC",
    color: "#7c3aed",
    name: "Ella Cockman",
    role: "Research Lead",
    bio: "Leading research initiatives to ensure our programmes are grounded in the latest ADHD science and clinical best practices.",
    email: "ella.cockman@nhs.net",
    linkedin: "https://www.linkedin.com/in/ella-cockman",
  },
];

const values = [
  { title: "Collaboration", sub: "Working together" },
  { title: "Co-Production", sub: "Built with community" },
  { title: "Innovation", sub: "Forward-thinking" },
  { title: "Resilience", sub: "Persist through hardship" },
];

export default function Team() {
  return (
    <Section id="aboutus">
      <Inner>
        <SectionHeader>
          <SectionTitle>About Us</SectionTitle>
          <SectionSub>
            A dedicated team of passionate problem solvers committed to building
            robust support networks for the ADHD community
          </SectionSub>
        </SectionHeader>

        <Layout>
          <AboutBox>
            <AboutTitle>Who We Are</AboutTitle>
            <AboutText>
              ADHD Action Network was founded and is led by Nick Pairaudeau who only discovered he had ADHD after 51 years
              of not finding his place in this non-ADHD world. After his diagnosis he looked around for help and encouragement,
              but couldn’t find what he was searching for. So, he embarked on a journey to create a warm, supportive, practical
              and scientifically informed community that would welcome all those living with ADHD symptoms, whether
              diagnosed or not.
            </AboutText>
            <AboutText>
              From the beginning, our programme has been designed by people with ADHD, and refined with feedback from
              participants over many hours. You will learn about ADHD, discover more about yourself and meet others who will
              share their successes and challenges, as you will with them.
            </AboutText>
            <AboutText>
              Our trained facilitators delivering the service also have ADHD and work in mental health in a variety of roles. This
              means they bring first‑hand insight, relevant skills, and deep understanding, placing them in a strong position to
              create a beautiful setting for you to find a new way to live your life with ADHD.
            </AboutText>

            <GoalBox>
              <GoalTitle>Our Current Goal</GoalTitle>
              <GoalText>
                In response to the current pressures on the NHS, our immediate
                goal is to establish a community-driven, peer-to-peer support
                network for individuals with ADHD. This initiative is led by
                experts with lived experience to provide holistic and accessible
                support for ADHD patients.
              </GoalText>
            </GoalBox>
            <AboutText>
              If you are interested in learning more about how you could be a part of this community please get in
              touch with us at:
              <a href="mailto:info@adhdactionnetwork.com" style={{ fontWeight: "bold" }}> info@adhdactionnetwork.com</a>
            </AboutText>
            {/* 
            <ValueGrid>
              {values.map((v) => (
                <ValueItem key={v.title}>
                  <ValueTitle>{v.title}</ValueTitle>
                  <ValueSub>{v.sub}</ValueSub>
                </ValueItem>
              ))}
            </ValueGrid> */}
          </AboutBox>
        </Layout>
      </Inner>
    </Section>
  );
}
