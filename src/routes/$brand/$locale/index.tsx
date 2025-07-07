import { createFileRoute } from '@tanstack/react-router';
import { paramsSchema } from '../../../schemas/params';
import { useBrandLocaleTranslation } from '../../../hooks/useBrandLocaleTranslation';

export const Route = createFileRoute('/$brand/$locale/')({
  params: paramsSchema,
  component: LocaleComponent,
});

function LocaleComponent() {
  const { brand, locale } = Route.useParams();
  const { t } = useBrandLocaleTranslation(locale);

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <h2>
        {t('brand')}: {brand}
      </h2>
      <h2>
        {t('locale')}: {locale}
      </h2>
    </div>
  );
}
