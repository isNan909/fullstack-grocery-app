export interface Grocery {
    grocery: {
        id: String
        name: String
        quantity: Number
    }
}

export interface FormData {
    id: String
    name: String
    quantity: Number
}

export interface GroceryList {
    grocery: {
        id: String
        name: String
        quantity: Number
    }[]
}