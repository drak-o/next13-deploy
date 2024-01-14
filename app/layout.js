import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eco Swap',
  description: 'An app that allows you to swap your old clothes for new ones free of charge.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth no-scrollbar'>
      <body className={`${inter.className} `}>
        <NavBar/>
        {children}
      
      </body>
    </html>
  )
}
