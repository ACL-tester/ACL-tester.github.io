<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ผลการประเมิน</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f7f7f7;
            color: #333;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            min-height: 100vh;
        }

        h1 {
            font-size: 2.5rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: #333;
        }

        .container {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin: 20px;
            width: 80%;
            max-width: 700px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .exercise-img {
            max-width: 100%;
            height: auto;
            margin: 10px 0;
        }

        .back-to-chatbot-btn {
            font-size: 1.2rem;
            background-color: #28a745;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-top: 20px;
        }

        .back-to-chatbot-btn:hover {
            background-color: #218838;
        }

        .result {
            font-size: 1.2rem;
            font-weight: 600;
            color: #333;
            margin: 10px 0;
        }
    </style>
</head>

<body>
    <h1>ผลการประเมิน</h1>
    <div class="container">
        <div id="results">
            <!-- Placeholder for results -->
            <div class="result" id="failedQuestions">
                <!-- Results will be inserted here -->
            </div>
        </div>
        <button class="back-to-chatbot-btn" onclick="redirectToChatbot()">กลับสู่ LINE Chatbot</button>
    </div>

    <script>
        function displayResults() {
            // Placeholder for fetching results
            const failedQuestions = [
                // Example data
                { question: 'คำถามที่ 1', score: 60 },
                { question: 'คำถามที่ 7', score: 70 }
            ];

            const resultsDiv = document.getElementById('failedQuestions');
            resultsDiv.innerHTML = '';

            failedQuestions.forEach((item) => {
                resultsDiv.innerHTML += `<div>${item.question} - คะแนน: ${item.score}</div>`;
            });
        }

        function redirectToChatbot() {
            // Replace with your LINE chatbot URL and any necessary parameters
            const chatbotURL = 'https://line.me/R/oaMessage/m/your-channel-id'; 
            window.location.href = chatbotURL;
        }

        // Call displayResults when the page loads
        window.onload = displayResults;
    </script>
</body>
</html>

                }
            });
        }
    </script>
</body>
</html>
