export interface Task {
    id: number;
    title: string;
    done: boolean;
}
declare function getAll(): Task[];
declare function getTaskById(id: number): Task | undefined;
declare function createTask(title: string): Task | undefined;
declare const _default: {
    createTask: typeof createTask;
    getAll: typeof getAll;
    getTaskById: typeof getTaskById;
};
export default _default;
//# sourceMappingURL=tasksService.d.ts.map