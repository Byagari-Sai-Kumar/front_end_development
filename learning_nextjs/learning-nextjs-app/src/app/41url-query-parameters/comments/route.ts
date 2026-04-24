import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    const filteredComment = query ? comments.filter(eachComment => eachComment.comment.includes(query)) : comments
    return Response.json(filteredComment);
}

//NextRequest gives us the request search parameters object.