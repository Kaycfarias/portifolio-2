"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

import { ChevronDownIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type LocaleOption = {
  readonly code: "en" | "pt-BR";
  readonly flag: string;
  readonly label: string;
};

const LOCALE_OPTIONS: readonly LocaleOption[] = [
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "pt-BR", flag: "🇧🇷", label: "Português" },
] as const;

const LocaleSwitcher = () => {
  const t = useTranslations("LanguageSwitcher");

  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLocaleChange = (localeCode: string) => {
    router.replace(pathname, { locale: localeCode, scroll: false });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={"sm"}>
          {LOCALE_OPTIONS.find((opt) => opt.code === currentLocale)?.flag ||
            "🌐"}
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-muted-foreground">
            {t("Language")}
          </DropdownMenuLabel>
          {LOCALE_OPTIONS.map(({ code, flag, label }) => (
            <DropdownMenuItem
              key={code}
              onClick={() => handleLocaleChange(code)}
            >
              {flag} {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocaleSwitcher;
