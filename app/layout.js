import { Inter } from "next/font/google";
import AppNavbar from "./_sharedComponents/appNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "DRMS",
    description: "Dumpster Rental Management System",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" data-bs-theme="dark">
            <body className={inter.className + " m-1"}>
                <header>
                    <AppNavbar />
                </header>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
