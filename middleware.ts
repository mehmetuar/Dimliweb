import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== '/maintenance') {
    return NextResponse.rewrite(new URL('/maintenance', request.url))
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|icon\\.png|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
