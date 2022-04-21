export function noEmpty(value){
    return value !== undefined && value !== null && value !== '' && value !== ' ';
}
export function haveToBeDefined(value){
    return value !== undefined && value !== null;
}