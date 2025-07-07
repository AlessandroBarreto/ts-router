import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$brand/$locale/availability')({
  component: Availability,
});

function Availability() {
  const { brand, locale } = Route.useParams();
  return (
    <div>
      <h1>Availability Page</h1>
      <h3>Brand: {brand}</h3>
      <h3>Locale: {locale}</h3>
    </div>
  );
}
