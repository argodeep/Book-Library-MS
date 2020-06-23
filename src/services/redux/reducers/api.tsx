export function getBooks (state = [], action: any) {
    switch (action.type) {
        case "LIST_BOOKS":
            return action.payload
        default:
            return state;
    }
}

export function getBookById (state = null, action: any) {
    switch (action.type) {
        case "GET_SINGLE_BOOK":
            return action.payload
        default:
            return state;
    }
}

export function updateBook (state = null, action: any) {
    switch (action.type) {
        case "EDIT_BOOK":
            return action.payload
        default:
            return state;
    }
}

export function addBook (state = null, action: any) {
    switch (action.type) {
        case "ADD_BOOK":
            return action.payload
        default:
            return state;
    }
}


