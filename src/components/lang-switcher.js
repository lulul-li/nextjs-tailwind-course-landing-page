// components/LanguageSwitcher.js

import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
    const router = useRouter();
    const { locales, locale, asPath } = router;

    const changeLanguage = (newLocale) => {
        router.push(asPath, asPath, { locale: newLocale });
    };

    return (
        <div>
            {locales.map((loc) => (
                <button
                    key={loc}
                    onClick={() => changeLanguage(loc)}
                    disabled={locale === loc}
                >
                    {loc.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
