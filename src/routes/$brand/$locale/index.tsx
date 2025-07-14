import { createFileRoute } from '@tanstack/react-router';
import { paramsSchema } from '../../../schemas/params';
import { useBrandLocaleTranslation } from '../../../hooks/useBrandLocaleTranslation';
import '../../../index.css';

export const Route = createFileRoute('/$brand/$locale/')({
  params: paramsSchema,
  component: LocaleComponent,
});

function LocaleComponent() {
  const { brand, locale } = Route.useParams();
  const { t } = useBrandLocaleTranslation(locale);

  return (
    <div className={`theme-${brand} bg-primary`}>
      <h1 className="text-3xl text-mint-500">{t('welcome')}</h1>
      <h2 className="text-2xl">
        {t('brand')}: {brand}
      </h2>
      <h2 className="text-1xl">
        {t('locale')}: {locale}
      </h2>
    </div>
  );
}
