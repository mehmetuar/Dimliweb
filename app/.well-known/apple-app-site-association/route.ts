import { NextResponse } from 'next/server';

// iOS Universal Links doğrulama dosyası. Apple bu dosyayı CDN üzerinden
// önbelleğe alır; redirect olmadan ve application/json content-type ile
// servis edilmesi gerekir. TEAMID değerini Apple Developer hesabındaki
// Team ID ile değiştir.
export function GET() {
    return NextResponse.json({
        applinks: {
            apps: [],
            details: [
                {
                    appID: '5NNGDQK27V.com.dimli.app',
                    paths: ['/invite/*'],
                },
            ],
        },
    });
}
