export async function listAllProducts(request){
    const response = await request.get('/api/productsList');
    
    const body = await response.json();

    return { response, body };
};