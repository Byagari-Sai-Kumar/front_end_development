import {redirect} from 'next/navigation';

export async function GET(){
    redirect('/44redirects-route-handlers/v2/users');
    const oldUsers = [
        {
            name: 'sai kumar',
            age: 27
        },
        {
            name: 'rahul',
            age: 28
        },
        {
            name: 'krishna',
            age: 29
        },
    ]

    return Response(oldUsers);
}

//redirect helps the users to navigate to the new endpoint without returning the old data.
//here when users visit /44redirects-route-handlers/v1/users   redirect to --->    /44redirects-route-handlers/v2/users