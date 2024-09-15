<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>แบบประเมิน</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        /* CSS ที่ปรับปรุงแล้วเพื่อรองรับการแสดงผล */
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

        .question-container, .result-container {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-bottom: 20px;
            width: 80%;
            max-width: 500px;
        }

        label {
            font-size: 1.1rem;
            font-weight: 400;
            margin-bottom: 10px;
            display: block;
            color: #555;
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

        .submit-btn {
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

        .submit-btn:hover {
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
            .question-container, .result-container {
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

    <div class="question-container">
        <!-- คำถามทั้งหมดเรียงต่อเนื่องกัน (ข้อ 1-12) -->
        <label for="q1">คำถามที่ 1: คุณมั่นใจเพียงใดว่าจะสามารถเล่นกีฬาได้ดีในระดับเดิม</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q1" oninput="updateOutput('q1Output', this.value)">
        <span id="q1Output" class="output">0</span><br>

        <!-- เพิ่มคำถามที่เหลือ (Q2-Q12) ที่นี่ -->
        <!-- ตัวอย่างการเพิ่มคำถาม -->
        <label for="q2">คำถามที่ 2: คุณคิดว่ามีโอกาสมากน้อยเพียงใดที่จะกลับมาบาดเจ็บซ้ำบริเวณเข่าจากการเล่นกีฬา</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q2" oninput="updateOutput('q2Output', this.value)">
        <span id="q2Output" class="output">0</span><br>

        <!-- ... เพิ่มคำถามที่เหลือ ... -->
    </div>

    <button class="submit-btn" onclick="calculateScore()">ดูคะแนน</button>

    <div class="result-container" id="resultContainer">
        <h2>สรุปคะแนนรวม</h2>
        <p id="summary"></p>
        <div id="exerciseRecommendations"></div>
    </div>

    <script>
        function updateOutput(outputId, value) {
            document.getElementById(outputId).innerText = value;
        }

        function calculateScore() {
            const questions = [
                { id: 'q1', outputId: 'q1Output', domain: 'emotion' },
                { id: 'q2', outputId: 'q2Output', domain: 'emotion' },
                { id: 'q3', outputId: 'q3Output', domain: 'emotion' },
                { id: 'q4', outputId: 'q4Output', domain: 'emotion' },
                { id: 'q5', outputId: 'q5Output', domain: 'emotion' },
                { id: 'q6', outputId: 'q6Output', domain: 'confidence' },
                { id: 'q7', outputId: 'q7Output', domain: 'confidence' },
                { id: 'q8', outputId: 'q8Output', domain: 'confidence' },
                { id: 'q9', outputId: 'q9Output', domain: 'confidence' },
                { id: 'q10', outputId: 'q10Output', domain: 'confidence' },
                { id: 'q11', outputId: 'q11Output', domain: 'risk' },
                { id: 'q12', outputId: 'q12Output', domain: 'risk' }
            ];

            let totalScore = 0;
            const results = {
                emotion: { lessThan65: [], between65and80: [] },
                confidence: { lessThan65: [], between65and80: [] },
                risk: { lessThan65: [], between65and80: [] }
            };

            questions.forEach(question => {
                const value = parseInt(document.getElementById(question.id).value);
                totalScore += value;

                let scoreCategory;
                if (value < 65) {
                    scoreCategory = 'lessThan65';
                } else if (value >= 65 && value <= 80) {
                    scoreCategory = 'between65and80';
                }

                if (scoreCategory) {
                    results[question.domain][scoreCategory].push(question.id);
                }
            });

            document.getElementById('summary').innerText = `คะแนนรวม: ${totalScore}`;

            let exerciseRecommendations = '';

            // Exercises for Emotion domain
            if (results.emotion.lessThan65.length > 0) {
                exerciseRecommendations += '<h3>Domain: Emotion (คะแนนน้อยกว่า 65)</h3>';
                exerciseRecommendations += '<p>Exercise: Imagery + Progressive relaxation, Pawanmuktasana series; Goolf Nama (Ankle bending), Goolf Chakra (Ankle rotation), Poorna Titali (Full butterfly), Janu Naman (Knee bending)</p>';
                results.emotion.lessThan65.forEach(id => {
                    exerciseRecommendations += `<img src="URL_TO_YOUR_IMAGES/${id}_lessThan65.jpg" class="exercise-img" alt="Exercise Image">`;
                });
            }
            if (results.emotion.between65and80.length > 0) {
                exerciseRecommendations += '<h3>Domain: Emotion (คะแนน 65-80)</h3>';
                exerciseRecommendations += '<p>Exercise: Deep breathing exercise (Nadi Shodhana), Yoga; Virabhadrasana 1 (

