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
            display: none;
            flex-direction: column;
            align-items: center;
        }

        .active {
            display: flex !important;
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
    <!-- หน้าแรก คำชี้แจง -->
    <div id="introPage" class="container active">
        <h1>คำชี้แจงการใช้งาน</h1>
        <p>ก่อนทำแบบประเมินนี้ท่านจะต้องผ่านเงื่อนไขดังต่อไปนี้คือ:</p>
        <ul style="text-align: left;">
            <li> ไม่มีปัญหาการจำกัดการเคลื่อนไหว</li>
            <li> กำลังกล้ามเนื้อไม่น้อยกว่า 80% ของขาข้างปกติ</li>
            <li> ไม่มีอาการปวดและบวมหลังทำกอจกรรมการเคลื่อนไหว</li>
        </ul>
        <button class="submit-btn" onclick="nextPage()">ยอมรับ</button>
    </div>

    <!-- แบบประเมิน -->
    <div id="assessmentPage" class="container">
        <h1>แบบประเมิน</h1>
        <!-- Add all 12 questions -->
        <label for="q1">คำถามที่ 1: คุณมั่นใจเพียงใดว่าจะสามารถเล่นกีฬาได้ดีในระดับเดิม</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q1" oninput="updateOutput('q1Output', this.value)">
        <span id="q1Output" class="output">0</span><br>

        <label for="q2">คำถามที่ 2: คุณคิดว่ามีโอกาสมากน้อยเพียงใดที่จะกลับมาบาดเจ็บซ้ำบริเวณเข่าจากการเล่นกีฬา</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q2" oninput="updateOutput('q2Output', this.value)">
        <span id="q2Output" class="output">0</span><br>

        <!-- Repeat the rest of the questions here -->

        <button class="submit-btn" onclick="showResults()">ดูคะแนน</button>
    </div>

    <!-- สรุปคะแนน -->
    <div id="results" class="result-container">
        <h2>สรุปคะแนนรวม</h2>
        <p id="totalScore">คะแนนรวม: 0</p>
        <div id="failedQuestions">
            <!-- Failed questions and exercises will be displayed here -->
        </div>
    </div>

    <script>
        function nextPage() {
            document.getElementById('introPage').classList.remove('active');
            document.getElementById('assessmentPage').classList.add('active');
        }

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
                let imgSrc = '';

                if (id === 'q1' || id === 'q2' || id === 'q3' || id === 'q4' || id === 'q5') {
                    if (score < 65) {
                        feedback = 'ควรฝึกซ้อม noncontact nonpivot: Imagery + Progressive relaxation, Pawanmuktasana series; Goolf Nama, Goolf Chakra, Poorna Titali, Janu Naman';
                        imgSrc = 'https://github.com/your-repo/goolf-nama.png'; // Replace with actual image URL
                    } else if (score >= 65 && score <= 80) {
                        feedback = 'ควรฝึกซ้อม noncontact pivot: Deep breathing (Nadi Shodhana), Yoga (Virabhadrasana 1, Virabhadrasana 2), Savasana';
                        imgSrc = 'https://github.com/your-repo/virabhadrasana.png'; // Replace with actual image URL
                    }
                } else if (id === 'q6' || id === 'q7' || id === 'q8' || id === 'q9' || id === 'q10') {
                    if (score < 65) {
                        feedback = 'ควรฝึกซ้อม: Squat, shuffle, Wall Squat, Skater hop, Hop test, Step up and down, Lateral step up, Pop squat, Bridge, Single leg bridge';
                        imgSrc = 'https://github.com/your-repo/squat.png'; // Replace with actual image URL
                    } else if (score >= 65 && score <= 80) {
                        feedback = 'ควรฝึกซ

