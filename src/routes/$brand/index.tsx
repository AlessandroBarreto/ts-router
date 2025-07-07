import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$brand/')({
  component: BrandComponent,
});

function BrandComponent() {
  const { brand } = Route.useParams();
  return (
    <div>
      <h1>Brand: {brand}</h1>
    </div>
  );
}
