<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>แบบประเมิน</title>
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

        label {
            font-size: 1.1rem;
            font-weight: 400;
            margin-bottom: 10px;
            display: block;
            color: #555;
            text-align: center;
        }

        .slider {
            width: 100%;
            margin: 10px 0;
            height: 8px;
            appearance: none;
            background: #ddd;
            border-radius: 5px;
            outline: none;
            transition: background 0.3s ease;
        }

        .slider:hover {
            background: #ccc;
        }

        .slider::-webkit-slider-thumb {
            appearance: none;
            width: 20px;
            height: 20px;
            background: #333;
            border-radius: 50%;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            background: #333;
            border-radius: 50%;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .output {
            font-size: 1.2rem;
            font-weight: 600;
            color: #333;
            margin-left: 10px;
        }

        .submit-btn,
        .back-to-chatbot-btn {
            font-size: 1.2rem;
            background-color: #333;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-top: 20px;
        }

        .submit-btn:hover,
        .back-to-chatbot-btn:hover {
            background-color: #555;
        }

        .result-container {
            display: none;
        }

        .show {
            display: block;
        }

        .exercise-img {
            max-width: 100%;
            height: auto;
            margin: 10px 0;
        }

        @media (max-width: 600px) {
            .container {
                width: 90%;
                padding: 15px;
            }

            h1 {
                font-size: 2rem;
            }
        }
    </style>
</head>

<body>
    <h1>แบบประเมิน</h1>

    <div class="container">
        <!-- Add all 12 questions -->
        <!-- (Your questions go here as before) -->
        <button class="submit-btn" onclick="showResults()">ดูคะแนน</button>
    </div>

    <div id="results" class="result-container">
        <h2>สรุปคะแนนรวม</h2>
        <p id="totalScore">คะแนนรวม: 0</p>
        <div id="failedQuestions">
            <!-- Failed questions and exercises will be displayed here -->
        </div>
        <!-- Add button to send back to chatbot -->
        <button class="back-to-chatbot-btn" onclick="sendToChatbot()">กลับไปที่แชทบอท</button>
    </div>

    <script>
        function updateOutput(id, value) {
            document.getElementById(id).textContent = value;
        }

        function showResults() {
            let totalScore = 0;
            const questionIds = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12'];
            const failedQuestions = document.getElementById('failedQuestions');
            failedQuestions.innerHTML = '';
            questionIds.forEach(id => {
                totalScore += parseInt(document.getElementById(id).value, 10);
            });

            document.getElementById('totalScore').textContent = `คะแนนรวม: ${totalScore}`;
            document.getElementById('results').classList.add('show');

            let failedData = [];
            questionIds.forEach(id => {
                const score = parseInt(document.getElementById(id).value, 10);
                let feedback = '';
                let imgSrc = '';

                if (id === 'q1' || id === 'q2' || id === 'q3' || id === 'q4' || id === 'q5') {
                    if (score < 65) {
                        feedback = 'ควรฝึกซ้อม noncontact nonpivot: Imagery + Progressive relaxation, Pawanmuktasana series; Goolf Nama, Goolf Chakra, Poorna Titali, Janu Naman';
                        imgSrc = 'https://github.com/your-repo/goolf-nama.png'; // Replace with actual image URL
                    } else if (score <= 80) {
                        feedback = 'ควรฝึกซ้อม noncontact pivot: Deep breathing (Nadi Shodhana), Yoga (Virabhadrasana 1, Virabhadrasana 2), Savasana';
                        imgSrc = 'https://github.com/your-repo/virabhadrasana.png'; // Replace with actual image URL
                    }
                }
                // Same logic for other questions

                if (feedback) {
                    const questionFeedback = document.createElement('div');
                    questionFeedback.innerHTML = `
                        <h3>คำถามที่ ${id.substring(1)}:</h3>
                        <p>${feedback}</p>
                        <img src="${imgSrc}" class="exercise-img" alt="Exercise Image">
                    `;
                    failedQuestions.appendChild(questionFeedback);

                    // Store failed question data
                    failedData.push({
                        question: id.substring(1),
                        score: score,
                        feedback: feedback
                    });
                }
            });

            // Save failed questions to localStorage for later use in chatbot
            localStorage.setItem('failedQuestions', JSON.stringify(failedData));
        }

        function sendToChatbot() {
            const failedData = JSON.parse(localStorage.getItem('failedQuestions'));

            // Here you would send the data back to the LINE chatbot
            // For example, you might use LIFF API to send a message or Flex message
            // Simulate sending data to chatbot (replace this part with actual LIFF API code)
            console.log("Sending to chatbot:", failedData);
            alert("ข้อมูลถูกส่งไปยังแชทบอทแล้ว!");
        }
    </script>
</body>

</html>
