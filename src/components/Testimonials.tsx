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
  max-width: 400px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

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

const QuoteMark = styled.div`
  font-size: 3rem;
  line-height: 1;
  color: #bfdbfe;
  font-family: Georgia, serif;
  margin-bottom: 0.75rem;
`;

const Quote = styled.p`
  font-size: 0.9rem;
  color: #374151;
  line-height: 1.7;
  flex: 1;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const Attribution = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-top: 1px solid #f3f4f6;
  padding-top: 1.25rem;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2563eb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
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

const testimonials = [
  {
    quote:
      "I'm glad I joined the programme. Alongside giving me practical strategies to manage my ADHD, I have made an accountability partner from the group which I hope I will continue with once the cohort has ended.",
    name: "Josh",
    role: "7-Week Programme Alumni",
    initial: "J",
    color: "rgb(138 30 30)",
  },
  {
    quote:
      "Amelia and Nick have been amazing facilitators, their knowledge, empathy and encouragement have helped the group, bringing us together and helping us share our own personal stories, tools and strategies. The group has provided me with a much-needed outlet and place where I feel I belong.",
    name: "Jane",
    role: "7-Week Programme Alumni",
    initial: "J",
  },
  {
    quote:
      "I have been so grateful to be a part of this cohort (Jun-Jul 2025). I don't currently have a formal diagnosis, but a couple of mental health professionals suggested it. The group has helped me explore this and it felt like I found a place where I was understood and inspired by the talks and discussions.",
    name: "Katie",
    role: "7-Week Programme Alumni",
    initial: "K",
    color: "rgb(56 162 37)",
  },
  // {
  //   quote:
  //     "As a clinician and an ADHD individual this has been a transformative experience for me. In 7 weeks to have learnt so much about myself, my ADHD and how to manage it is unparalleled, this is such an incredible program and I wish it was available to everyone.",
  //   name: "Dr Gia Whitecross",
  //   role: "Consultant Psychiatrist, MBBS, MRCPsych, MSc (Distinction), PGDipCAT (participant in London Borough of Islington programme December 2025)",
  //   initial: "W",
  //   color: "#839605",
  // },
];

export default function Testimonials() {
  return (
    <Section id="community">
      <Inner>
        <SectionHeader>
          <SectionTitle>Community Stories</SectionTitle>
          <SectionSub>
            Hear from members who&apos;ve transformed their ADHD journey
          </SectionSub>
        </SectionHeader>
        <Grid>
          {testimonials.map((t) => (
            <Card key={t.name + t.quote.slice(0, 10)}>
              <QuoteMark>&ldquo;</QuoteMark>
              <Quote>{t.quote}</Quote>
              <Attribution>
                <Avatar style={{ background: t.color ?? "#2563eb" }}>
                  {t.initial}
                </Avatar>
                <AuthorInfo>
                  <AuthorName>{t.name}</AuthorName>
                  <AuthorRole>{t.role}</AuthorRole>
                </AuthorInfo>
              </Attribution>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}
