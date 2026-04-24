import { comments } from "../comments/data";

export async function DELETE(_request:Request,{params}:{params: Promise<{id:string}>}){
    const id = (await params).id;
    const index = comments.findIndex(eachComment => eachComment.id === parseInt(id));
    comments.splice(index,1);

    return Response.json(`Delete comment id ${index}`);
}