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

        <label for="q12">คำถามที่ 12: คุณรู้สึกผ่อนคลายเพียงใดเมื่อต้องเล่นกีฬา</label><br>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q12" oninput="updateOutput('q12Output', this.value)">
        <span id="q12Output" class="output">0</span><br>

        <button class="submit-btn" onclick="submitAssessment()">ส่งคำตอบ</button>
    </div>

    <!-- เพิ่ม LIFF SDK -->
    <script src="https://static.line-scdn.net/liff/edge/liff.min.js"></script>
    <script>
        // ฟังก์ชันในการอัพเดตค่าที่แสดงผล
        function updateOutput(outputId, value) {
            document.getElementById(outputId).textContent = value;
        }

        // ฟังก์ชันในการส่งข้อมูลการประเมิน
        function submitAssessment() {
            const scores = [];
            for (let i = 1; i <= 12; i++) {
                scores.push(parseInt(document.getElementById(`q${i}`).value, 10));
            }
            
            const totalScore = scores.reduce((a, b) => a + b, 0);
            const averageScore = totalScore / scores.length;

            // ตรวจสอบผลคะแนน
            let resultMessage = "";
            if (averageScore < 65) {
                resultMessage = "แนะนำการฝึกฝนแบบ Non-Contact Non-Pivot";
            } else if (averageScore >= 65 && averageScore <= 80) {
                resultMessage = "แนะนำการฝึกฝนแบบ Non-Contact Pivot";
            } else {
                resultMessage = "สามารถกลับไปแข่งขันกีฬาได้";
            }

            document.querySelector('.result-container').classList.add('show');
            document.getElementById('result').textContent = resultMessage;
        }

        // Initialize LIFF
        window.onload = function() {
            liff.init({ liffId: "YOUR_LIFF_ID" }).then(() => {
                if (!liff.isLoggedIn()) {
                    liff.login();
                }
            }).catch((err) => {
                console.error('LIFF Initialization failed ', err);
            });
        };
    </script>

    <!-- ข้อความผลลัพธ์ -->
    <div class="result-container">
        <h2>ผลการประเมิน</h2>
        <p id="result"></p>
    </div>
</body>
</html>

