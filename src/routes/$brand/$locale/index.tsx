import { createFileRoute } from '@tanstack/react-router';
import { paramsSchema } from '../../../schemas/params';

export const Route = createFileRoute('/$brand/$locale/')({
  params: paramsSchema,
  component: LocaleComponent,
});

function LocaleComponent() {
  const { brand, locale } = Route.useParams();
  return (
    <div>
      <h1>Brand: {brand}</h1>
      <h2>Locale: {locale}</h2>
    </div>
  );
}
