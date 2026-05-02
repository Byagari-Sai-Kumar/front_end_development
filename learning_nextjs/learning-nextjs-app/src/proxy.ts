import {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

export function proxy(request: NextRequest){

    const response = NextResponse.next();
    const prefTheme = request.cookies.get('theme');

    if(!prefTheme){
        request.cookies.set("theme","dart");
    }
    
    // if(request.nextUrl.pathname === "/46Middleware/conditional-statement/profile"){
    //     return NextResponse.rewrite(new URL('/46Middleware/conditional-statement/home', request.url));
    // }

    response.headers.set("custom-headers","custom-value");
    return response;
}

//method 1: Regular way
// export const config = {
//     matcher:'/46Middleware/regular-way/profile'  //this means when a user vist /profile they will redirect to /home
// }

//method 2: conditional statement way

//method 3:
//use return NextResponse.rewrite(new URL());
//rewrite method will keep the url unchanged which successfully redirecting the page.

//method 4: cookies
