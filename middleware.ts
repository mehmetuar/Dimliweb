import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== '/maintenance') {
    return NextResponse.rewrite(new URL('/maintenance', request.url))
  }
}

export const config = {
  // .well-known (Universal Links/App Links doğrulama dosyaları) ve /invite
  // (uygulama yüklü değilse açılan davet sayfası) bakım moduna takılmamalı.
  matcher: ['/((?!_next/static|_next/image|icon\\.png|favicon\\.ico|.well-known|invite|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
