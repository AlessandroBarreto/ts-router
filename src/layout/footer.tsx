import { FooterLabels, legal } from './utils';
import { EnnismoreLogo } from '../assets/ennismore-logo';
type LegalUrl = keyof typeof legal.urls.en;

const Copyright = ({ color }: { color: string }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center sm:gap-4 gap-5">
      <span className={`text-[${color}]`}>© Ennismore 2025</span>
      <a
        href="https://www.ennismore.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <EnnismoreLogo width={56} height={27} fill={color} />
      </a>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#F9EEEC] border-t border-[#1F2145] 2xl:px-20 sm:px-6 sm:py-8 py-10">
      <div className="flex-between lg:flex-row flex-col gap-9">
        <div className="flex items-center md:flex-row flex-col gap-6">
          {FooterLabels.map(({ label, key }) => (
            <a
              href={legal.urls['en'][key as LegalUrl]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1F2145] xl:text-lg text-sm uppercase"
            >
              {label}
            </a>
          ))}
        </div>
        <Copyright color="#1F2145" />
      </div>
    </footer>
  );
};
