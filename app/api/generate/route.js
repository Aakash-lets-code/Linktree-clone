

export async function POST(request) {

    const body = request.body();
    return Response.json({ message: 'Hello World' })
  }