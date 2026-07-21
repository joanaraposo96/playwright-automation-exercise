export function listAllProducts(request){
    const response = await request.get('/api/productsList');

    const body = response.json();

    return { response, body };
};