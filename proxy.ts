import { NextResponse, NextRequest } from 'next/server'
import { JWT_SECRET } from './app/lib/config';
import jwt from "jsonwebtoken"

interface UserTokenPayload{
    userId: string;
}

export function proxy(request: NextRequest) {
    const token = request.cookies.get('token');
    const loginUrl = new URL('/signup', request.url);

    if(!token){
        console.log("Token not provided")
        return NextResponse.redirect(loginUrl);
    }
    if(!JWT_SECRET){
        console.error("JWT secret is not configured")
        return NextResponse.redirect(loginUrl);
    }

    try{
        const payload = jwt.verify(token.value, JWT_SECRET);
        if(typeof payload === 'object' && 'userId' in payload){
            const userPayload = payload as UserTokenPayload;
            const requestHeaders = new Headers(request.headers);
            requestHeaders.set('user-id', userPayload.userId);
            return NextResponse.next({
                request: {
                    headers: requestHeaders,
                },
            });
        }else{
            console.warn("Middleware: Invalid token payload format")
            throw new Error('Invalid token payload');
        }
    }catch(e){
        console.log('Middleware: Token verification failed')
        const response = NextResponse.redirect(loginUrl);
        response.cookies.set('token', '', { maxAge: 0 });
        return response;
    }
}

export const config = {
  matcher: '/dashboard/:path*',
}