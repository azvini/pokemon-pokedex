export type Action = { type: "GET_LISTS" }

export const getLists = (): Action => ({
    type: "GET_LISTS"
})