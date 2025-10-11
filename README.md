# storycreator
A website that creates amazing stories containing many pre made stories.give a topic make a story!

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Story Book</title>
</head>
<body>
    <div class="app-container">
        <header class="app-header">
            <h1 class="app-title">📚 Story Book Adventures</h1>
            <div class="author-section">
                <label for="author-name">Author: </label>
                <input type="text" id="author-name" class="author-input" value="Alex Johnson" placeholder="Enter your name">
            </div>
        </header>

        <div class="story-selector">
            <h2>Create Your Own Story!</h2>
            <div class="topic-input-section">
                <p class="instructions">Enter any topic and we'll generate an amazing story for you!</p>
                <div class="input-group">
                    <input type="text" id="topic-input" class="topic-input" placeholder="e.g., Time Travel, Dragons, Artificial Intelligence...">
                    <button class="generate-btn" id="generateBtn">✨ Generate Story</button>
                </div>
            </div>
            
            <div class="divider">
                <span>OR</span>
            </div>
            
            <h3 style="color: #fff; margin-top: 20px;">Choose a Pre-Made Story:</h3>
            <div class="story-cards">
                <div class="story-card" data-story="golden">
                    <div class="card-icon">👑</div>
                    <h3>The Golden Kingdom</h3>
                    <p>The Midas Touch tale</p>
                </div>
                <div class="story-card" data-story="lion">
                    <div class="card-icon">🦁</div>
                    <h3>The Brave Little Mouse</h3>
                    <p>Lion and Mouse fable</p>
                </div>
                <div class="story-card" data-story="fox">
                    <div class="card-icon">🦊</div>
                    <h3>The Sour Grapes</h3>
                    <p>Fox and Grapes story</p>
                </div>
                <div class="story-card" data-story="mystery">
                    <div class="card-icon">🔍</div>
                    <h3>The Vanishing Algorithm</h3>
                    <p>A tech mystery</p>
                </div>
                <div class="story-card" data-story="adventure">
                    <div class="card-icon">🚀</div>
                    <h3>Mars Colony 2157</h3>
                    <p>A space adventure</p>
                </div>
                <div class="story-card" data-story="comedy">
                    <div class="card-icon">😂</div>
                    <h3>The Great Exam Heist</h3>
                    <p>A hilarious comedy</p>
                </div>
            </div>
        </div>

        <div class="book-container" id="bookContainer" style="display: none;">
            <div class="book">
                <div class="page left-page" id="leftPage">
                    <div class="page-content"></div>
                    <div class="page-number"></div>
                </div>
                <div class="page right-page" id="rightPage">
                    <div class="page-content"></div>
                    <div class="page-number"></div>
                </div>
            </div>
            
            <div class="controls">
                <button class="nav-btn" id="prevBtn">← Previous</button>
                <span class="page-indicator" id="pageIndicator"></span>
                <button class="nav-btn" id="nextBtn">Next →</button>
            </div>
            <button class="back-btn" id="backBtn">← Back to Stories</button>
        </div>
    </div>
</body>
</html>
