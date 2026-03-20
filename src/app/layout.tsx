import type { Metadata } from "next";
import StyledComponentsRegistry from "@/src/lib/registry";
import GlobalStylesWrapper from "@/src/components/GlobalStylesWrapper";

export const metadata: Metadata = {
  title: "ADHD Action Network - Transform Your ADHD Journey",
  description:
    "Join the UK's leading ADHD community for research-informed peer support, practical tools, and meaningful connections that foster real change and personal growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStylesWrapper>{children}</GlobalStylesWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
