export const dynamic = 'force-static';
export const revalidate = 10;

export async function GET(){
    return Response.json({"time": new Date().toLocaleTimeString()})
}

//Caching is possible only in the production server. not on dev servers.

//Caching only works with GET method.

//First line will cache the response force static which means the response will never referesh.
//if we need new data then we need to restart the prod server.

//Second line will automatically refresh data every 10 seconds.

//if you are using dynamic functions like headers(), cookies() or working with request object in you GET method
//caching wont be applied.