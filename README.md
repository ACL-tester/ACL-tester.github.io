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

        .question-container {
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

        @media (max-width: 600px) {
            .question-container {
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

    <!-- คำถามทั้งหมดเรียงต่อเนื่องกัน (ข้อ 1-12) -->
    <div class="question-container">
        <label for="q1">คำถามที่ 1: คุณมั่นใจเพียงใดว่าจะสามารถเล่นกีฬาได้ดีในระดับเดิม</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q1" oninput="updateOutput('q1Output', this.value)">
        <span id="q1Output" class="output">0</span>
    </div>

    <div class="question-container">
        <label for="q2">คำถามที่ 2: คุณคิดว่ามีโอกาสมากน้อยเพียงใดที่จะกลับมาบาดเจ็บซ้ำบริเวณเข่าจากการเล่นกีฬา</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q2" oninput="updateOutput('q2Output', this.value)">
        <span id="q2Output" class="output">0</span>
    </div>

    <div class="question-container">
        <label for="q3">คำถามที่ 3: คุณมีความกังวลเพียงใดเกี่ยวกับการเล่นกีฬา</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q3" oninput="updateOutput('q3Output', this.value)">
        <span id="q3Output" class="output">0</span>
    </div>

    <div class="question-container">
        <label for="q4">คำถามที่ 4: คุณมั่นใจเพียงใดว่าจะไม่เกิดอาการเข่าหลวมจากการเล่นกีฬาอีก</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q4" oninput="updateOutput('q4Output', this.value)">
        <span id="q4Output" class="output">0</span>
    </div>

    <div class="question-container">
        <label for="q5">คำถามที่ 5: คุณมั่นใจเพียงใดว่าคุณสามารถเล่นกีฬาได้โดยไม่ต้องกังวลเกี่ยวกับการบาดเจ็บของเข่า</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q5" oninput="updateOutput('q5Output', this.value)">
        <span id="q5Output" class="output">0</span>
    </div>

    <div class="question-container">
        <label for="q6">คำถามที่ 6: คุณรู้สึกหงุดหงิดเพียงใด ที่ต้องนึกถึงเข่าที่บาดเจ็บเวลาเล่นกีฬา</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q6" oninput="updateOutput('q6Output', this.value)">
        <span id="q6Output" class="output">0</span>
    </div>

    <div class="question-container">
        <label for="q7">คำถามที่ 7: คุณกลัวเพียงใดว่าจะเกิดการบาดเจ็บซ้ำบริเวณเข่าจากการเล่นกีฬา</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q7" oninput="updateOutput('q7Output', this.value)">
        <span id="q7Output" class="output">0</span>
    </div>

    <div class="question-container">
        <label for="q8">คำถามที่ 8: คุณมั่นใจเพียงใดว่าเข่าของคุณสามารถรับแรงกระแทกได้</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q8" oninput="updateOutput('q8Output', this.value)">
        <span id="q8Output" class="output">0</span>
    </div>

    <div class="question-container">
        <label for="q9">คำถามที่ 9: คุณกลัวเพียงใดว่าจะบาดเจ็บบริเวณเข่าโดยไม่ได้ตั้งใจจากการเล่นกีฬา</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q9" oninput="updateOutput('q9Output', this.value)">
        <span id="q9Output" class="output">0</span>
    </div>

    <div class="question-container">
        <label for="q10">คำถามที่ 10: คุณคิดว่าการผ่าตัดและการฟื้นฟูร่างกายเป็นอุปสรรคต่อการกลับไปเล่นกีฬาเพียงใด</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q10" oninput="updateOutput('q10Output', this.value)">
        <span id="q10Output" class="output">0</span>
    </div>

    <div class="question-container">
        <label for="q11">คำถามที่ 11: คุณมั่นใจเพียงใดว่าจะแสดงความสามารถทางกีฬาได้อย่างดี</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q11" oninput="updateOutput('q11Output', this.value)">
        <span id="q11Output" class="output">0</span>
    </div>

    <div class="question-container">
        <label for="q12">คำถามที่ 12: คุณรู้สึกผ่อนคลายเพียงใดเมื่อเล่นกีฬา</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q12" oninput="updateOutput('q12Output', this.value)">
        <span id="q12Output" class="output">0</span>
    </div>

    <button class="submit-btn" onclick="calculateScore()">ดูคะแนน</button>

    <script>
        // Function to update the output when slider is moved
        function updateOutput(outputId, value) {
            document.getElementById(outputId).innerText = value;
        }

        function calculateScore() {
            const questions = [
                { id: 'q1', outputId: 'q1Output', exercises: {
                    lessThan65: ['Imagery + Progressive relaxation', 'Pawanmuktasana series; Goolf Nama (Ankle bending)', 'Goolf Chakra (Ankle rotation)', 'Poorna Titali (Full butterfly)', 'Janu Naman (Knee bending)'],
                    between65and80: ['Deep breathing exercise (Nadi Shodhana)', 'Yoga; Virabhadrasana 1 (Warrior 1 pose)', 'Virabhadrasana 2 (Warrior 2 pose)', 'Savasana']
                }},
                { id: 'q2', outputId: 'q2Output', exercises: {
                    lessThan65: ['Imagery + Progressive relaxation', 'Pawanmuktasana series; Goolf Nama (Ankle bending)', 'Goolf Chakra (Ankle rotation)', 'Poorna Titali (Full butterfly)', 'Janu Naman (Knee bending)'],
                    between65and80: ['Deep breathing exercise (Nadi Shodhana)', 'Yoga; Virabhadrasana 1 (Warrior 1 pose)', 'Virabhadrasana 2 (Warrior 2 pose)', 'Savasana']
                }},
                { id: 'q3', outputId: 'q3Output', exercises: {
                    lessThan65: ['Imagery + Progressive relaxation', 'Pawanmuktasana series; Goolf Nama (Ankle bending)', 'Goolf Chakra (Ankle rotation)', 'Poorna Titali (Full butterfly)', 'Janu Naman (Knee bending)'],
                    between65and80: ['Deep breathing exercise (Nadi Shodhana)', 'Yoga; Virabhadrasana 1 (Warrior 1 pose)', 'Virabhadrasana 2 (Warrior 2 pose)', 'Savasana']
                }},
                { id: 'q4', outputId: 'q4Output', exercises: {
                    lessThan65: ['Imagery + Progressive relaxation', 'Pawanmuktasana series; Goolf Nama (Ankle bending)', 'Goolf Chakra (Ankle rotation)', 'Poorna Titali (Full butterfly)', 'Janu Naman (Knee bending)'],
                    between65and80: ['Deep breathing exercise (Nadi Shodhana)', 'Yoga; Virabhadrasana 1 (Warrior 1 pose)', 'Virabhadrasana 2 (Warrior 2 pose)', 'Savasana']
                }},
                { id: 'q5', outputId: 'q5Output', exercises: {
                    lessThan65: ['Imagery + Progressive relaxation', 'Pawanmuktasana series; Goolf Nama (Ankle bending)', 'Goolf Chakra (Ankle rotation)', 'Poorna Titali (Full butterfly)', 'Janu Naman (Knee bending)'],
                    between65and80: ['Deep breathing exercise (Nadi Shodhana)', 'Yoga; Virabhadrasana 1 (Warrior 1 pose)', 'Virabhadrasana 2 (Warrior 2 pose)', 'Savasana']
                }},
                { id: 'q6', outputId: 'q6Output', exercises: {
                    lessThan65: ['Squat', 'shuffle'],
                    between65and80: ['Box jump', 'vertical jump']
                }},
                { id: 'q7', outputId: 'q7Output', exercises: {
                    lessThan65: ['Wall Squat', 'Skater hop'],
                    between65and80: ['Lunges to knee jump', 'Split squat jump']
                }},
                { id: 'q8', outputId: 'q8Output', exercises: {
                    lessThan65: ['Hop test', 'Step up and down'],
                    between65and80: ['Single leg hop hop stick', 'Single leg cross over']
                }},
                { id: 'q9', outputId: 'q9Output', exercises: {
                    lessThan65: ['Lateral step up', 'Pop squat'],
                    between65and80: ['180 degree jump', 'Power step up']
                }},
                { id: 'q10', outputId: 'q10Output', exercises: {
                    lessThan65: ['Bridge', 'Single leg bridge'],
                    between65and80: ['Single leg bridge with ball', 'Hamstring curl on ball']
                }},
                { id: 'q11', outputId: 'q11Output', exercises: {
                    lessThan65: ['Weight shifting', 'SEBT'],
                    between65and80: ['Multi directional shuttle run', 'Fig of eight']
                }},
                { id: 'q12', outputId: 'q12Output', exercises: {
                    lessThan65: ['Transitional stabilization controlled without impact with dumbbells', 'Lunges with dumbbells'],
                    between65and80: ['Sumo squat with double dumbbells', 'Sled drag']
                }}
            ];

            questions.forEach(question => {
                const value = parseInt(document.getElementById(question.id).value);
                const output = document.getElementById(question.outputId);

                let exerciseList = '';
                if (value < 65) {
                    exerciseList = question.exercises.lessThan65.join(', ');
                } else if (value >= 65 && value <= 80) {
                    exerciseList = question.exercises.between65and80.join(', ');
                }

                output.innerText += ' - ' + exerciseList;
            });
        }
    </script>
</body>
</html>

