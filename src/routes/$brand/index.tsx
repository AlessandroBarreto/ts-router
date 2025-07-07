import { createFileRoute } from '@tanstack/react-router';
import { brandSchema } from '../../schemas/params';

export const Route = createFileRoute('/$brand/')({
  parseParams: (params) => ({
    brand: brandSchema.parse(params.brand),
  }),
  // stringifyParams: ({ brand }) => ({ brand }),
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
