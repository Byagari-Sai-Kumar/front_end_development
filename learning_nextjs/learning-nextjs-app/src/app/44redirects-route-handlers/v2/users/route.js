export async function GET(){
    const newUsers = [
        {
            city: 'hyderabad',
            pincode: 500053
        },
        {
            city: 'mumbai',
            pincode: 500070
        },
        {
            city: 'chennai',
            pincode: 500030
        },
    ]

    return Response.json(newUsers);
}