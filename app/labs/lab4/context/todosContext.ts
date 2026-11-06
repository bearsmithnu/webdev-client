export type Todo = { 
    id: number; 
    title: string 
};

export const startingDos = [
    {id: 0, title: "Cook eggplant"}, 
    {id: 1, title: "Feed the frogs"}, 
    {id: 2, title: "Lift weights"}];


export function addItem(todos: Todo[], newItem: string) {
    const lastItem = todos.at(-1);
    const nextId = lastItem? lastItem.id + 1 : 0;
    todos.push({id: nextId, title: newItem });
}

export function deleteItem(todos: Todo[], deleteId: number) {
    return todos.filter((item) => (item.id !== deleteId), todos);
}

export function updateItem(todos: Todo[], editId: number, newName: string) {
    const editIdx = todos.findIndex((item) => (item.id === editId));
    if (editIdx < 0) {
        throw new Error("Attempting to edit todo with missing id " + editId);
    }
    todos.splice(editIdx, 1, {id: editId, title: newName});
}