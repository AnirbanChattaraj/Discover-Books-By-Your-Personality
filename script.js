
function recommend(){
    const type = document.getElementById("personality").value;
    const result = document.getElementById("result");

    const books = {

        intellectual: `
        <h2>📘 Intellectual / Analytical</h2>

        <div class="book">
            <h3>Sapiens – Yuval Noah Harari</h3>
            <p>A deep exploration of human history, evolution, and the ideas that shaped civilizations.</p>
        </div>

        <div class="book">
            <h3>Thinking, Fast and Slow – Daniel Kahneman</h3>
            <p>Explains how our brain makes decisions and the biases that influence our thinking.</p>
        </div>

        <div class="book">
            <h3>Meditations – Marcus Aurelius</h3>
            <p>Stoic wisdom from a Roman emperor reflecting on discipline, logic, and self-control.</p>
        </div>
        `,

        dreamer: `
        <h2>🎨 Dreamer / Creative</h2>

        <div class="book">
            <h3>The Alchemist – Paulo Coelho</h3>
            <p>A poetic journey about following your dreams and listening to your heart.</p>
        </div>

        <div class="book">
            <h3>Harry Potter Series – J.K. Rowling</h3>
            <p>A magical world of imagination, friendship, and adventure.</p>
        </div>

        <div class="book">
            <h3>One Hundred Years of Solitude – Gabriel García Márquez</h3>
            <p>A masterpiece of magical realism blending reality with fantasy.</p>
        </div>
        `,

        leader: `
        <h2>🚀 Leader / Ambitious</h2>

        <div class="book">
            <h3>Atomic Habits – James Clear</h3>
            <p>A practical guide to building powerful habits that drive success.</p>
        </div>

        <div class="book">
            <h3>The 48 Laws of Power – Robert Greene</h3>
            <p>Strategic lessons on influence, leadership, and power dynamics.</p>
        </div>

        <div class="book">
            <h3>Steve Jobs – Walter Isaacson</h3>
            <p>The biography of a visionary who reshaped technology and design.</p>
        </div>
        `,

        romantic: `
        <h2>❤️ Romantic / Emotional</h2>

        <div class="book">
            <h3>Pride and Prejudice – Jane Austen</h3>
            <p>A timeless love story filled with wit, emotion, and social commentary.</p>
        </div>

        <div class="book">
            <h3>The Notebook – Nicholas Sparks</h3>
            <p>A heartfelt story about enduring love and destiny.</p>
        </div>

        <div class="book">
            <h3>Me Before You – Jojo Moyes</h3>
            <p>An emotional journey of love, change, and personal growth.</p>
        </div>
        `,

        adventurer: `
        <h2>🌍 Adventurer / Thrill Seeker</h2>

        <div class="book">
            <h3>The Hobbit – J.R.R. Tolkien</h3>
            <p>An epic quest filled with danger, courage, and discovery.</p>
        </div>

        <div class="book">
            <h3>Into the Wild – Jon Krakauer</h3>
            <p>A true story of a young man seeking freedom in nature.</p>
        </div>

        <div class="book">
            <h3>The Da Vinci Code – Dan Brown</h3>
            <p>A fast-paced thriller packed with mystery and historical puzzles.</p>
        </div>
        `,

        spiritual: `
        <h2>🕊 Spiritual / Deep Thinker</h2>

        <div class="book">
            <h3>The Power of Now – Eckhart Tolle</h3>
            <p>A guide to living fully in the present moment.</p>
        </div>

        <div class="book">
            <h3>Siddhartha – Hermann Hesse</h3>
            <p>A philosophical novel about enlightenment and self-discovery.</p>
        </div>

        <div class="book">
            <h3>Man’s Search for Meaning – Viktor Frankl</h3>
            <p>A profound reflection on finding purpose even in suffering.</p>
        </div>
        `,

        realist: `
        <h2>📊 Practical / Realist</h2>

        <div class="book">
            <h3>Deep Work – Cal Newport</h3>
            <p>Strategies for focused success in a distracted world.</p>
        </div>

        <div class="book">
            <h3>The Intelligent Investor – Benjamin Graham</h3>
            <p>A classic guide to value investing and financial wisdom.</p>
        </div>

        <div class="book">
            <h3>Clean Code – Robert C. Martin</h3>
            <p>Essential principles for writing high-quality, maintainable code.</p>
        </div>
        `,

        curious: `
        <h2>🔎 Curious / Explorer</h2>

        <div class="book">
            <h3>A Brief History of Time – Stephen Hawking</h3>
            <p>An accessible journey through space, time, and the universe.</p>
        </div>

        <div class="book">
            <h3>Guns, Germs, and Steel – Jared Diamond</h3>
            <p>Explains why civilizations developed differently across the world.</p>
        </div>

        <div class="book">
            <h3>The Silk Roads – Peter Frankopan</h3>
            <p>A new perspective on global history through trade and culture.</p>
        </div>
        `
    };

    if(type === ""){
        result.innerHTML = "<p>Please select a personality type.</p>";
    } else {
        result.innerHTML = books[type];
    }
}

