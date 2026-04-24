import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest){
    // const headers = new Headers(request.headers);
    // console.log(headers.get('authorization'));
    
    const headersList = await headers();
    console.log(headersList.get('Authorization'));

    return new Response("<h1>Result from api</h1>",{
        headers:{
            "Content-Type":"text/html"
        }
    })
}

