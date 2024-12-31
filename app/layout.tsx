import './globals.css'
import Layout from '@/components/layout'

export const metadata = {
  title: 'Cornerstone Education Centre',
  description: 'A centre of educational excellence for holistic child growth and development based on Christian principles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

