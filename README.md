<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ผลลัพธ์การประเมิน</title>
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

        .result {
            font-size: 1.2rem;
            font-weight: 600;
            color: #333;
            margin: 10px 0;
        }

        .exercise-img {
            max-width: 100%;
            height: auto;
            border-radius: 5px;
            margin: 10px 0;
        }

        .back-btn {
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

        .back-btn:hover {
            background-color: #555;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>ผลลัพธ์การประเมิน</h1>

        <div id="results">
            <h2>สรุปคะแนนรวม</h2>
            <p id="totalScore">คะแนนรวม: 0</p>
            <div id="failedQuestions">
                <!-- Failed questions and exercises will be displayed here -->
            </div>
        </div>

        <button class="back-btn" onclick="window.history.back()">กลับไปที่หน้าแบบประเมิน</button>
    </div>

    <script>
        function getQueryParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }

        function showResults() {
            const totalScore = parseInt(getQueryParam('totalScore'), 10);
            const questionIds = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12'];
            const failedQuestions = document.getElementById('failedQuestions');
            failedQuestions.innerHTML = '';

            document.getElementById('totalScore').textContent = `คะแนนรวม: ${totalScore}`;

            questionIds.forEach(id => {
                const score = parseInt(getQueryParam(id), 10);
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
                } else if (id === 'q6' || id === 'q7' || id === 'q8' || id === 'q9' || id === 'q10') {
                    if (score < 65) {
                        feedback = 'ควรฝึกซ้อม: Squat, shuffle, Wall Squat, Skater hop, Hop test, Step up and down, Lateral step up, Pop squat, Bridge, Single leg bridge';
                        imgSrc = 'https://github.com/your-repo/squat.png'; // Replace with actual image URL
                    } else if (score <= 80) {
                        feedback = 'ควรฝึกซ้อม: Box jump, vertical jump, Lunges to knee jump, Split squat jump, Single leg hop hop stick, Single leg cross over, 180 degree jump, Power step up, Single leg bridge with ball, Hamstring curl on ball';
                        imgSrc = 'https://github.com/your-repo/box-jump.png'; // Replace with actual image URL
                    }
                } else if (id === 'q11' || id === 'q12') {
                    if (score < 65) {
                        feedback = 'ควรฝึกซ้อม: Weight shifting, SEBT, Transitional stabilization controlled without impact with dumbbells, Lunges with dumbbells';
                        imgSrc = 'https://github.com/your-repo/weight-shifting.png'; // Replace with actual image URL
                    } else if (score <= 80) {
                        feedback = 'ควรฝึกซ้อม: Multi-directional shuttle run, Fig of eight, Sumo squat with double dumbbells, Sled drag.';
                        imgSrc = 'https://github.com/your-repo/multi-directional-shuttle-run.png'; // Replace with actual image URL
                    }
                }

                if (feedback) {
                    const questionDiv = document.createElement('div');
                    questionDiv.classList.add('result');
                    questionDiv.innerHTML = `<p><strong>คำถาม ${id.replace('q', '')}</strong>: ${feedback}</p>`;
                    if (imgSrc) {
                        questionDiv.innerHTML += `<img src="${imgSrc}" alt="Exercise Image" class="exercise-img">`;
                    }
                    failedQuestions.appendChild(questionDiv);
                }
            });
        }

        showResults();
    </script>
</body>
</html>

