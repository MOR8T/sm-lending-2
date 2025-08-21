import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import NotFound from "@/components/not-found/NotFound";
import { NextIntlClientProvider } from "next-intl";

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider>
          <div className="flex flex-col justify-between min-h-[100vh]">
            <div>
              <Header />
              <NotFound />
            </div>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
