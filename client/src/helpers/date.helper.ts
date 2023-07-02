export const formatDate= (date: any)=>{
    if (!date) return null;
    date = new Date(date);
    return `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
}

export const formatDatetime= (date: Date | string)=>{
    if (!date) return null;
    date = new Date(date) as Date;
    return `${formatDate(date)} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
}