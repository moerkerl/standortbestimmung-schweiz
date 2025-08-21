import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(135deg, #ff6b35 0%, #e55a2b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative',
          borderRadius: '6px',
        }}
      >
        {/* Pin Shape */}
        <div
          style={{
            position: 'absolute',
            top: '2px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '28px',
            height: '28px',
            background: 'radial-gradient(circle at 30% 25%, #ff6b35 0%, #e55a2b 100%)',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Book inside pin */}
          <div
            style={{
              width: '16px',
              height: '12px',
              background: 'white',
              borderRadius: '1px',
              position: 'relative',
              opacity: 0.95,
              display: 'flex',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '8px',
                top: '0',
                width: '1px',
                height: '12px',
                background: '#ff6b35',
                opacity: 0.3,
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}