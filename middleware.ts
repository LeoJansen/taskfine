import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  '/',
  '/about',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhook'
]);

const isSignInUpRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
]);

export default clerkMiddleware(
  (auth, req) => {
    const userId = auth().userId;
    const orgId = auth().orgId;
    const pathName = req.nextUrl.pathname

    let pathSelectOrg = '/select-org';

    if (isPublicRoute(req)) {
      if (userId && isSignInUpRoute(req))
        return NextResponse.redirect(new URL(orgId ? `/organization/${orgId}` : pathSelectOrg, req.url));
    }

    if (!isPublicRoute(req)) {

      if (userId && !orgId && pathName !== pathSelectOrg)
        return NextResponse.redirect(new URL(pathSelectOrg, req.url));
    }

  },
  {
    signInUrl: '/sign-in',
    signUpUrl: '/sign-up',
    afterSignInUrl: '/select-org',
    afterSignUpUrl: '/select-org',
  }
)

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};