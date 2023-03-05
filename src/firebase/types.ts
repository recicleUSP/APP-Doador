interface Request {
    address: string,
    donorId: string,
    localType: string,
    pickerId: string
}

interface Donor {
    name: string,
    phone: string,
    rating: number,
    userId: string
}

export { 
    Request, 
    Donor 
}