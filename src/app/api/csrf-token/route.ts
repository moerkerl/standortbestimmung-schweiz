import { NextResponse } from 'next/server';
import { generateCSRFToken } from '@/lib/csrf';

export async function GET() {
  try {
    const token = generateCSRFToken();
    
    return NextResponse.json({ 
      token 
    }, {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      }
    });
  } catch (error) {
    console.error('Failed to generate CSRF token:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to generate CSRF token' 
      },
      { 
        status: 500 
      }
    );
  }
}