import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { PrimeReactProvider } from 'primereact/api';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import "./globals.css";

import { AppProvider } from 'context'

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {

	return (
		<html lang="en">
			<PrimeReactProvider>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<AppProvider>
						{children}
					</AppProvider>
				</body>
			</PrimeReactProvider>
		</html>
	);
}
export default RootLayout