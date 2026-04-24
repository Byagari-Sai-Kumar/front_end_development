import { comments } from "../comments/data";

export async function GET(_request: Request,{params}:{params: Promise<{id:string}>}){
    const id = (await params).id;
    const comment = comments.find(eachComment => eachComment.id === parseInt(id));
    return Response.json(comment);
}