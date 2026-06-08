import { Request, Response } from 'express';
declare function show(req: Request, res: Response): any;
declare function create(req: Request, res: Response): Response<any, Record<string, any>> | undefined;
declare function update(req: Request, res: Response): void;
declare const _default: {
    show: typeof show;
    create: typeof create;
    update: typeof update;
};
export default _default;
//# sourceMappingURL=tasksController.d.ts.map