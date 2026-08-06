import {
  FileText,
  Home,
  MapPin,
  ShieldCheck,
  TrendingUp,
  Scale,
} from "lucide-react";

const categories = [
  {
    title: "Buying Property",
    icon: Home,
    description: "Guidance for buying land or homes.",
  },
  {
    title: "Investment",
    icon: TrendingUp,
    description: "Explore investment opportunities.",
  },
  {
    title: "Property Documents",
    icon: FileText,
    description: "Understand titles and legal documents.",
  },
  {
    title: "Locations",
    icon: MapPin,
    description: "Learn about neighbourhoods and cities.",
  },
  {
    title: "Due Diligence",
    icon: ShieldCheck,
    description: "Reduce risk before committing.",
  },
  {
    title: "Legal Guidance",
    icon: Scale,
    description: "Know when professional advice is needed.",
  },
];

export function AskCategories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Explore by Decision
        </h2>

        <p className="mt-3 text-muted-foreground">
          Start with the type of property decision you're trying to make.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="rounded-2xl border bg-card p-6 transition hover:shadow-lg"
          >
            <Icon className="mb-4 h-8 w-8 text-teal-700" />

            <h3 className="text-xl font-semibold">
              {title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}