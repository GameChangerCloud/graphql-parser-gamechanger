export class TargetedTypeNotFound extends Error {
    constructor(type: string) {
        super(`Targeted type ${type} not found`);
    }
}