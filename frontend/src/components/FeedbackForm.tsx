'use client'

import React, {useState} from "react";

export default function FeedbackForm() {

    const [feedback, setFeedback] = useState('');
    const [status, setStatus] = useState('typing');


    async function sendMessage(feedback: string) {
        return new Promise(resolve => {
            setTimeout(resolve, 2000);
        })
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('sending');
        await sendMessage(feedback);
        setStatus('sent')
    }

    const isSending = status === 'sending';
    const isSent = status === 'sent';

    if(isSent){
        return <h1>Thanks for feedback!</h1>
    }

    return (
        <form onSubmit={handleSubmit}>
            <p> How was your stay at The Prancing Pony?</p>
            <textarea
            disabled={isSending}
            value={feedback}
            onChange={e =>  setFeedback(e.target.value)}
            />
            <br/>

            <button
                disabled={isSending}
                type="submit">
                Send
            </button>

            {isSending && <p>Sending...</p>}
        </form>
    )
}