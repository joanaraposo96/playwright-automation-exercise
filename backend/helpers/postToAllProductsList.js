export async function postToAllProductsList(request){
    const response = await request.post('/api/productsList');
    
    const body = await response.json();

    return { response, body };
};