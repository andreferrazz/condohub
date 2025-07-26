export function load({ params }) {
    return {
        chatId: params.chat_id,
        messages: [
            {
                text: 'Lorem ipsum dolor',
                from: 'a',
                to: 'b'
            },
            {
                text: 'Lorem ipsum dolor lorem ipsum dolor',
                from: 'a',
                to: 'b'
            },
            {
                text: 'Lorem ipsum dolor lorem ipsum dolor',
                from: 'b',
                to: 'a'
            },
            {
                text: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
                from: 'a',
                to: 'b'
            },
            {
                text: 'Oloko bicho!',
                from: 'a',
                to: 'b'
            }
        ]
    };
}
