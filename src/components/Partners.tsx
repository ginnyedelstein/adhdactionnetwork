"use client";

import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 1.5rem;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: #111827;
  margin-bottom: 0.75rem;
`;

const SectionSub = styled.p`
  font-size: 0.95rem;
  color: #6b7280;
  max-width: 580px;
  margin: 0 auto;
  line-height: 1.6;
`;

const PartnerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const PartnerBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1.25rem 1.75rem;
  min-width: 120px;
  text-align: center;
`;

const PartnerAbbr = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #2563eb;
`;

const PartnerName = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  line-height: 1.4;
  max-width: 120px;
`;

const FooterNote = styled.p`
  text-align: center;
  font-size: 0.85rem;
  color: #9ca3af;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-style: italic;
`;

const partners = [
  { abbr: "NHS", name: "North London NHS Foundation Trust" },
  { abbr: "KCL", name: "King's College London" },
  { abbr: "UCL", name: "University College London" },
  { abbr: "CoE", name: "Community of Excellence" },
  { abbr: "Council", name: "Islington Council, London" },
];

export default function Partners() {
  return (
    <Section>
      <Inner>
        <SectionHeader>
          <SectionTitle>Our Partners &amp; Sponsors</SectionTitle>
          <SectionSub>
            Working together with leading institutions and organizations to
            deliver research-informed ADHD support across the UK
          </SectionSub>
        </SectionHeader>
        <PartnerRow>
          {partners.map((p) => (
            <PartnerBadge key={p.abbr}>
              <PartnerAbbr>{p.abbr}</PartnerAbbr>
              <PartnerName>{p.name}</PartnerName>
            </PartnerBadge>
          ))}
        </PartnerRow>
        <FooterNote>
          In partnership with leading healthcare, academic, and community
          organizations committed to improving ADHD support and outcomes
        </FooterNote>
      </Inner>
    </Section>
  );
}
