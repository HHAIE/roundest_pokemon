const MAX_DEX_ID = 493;

export const getRandomId: (notThisOne?: number) => number = (notThisOne) => {
    let randomId: number = Math.floor(Math.random() * MAX_DEX_ID + 1);

    if (randomId !== notThisOne) return randomId;
    return getRandomId(notThisOne);
} 

export const getOptionsIds: () => number[] = () => {
    let firstId = getRandomId();
    let secondId = getRandomId(firstId);

    return [firstId, secondId];
}