import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from "@mui/material";
import theme from "@/theme/theme"
import StoreProvider from "@/lib/provider/storeProvider";
import '@/theme/style.css'
export const metadata: Metadata = {
 title: {
    default:"Planning",
    template:"%s | CRM"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <StoreProvider>
                  {children}
              </StoreProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
          </body>
      </html>
  );
}
