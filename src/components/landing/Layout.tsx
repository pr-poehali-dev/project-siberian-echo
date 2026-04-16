import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-black relative">
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#2a1500"
          hoverFillColor="#1a0d00"
        />
      </div>
      <div
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/b6aca5d8-5216-40ad-921f-36080097b9a7/files/a028552d-0c1b-49fe-b951-acd12cdf3559.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(255,77,0,0.08) 0%, transparent 70%)' }} />
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}