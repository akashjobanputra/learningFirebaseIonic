export const snapshotToObject = snapshot => {
    let item = snapshot.val();
    item.key = snapshot.key;
    return item;
}