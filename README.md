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
    <div id="introPage" class="container">
        <h1>คำชี้แจงการใช้งาน</h1>
        <p>ก่อนทำแบบประเมินนี้ท่านจะต้องผ่านเงื่อนไขดังต่อไปนี้คือ:</p>
        <ul style="text-align: left;">
            <li>1. ต้องผ่านการฟื้นฟูการเคลื่อนไหวของข้อเข่ามาก่อน</li>
            <li>2. กำลังกล้ามเนื้อขาที่บาดเจ็บต้องสมารถใช้งานได้ไม่ต่ำกว่า 80% ของกล้ามเนื้อขาข้างปกติ</li>
        </ul>
        <button class="submit-btn" onclick="nextPage()">ถัดไป</button>
    </div>

    <h1>แบบประเมิน</h1>

    <div class="container">
        <!-- Add all 12 questions -->
        <label for="q1">คำถามที่ 1: คุณมั่นใจเพียงใดว่าจะสามารถเล่นกีฬาได้ดีในระดับเดิม</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q1" oninput="updateOutput('q1Output', this.value)">
        <span id="q1Output" class="output">0</span><br>

        <label for="q2">คำถามที่ 2: คุณคิดว่ามีโอกาสมากน้อยเพียงใดที่จะกลับมาบาดเจ็บซ้ำบริเวณเข่าจากการเล่นกีฬา</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q2" oninput="updateOutput('q2Output', this.value)">
        <span id="q2Output" class="output">0</span><br>

        <label for="q3">คำถามที่ 3: คุณมีความกังวลเพียงใดเกี่ยวกับการเล่นกีฬา</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q3" oninput="updateOutput('q3Output', this.value)">
        <span id="q3Output" class="output">0</span><br>

        <label for="q4">คำถามที่ 4: คุณมั่นใจเพียงใดว่าจะไม่เกิดอาการเข่าหลวมจากการเล่นกีฬาอีก</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q4" oninput="updateOutput('q4Output', this.value)">
        <span id="q4Output" class="output">0</span><br>

        <label for="q5">คำถามที่ 5: คุณมั่นใจเพียงใดว่าคุณสามารถเล่นกีฬาได้โดยไม่ต้องกังวลเกี่ยวกับการบาดเจ็บของเข่า</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q5" oninput="updateOutput('q5Output', this.value)">
        <span id="q5Output" class="output">0</span><br>

        <label for="q6">คำถามที่ 6: คุณรู้สึกหงุดหงิดเพียงใด ที่ต้องนึกถึงเข่าที่บาดเจ็บเวลาเล่นกีฬา</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q6" oninput="updateOutput('q6Output', this.value)">
        <span id="q6Output" class="output">0</span><br>

        <label for="q7">คำถามที่ 7: คุณกลัวเพียงใดว่าจะเกิดการบาดเจ็บซ้ำบริเวณเข่าจากการเล่นกีฬา</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q7" oninput="updateOutput('q7Output', this.value)">
        <span id="q7Output" class="output">0</span><br>

        <label for="q8">คำถามที่ 8: คุณมั่นใจเพียงใดว่าเข่าของคุณสามารถรับแรงกระแทกได้</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q8" oninput="updateOutput('q8Output', this.value)">
        <span id="q8Output" class="output">0</span><br>

        <label for="q9">คำถามที่ 9: คุณกลัวเพียงใดว่าจะบาดเจ็บบริเวณเข่าโดยไม่ได้ตั้งใจจากการเล่นกีฬา</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q9" oninput="updateOutput('q9Output', this.value)">
        <span id="q9Output" class="output">0</span><br>

        <label for="q10">คำถามที่ 10: คุณคิดว่าการผ่าตัดและการฟื้นฟูร่างกายเป็นอุปสรรคต่อการกลับไปเล่นกีฬาเพียงใด</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q10" oninput="updateOutput('q10Output', this.value)">
        <span id="q10Output" class="output">0</span><br>

        <label for="q11">คำถามที่ 11: คุณมั่นใจเพียงใดว่าจะแสดงความสามารถทางกีฬาได้อย่างดี</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q11" oninput="updateOutput('q11Output', this.value)">
        <span id="q11Output" class="output">0</span><br>

        <label for="q12">คำถามที่ 12: คุณรู้สึกผ่อนคลายเพียงใดเมื่อเล่นกีฬา</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q12" oninput="updateOutput('q12Output', this.value)">
        <span id="q12Output" class="output">0</span><br>

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
                        feedback = 'ควรฝึกซ้อม: Box jump, vertical jump, Lunges to knee jump, Split squat jump, Single leg hop hop stick, Single leg cross over, 180 degree jump, Power step up, Single leg bridge with ball, Hamstring curl on ball';
                        imgSrc = 'https://github.com/your-repo/box-jump.png'; // Replace with actual image URL
                    }
                } else if (id === 'q11' || id === 'q12') {
                    if (score < 65) {
                        feedback = 'ควรฝึกซ้อม: Weight shifting, SEBT, Transitional stabilization controlled without impact with dumbbells, Lunges with dumbbells';
                        imgSrc = 'https://github.com/your-repo/weight-shifting.png'; // Replace with actual image URL
                    } else if (score >= 65 && score <= 80) {
                        feedback = 'ควรฝึกซ้อม: Multi-directional shuttle run, Fig of eight, Sumo squat with double dumbbells, Sled drag';
                        imgSrc = 'https://github.com/your-repo/multi-directional-shuttle-run.png'; // Replace with actual image URL
                    }
                }

                if (feedback) {
                    const questionFeedback = document.createElement('div');
                    questionFeedback.innerHTML = `
                        <h3>คำถามที่ ${id.substring(1)}:</h3>
                        <p>${feedback}</p>
                        <img src="${imgSrc}" class="exercise-img" alt="Exercise Image">
                    `;
                    failedQuestions.appendChild(questionFeedback);
                }
            });
        }
    </script>
</body>
</html>
