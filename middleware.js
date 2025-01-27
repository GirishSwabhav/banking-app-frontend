import { NextResponse } from 'next/server';

export function middleware(request) {

    const path = request.nextUrl.pathname;
    const authToken = request.cookies.get('auth')?.value;

    if (path === '/') {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (!authToken && path != "/login") {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (authToken && (path === "/" || path === "/login")) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ]
};