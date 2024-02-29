document.addEventListener('DOMContentLoaded', function() {
    // Sample data for articles
    const articlesData = [
        { title: "5G Technology: The Future of Connectivity", category: "Technology", image: "5g.jpg", content: "5G technology is the next generation of wireless networking technology that promises to deliver faster speeds, lower latency, and greater reliability than ever before. With 5G, users can experience lightning-fast download and upload speeds, making tasks such as streaming high-definition video, online gaming, and video conferencing smoother and more seamless. Moreover, 5G technology is expected to revolutionize industries such as healthcare, transportation, and manufacturing, enabling innovations like remote surgery, autonomous vehicles, and smart factories.In addition to these advancements, 5G networks are anticipated to support a massive increase in connected devices, forming the backbone of the Internet of Things (IoT) ecosystem. This will facilitate seamless communication between devices, paving the way for smart homes, intelligent infrastructure, and efficient resource management. Furthermore, the low latency of 5G networks opens up possibilities for real-time applications, such as augmented reality (AR) and virtual reality (VR), transforming entertainment, education, and training experiences. As 5G continues to roll out globally, it promises to reshape the way we live, work, and interact with technology, driving innovation and unlocking new opportunities across various sectors."},
        { title: "Artificial Intelligence: A Game-Changer in Tech", category: "Technology", image: "ai.jpg.png", content: "Artificial Intelligence (AI) is reshaping the technological landscape, with its ability to mimic human intelligence and perform tasks that typically require human intervention. From virtual assistants like Siri and Alexa to self-driving cars and recommendation systems, AI is everywhere. Its applications span across various industries, including healthcare, finance, marketing, and entertainment. With advancements in machine learning and deep learning algorithms, AI is poised to revolutionize how we live, work, and interact with technology. In healthcare, AI is revolutionizing diagnostics and treatment planning, enabling more accurate disease detection and personalized care. In finance, AI-powered algorithms are transforming investment strategies, fraud detection, and risk assessment, leading to more efficient and secure financial transactions. Similarly, in marketing, AI-driven analytics tools are optimizing advertising campaigns, customer segmentation, and personalized marketing efforts, enhancing customer engagement and driving sales growth. Furthermore, in the entertainment industry, AI is enabling content creation, curation, and recommendation, delivering personalized experiences to users across streaming platforms and social media networks.With advancements in machine learning and deep learning algorithms, AI is poised to revolutionize how we live, work, and interact with technology. These algorithms allow AI systems to learn from data, recognize patterns, and make predictions or decisions without explicit programming. As AI continues to evolve, it holds the potential to address complex challenges and drive innovation across various domains. However, it also raises ethical concerns regarding data privacy, bias in algorithms, and the impact on jobs and society. Thus, as AI technologies advance, it is essential to prioritize ethical considerations, promote transparency, and ensure responsible deployment to harness the full potential of AI for the benefit of humanity."},
        // Add more articles here
    ];

    const articlesContainer = document.getElementById('articles');

    // Function to display articles
    function displayArticles() {
        articlesData.forEach(article => {
            const articleElement = document.createElement('article');
            articleElement.classList.add('article');

            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <img src="${article.image}" alt="${article.title}">
                <p>${article.content}</p>
                <button class="comment-btn">View Comments</button>
            `;

            articleElement.querySelector('.comment-btn').addEventListener('click', () => {
                displayComments(article);
            });

            articlesContainer.appendChild(articleElement);
        });
    }

    // Function to display comments
    function displayComments(article) {
        const modal = document.getElementById('modal');
        const modalContent = document.getElementById('modal-content');
        const commentsContainer = document.getElementById('comments');
        const articleTitle = document.getElementById('article-title');

        articleTitle.textContent = article.title;
        commentsContainer.innerHTML = '';

        // Dummy comments for demonstration
        const commentsData = ["Great article!", "I learned a lot from this.", "Looking forward to more content like this."];

        commentsData.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.textContent = comment;
            commentsContainer.appendChild(commentElement);
        });

        modal.style.display = 'block';

        // Close modal
        modal.querySelector('.close').addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Add comment
        document.getElementById('comment-btn').addEventListener('click', () => {
            const commentInput = document.getElementById('comment-input').value;
            const commentElement = document.createElement('div');
            commentElement.textContent = commentInput;
            commentsContainer.appendChild(commentElement);
            // You can handle storing the comment data here
            document.getElementById('comment-input').value = '';
        });
    }

    displayArticles();
});
