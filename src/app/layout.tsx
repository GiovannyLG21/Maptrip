import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import 'styles/global.css'

const nunito = Nunito({
	style: 'normal',
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Maptrip",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={`${nunito.className}`}>
				<div id="root">
					{children}
				</div>
			</body>
		</html>
	)
}
