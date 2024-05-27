import React from "react";

function Article({ title, date="January 1, 1970", preview, minutes }) {

    const displayReadingTime = () => {
        let emojis = "";
        const count = Math.ceil(minutes / (minutes < 30 ? 5 : 10));
        const emoji = minutes < 30 ? "☕️" : "🍱";

        for (let i = 0; i < count; i++) {
            emojis += emoji + " ";
        }

        return `${emojis.trim()} ${minutes} min read`;
    };
   
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}.{displayReadingTime()}</small>
            <p>{preview}.</p>
        </article>
    );

    /* using array
   const displayReadingTime = () => {
        if (minutes < 30) {
            const coffeeCups = Array(Math.ceil(minutes / 5)).fill("☕️");
            return coffeeCups.join(" ") + ` ${minutes} min read`;
        } else {
            const bentoBoxes = Array(Math.ceil(minutes / 10)).fill("🍱");
            return bentoBoxes.join(" ") + ` ${minutes} min read`;
        }
    }; 
    */
}

export default Article;