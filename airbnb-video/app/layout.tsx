import './globals.css'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
