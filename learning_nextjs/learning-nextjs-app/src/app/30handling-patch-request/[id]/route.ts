import { comments } from "../comments/data";

export async function PATCH(request:Request,{params}:{params: Promise<{id:string}>}){
    const id = (await params).id;
    const body = await request.json();
    const {text} = body;

    const index = comments.findIndex(eachComment => eachComment.id === parseInt(id));
    comments[index].comment = text;

    return Response.json(comments[index]);
}