import { NextResponse } from "next/server";

const signedInPages = [
    '/', '/playlist', '/library'
]
let tokenName = process.env.JWT_TOKEN_NAME

export default function middleware(req) {
    if (signedInPages.find((p) => p === req.nextUrl.pathname)) {
        const token = req.cookies.jwt_token_access;

        if (!token) {
            return NextResponse.redirect('/signin')
        }
    }

}