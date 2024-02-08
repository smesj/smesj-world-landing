import { clerkClient } from '@clerk/nextjs';

export async function GET() {
    const players = await clerkClient.users.getUserList().then(users => {
        return users.map(user => {
            return {
                id: user.id,
                name: user.username
            }
        });
    })

    return Response.json(players)


}