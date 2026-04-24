import { NextRequest } from "next/server";
import { headers,cookies } from "next/headers";

export async function GET(request: NextRequest){
    //method 1
    const responseCookies = request.cookies.get('theme');
    console.log(responseCookies);

    //method 2 (Next js built-in feature)
    const responeCookies = await cookies();
    responeCookies.set("no of pages","20");

    console.log(responeCookies.get("no of pages"));
    
    return new Response("<h1>Hello from Cookies in route handlers</h1>",{
        headers:{
            'Content-Type':"text/html",
            "Set-Cookie":"theme=dark,name=saikumar"
        }
    })
}