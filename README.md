<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>แบบประเมิน</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        /* CSS styles go here */
    </style>
</head>
<body>
    <h1>แบบประเมิน</h1>
    <div class="container">
        <!-- Add all 12 questions -->
        <!-- Example for question 1 -->
        <label for="q1">คำถามที่ 1: คุณมั่นใจเพียงใดว่าจะสามารถเล่นกีฬาได้ดีในระดับเดิม</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q1" oninput="updateOutput('q1Output', this.value)">
        <span id="q1Output" class="output">0</span><br>

        <!-- Repeat similar blocks for other questions (q2, q3, ..., q12) -->

        <button class="submit-btn" onclick="showResults()">ดูคะแนน</button>
    </div>

    <div id="results" class="result-container">
        <h2>สรุปคะแนนรวม</h2>
        <p id="totalScore">คะแนนรวม: 0</p>
        <div id="failedQuestions">
            <!-- Failed questions and exercises will be displayed here -->
        </div>
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

            questionIds.forEach(id => {
                const score = parseInt(document.getElementById(id).value, 10);
                let feedback = '';
                let imgSrc1 = '';
                let imgSrc2 = '';

                if (id === 'q1' || id === 'q2' || id === 'q3' || id === 'q4' || id === 'q5') {
                    if (score < 65) {
                        feedback = 'ควรฝึกซ้อม: Imagery + Progressive relaxation, Pawanmuktasana series; Goolf Nama (Ankle bending), Goolf Chakra (Ankle rotation), Poorna Titali (Full butterfly), Janu Naman (Knee bending)';
                        imgSrc1 = 'https://example.com/goolf-nama.png'; // Replace with actual image URL
                        imgSrc2 = 'https://example.com/pawanmuktasana.png'; // Replace with actual image URL
                    } else if (score <= 80) {
                        feedback = 'ควรฝึกซ้อม: Deep breathing exercise (Nadi Shodhana), Yoga; Virabhadrasana 1 (Warrior 1 pose), Virabhadrasana 2 (Warrior 2 pose), Savasana';
                        imgSrc1 = 'https://example.com/virabhadrasana.png'; // Replace with actual image URL
                        imgSrc2 = 'https://example.com/savasana.png'; // Replace with actual image URL
                    }
                } else if (id === 'q6') {
                    if (score <= 65) {
                        feedback = 'ควรฝึกซ้อม: Squat, shuffle';
                        imgSrc1 = 'https://example.com/squat.png'; // Replace with actual image URL
                        imgSrc2 = 'https://example.com/shuffle.png'; // Replace with actual image URL
                    } else if (score <= 80) {
                        feedback = 'ควรฝึกซ้อม: Box jump, vertical jump';
                        imgSrc1 = 'https://example.com/box-jump.png'; // Replace with actual image URL
                        imgSrc2 = 'https://example.com/vertical-jump.png'; // Replace with actual image URL
                    }
                } else if (id === 'q7') {
                    if (score <= 65) {
                        feedback = 'ควรฝึกซ้อม: Wall Squat, Skater hop';
                        imgSrc1 = 'https://example.com/wall-squat.png'; // Replace with actual image URL
                        imgSrc2 = 'https://example.com/skater-hop.png'; // Replace with actual image URL
                    } else if (score <= 80) {
                        feedback = 'ควรฝึกซ้อม: Lunges to knee jump, Split squat jump';
                        imgSrc1 = 'https://example.com/lunges-to-knee-jump.png'; // Replace with actual image URL
                        imgSrc2 = 'https://example.com/split-squat-jump.png'; // Replace with actual image URL
                    }
                } else if (id === 'q8') {
                    if (score <= 65) {
                        feedback = 'ควรฝึกซ้อม: Hop test, Step up and down';
                        imgSrc1 = 'https://example.com/hop-test.png'; // Replace with actual image URL
                        imgSrc2 = 'https://example.com/step-up-and-down.png'; // Replace with actual image URL
                    } else if (score <= 80) {
                        feedback = 'ควรฝึกซ้อม: Single leg hop hop stick, Single leg cross over';
                        imgSrc1 = 'https://example.com/single-leg-hop.png'; // Replace with actual image URL
                        imgSrc2 = 'https://example.com/single-leg-cross-over.png'; // Replace with actual image URL
                    }
                } else if (id === 'q9') {
                    if (score <= 65) {
                        feedback = 'ควรฝึกซ้อม: Lateral step up, Pop squat';
                        imgSrc1 = 'https://example.com/lateral-step-up.png'; // Replace with actual image URL
                        imgSrc2 = 'https://example.com/pop-squat.png'; // Replace with actual image URL
                    } else if (score <= 80) {
                        feedback = 'ควรฝึกซ้อม: 180 degree jump, Power step up';
                        imgSrc1 = 'https://example.com/180-degree-jump.png'; // Replace with actual image URL
                        imgSrc2 = 'https://example.com/power-step-up.png'; // Replace with actual image URL
                    }
                } else if (id === 'q10') {
                    if (score <= 65) {
                        feedback = 'ควรฝึกซ้อม: Bridge, Single leg bridge';
                        imgSrc1 = 'https://example.com/bridge.png'; // Replace with actual image URL
                        imgSrc2 = 'https://example.com/single-leg-bridge.png'; // Replace with actual image URL
                    } else if (score <= 80) {
                        feedback = 'ควรฝึกซ้อม: Single leg bridge with ball, Hamstring curl on ball';
                        imgSrc1 = 'https://example.com/single-leg-bridge-with-ball.png'; // Replace with actual image URL
                        imgSrc2 = 'https://example.com/hamstring-curl.png'; // Replace with actual image URL
                    }
                } else if (id === 'q11') {
                    if (score <= 65) {
                        feedback = 'ควรฝึกซ้อม: Weight shifting, SEBT';
                        imgSrc1 = 'https://example.com/weight-shifting.png'; // Replace with actual image URL
                        imgSrc2 = 'https://example.com/sebt.png'; // Replace with actual image URL
                    } else if (score <= 80) {
                        feedback = 'ควรฝึกซ้อม: Multi-directional shuttle run, Fig of eight';
                        imgSrc1 = 'https://example.com/multi-directional-shuttle-run.png'; // Replace with actual image URL
                        imgSrc2 = 'https://example.com/fig-of-eight.png'; // Replace with actual image URL
                    }
                } else if (id === 'q12') {
                    if (score <= 65) {
                        feedback = 'ควรฝึกซ้อม: Transitional stabilization controlled without impact with dumbbells, Lunges with dumbbells';
                        imgSrc1 = 'https://example.com/transitional-stabilization.png'; // Replace with actual image URL
                        imgSrc2 = 'https://example.com/lunges-with-dumbbells.png'; // Replace with actual image URL
                    } else if (score <= 80) {
                        feedback = 'ควรฝึกซ้อม: Sumo squat with double dumbbells, Sled drag';

