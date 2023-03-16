interface Request {
    address: string,
    donorId: string,
    localType: string,
    pickerId: string
}

interface Donor {
    name: string,    
    email: string,
    phone: string
}

export { 
    Request, 
    Donor
}