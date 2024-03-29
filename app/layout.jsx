// Importations nécessaires pour votre composant
import { Karla } from 'next/font/google';
import './globals.css';
import { SideBar } from '@/components/sidebar'; // Assurez-vous que le chemin d'importation est correct
import Header from '@/components/header';
import PageWrapper from '@/components/pagewrapper';
import { ThemeProvider } from '@/components/theme-provider';
import { auth } from './auth';


const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ['latin'],
  variable: "--font-karla"
});

export const metadata = {
  title: "Dz admin dashboard",
  description: "NextJs admin dashboard created by Sijin Raj"
};

// Le composant RootLayout en JSX
export default async function RootLayout({ children }) {
  let user = null;
  try {
    const authResult = await auth();
    if (authResult !== null && authResult !== undefined) {
      user = authResult.user;
    } else {
      console.log("pas connecté,User:", user);
    }
  } catch (error) {
    console.error("Erro:", error);
    user = null; // Set user to null in case of error
  }


  return (
    <html lang="en" suppressHydrationWarning>
      <body className={karla.className + ' h-screen overflow-hidden'}>
        <ThemeProvider
          themes={['dark', 'custom', 'light']}
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <>
            <SideBar auth={user} />
            <div className="flex flex-col h-full w-full">
             <Header auth={user} /> 
              <PageWrapper className>{children}</PageWrapper>
            </div>
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}


