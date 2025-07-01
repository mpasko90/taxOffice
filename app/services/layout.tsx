import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usługi księgowe | Biuro rachunkowe w Miliczu",
  description: "Oferujemy kompleksowe usługi księgowe, kadrowo-płacowe oraz doradztwo podatkowe. Sprawdź naszą ofertę i cennik usług księgowych.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
