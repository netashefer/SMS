export type Message = {
    chat_name: string,
    message: string,
    message_db_id: number,
    photo_url: string,
    sender_name: string,
    sender_phone: string,
    timestamp: string,
    translated_message: string,
    ner: Record<string, string[]>,
}