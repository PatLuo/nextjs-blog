import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";

interface RootLayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<head />
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<main className="max-w-2xl mx-auto px-4">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
