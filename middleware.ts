import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // if (request.nextUrl.pathname !== '/maintenance') {
  //   return NextResponse.rewrite(new URL('/maintenance', request.url))
  // }
  return NextResponse.next()
}

export const config = {
  // .well-known (Universal Links/App Links doğrulama dosyaları), /invite
  // (uygulama yüklü değilse açılan davet sayfası) ve /qr (basılı afişlerdeki
  // QR kodun hedefi — geri çağrılamaz) bakım moduna takılmamalı.
  matcher: ['/((?!_next/static|_next/image|icon\\.png|favicon\\.ico|.well-known|invite|qr|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
