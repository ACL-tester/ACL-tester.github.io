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
    <!-- หน้าแสดงนโยบายความเป็นส่วนตัว -->
    <div id="privacyPage" class="container active">
        <h1>นโยบายความเป็นส่วนตัว</h1>
        <p>แบบประเมินนี้ขออนุญาตเก็บรวบรวมข้อมูลส่วนบุคคลของท่านเพื่อนำไปใช้วิเคราะห์และประเมินสภาวะทางจิตใจหลังผ่าตัดเย็บซ่อมเอ็นไขว้หน้าของข้อเข่า</p>
        <p>เพื่อป้องกันการบาดเจ็บซ้ำและประสิทธิภาพในการเล่นกีฬาที่ลดลง</p>
        <p>รับทราบและยอมรับท้้งนโยบายความเป็นส่วนตัวและเงื่อนไขการใช้บริการ</p>
        <button class="submit-btn" onclick="acceptPrivacy()">ยอมรับนโยบายความเป็นส่วนตัว</button>
    </div>

    <!-- หน้าแรก คำชี้แจง -->
    <div id="introPage" class="container">
        <h1>คำชี้แจงการใช้งาน</h1>
        <p>ก่อนทำแบบประเมินนี้ท่านจะต้องผ่านเงื่อนไขดังต่อไปนี้คือ:</p>
        <ul style="text-align: left;">
            <li> ไม่มีปัญหาการจำกัดการเคลื่อนไหว</li>
            <li> กำลังกล้ามเนื้อไม่น้อยกว่า 80% ของขาข้างปกติ</li>
            <li> ไม่มีอาการปวดและบวมหลังทำกิจกรรมการเคลื่อนไหว</li>
        </ul>
        <button class="submit-btn" onclick="nextPage()">ยอมรับ</button>
    </div>

    <!-- แบบประเมิน -->
    <div id="assessmentPage" class="container">
        <h1>แบบประเมิน</h1>
        
        <!-- 12 คำถาม -->
        <label for="q1">คำถามที่ 1: คุณมั่นใจเพียงใดว่าจะสามารถเล่นกีฬาได้ดีในระดับเดิม</label>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q1" oninput="updateOutput('q1Output', this.value)">
        <span id="q1Output" class="output">0</span><br>

        <label for="q2">คำถามที่ 2: คุณคิดว่ามีโอกาสมากน้อยเพียงใดที่จะกลับมาบาดเจ็บซ้ำบริเวณเข่าจากการเล่นกีฬา</label>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q2" oninput="updateOutput('q2Output', this.value)">
        <span id="q2Output" class="output">0</span><br>

        <label for="q3">คำถามที่ 3: คุณรู้สึกมั่นใจในการลงน้ำหนักบนขาข้างที่บาดเจ็บเพียงใด</label>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q3" oninput="updateOutput('q3Output', this.value)">
        <span id="q3Output" class="output">0</span><br>

        <label for="q4">คำถามที่ 4: คุณมั่นใจในการเคลื่อนไหวเร็วด้วยเข่าข้างที่บาดเจ็บเพียงใด</label>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q4" oninput="updateOutput('q4Output', this.value)">
        <span id="q4Output" class="output">0</span><br>

        <label for="q5">คำถามที่ 5: คุณมั่นใจว่าจะกระโดดและลงจอดด้วยขาข้างที่บาดเจ็บได้เพียงใด</label>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q5" oninput="updateOutput('q5Output', this.value)">
        <span id="q5Output" class="output">0</span><br>

        <label for="q6">คำถามที่ 6: คุณรู้สึกมั่นใจในการวิ่งด้วยความเร็วสูงเพียงใด</label>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q6" oninput="updateOutput('q6Output', this.value)">
        <span id="q6Output" class="output">0</span><br>

        <label for="q7">คำถามที่ 7: คุณรู้สึกมั่นใจในการเลี้ยวหรือเปลี่ยนทิศทางอย่างรวดเร็วเพียงใด</label>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q7" oninput="updateOutput('q7Output', this.value)">
        <span id="q7Output" class="output">0</span><br>

        <label for="q8">คำถามที่ 8: คุณมั่นใจว่าจะสามารถออกกำลังกายที่ต้องใช้ขาข้างที่บาดเจ็บได้ดีเพียงใด</label>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q8" oninput="updateOutput('q8Output', this.value)">
        <span id="q8Output" class="output">0</span><br>

        <label for="q9">คำถามที่ 9: คุณมั่นใจในการใช้ขาข้างที่บาดเจ็บในการทำกิจกรรมประจำวันได้ดีเพียงใด</label>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q9" oninput="updateOutput('q9Output', this.value)">
        <span id="q9Output" class="output">0</span><br>

        <label for="q10">คำถามที่ 10: คุณมั่นใจในการใช้ขาข้างที่บาดเจ็บในการทำกิจกรรมกีฬาหรือไม่</label>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q10" oninput="updateOutput('q10Output', this.value)">
        <span id="q10Output" class="output">0</span><br>

        <label for="q11">คำถามที่ 11: คุณมั่นใจว่าตนเองสามารถทำกิจกรรมกีฬาที่เคยทำได้ดีเพียงใด</label>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q11" oninput="updateOutput('q11Output', this.value)">
        <span id="q11Output" class="output">0</span><br>

        <label for="q12">คำถามที่ 12: คุณมั่นใจว่าตนเองสามารถกลับไปเล่นกีฬาได้ดีเพียงใด</label>
        <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q12" oninput="updateOutput('q12Output', this.value)">
        <span id="q12Output" class="output">0</span><br>


        <!-- ใส่คำถามเพิ่มเติมที่เหลือทั้งหมดตามเดิม... -->

        <button class="submit-btn" onclick="showResults()">ส่งแบบประเมิน</button>
    </div>

    <!-- ผลลัพธ์ -->
    <div id="resultPage" class="result-container">
        <h1>ผลลัพธ์การประเมิน</h1>
        <p id="totalScore"></p>
        <button class="submit-btn" onclick="restartAssessment()">ทำแบบประเมินใหม่</button>
    </div>

    <script>
        function updateOutput(id, value) {
            document.getElementById(id).innerText = value;
        }

        function acceptPrivacy() {
            document.getElementById("privacyPage").classList.remove("active");
            document.getElementById("introPage").classList.add("active");
        }

        function nextPage() {
            document.getElementById("introPage").classList.remove("active");
            document.getElementById("assessmentPage").classList.add("active");
        }

        function showResults() {
            const scores = [
                parseInt(document.getElementById("q1").value),
                parseInt(document.getElementById("q2").value),
                parseInt(document.getElementById("q3").value),
                // เพิ่มคะแนนคำถามอื่น ๆ ตามเดิม
            ];
            const totalScore = scores.reduce((acc, score) => acc + score, 0);
            document.getElementById("totalScore").innerText = `คะแนนรวมของคุณคือ: ${totalScore} คะแนน`;
            document.getElementById("assessmentPage").classList.remove("active");
            document.getElementById("resultPage").classList.add("show");
        }

        function restartAssessment() {
            document.getElementById("resultPage").classList.remove("show");
            document.getElementById("assessmentPage").classList.add("active");
            document.querySelectorAll('.slider').forEach(slider => {
                slider.value = 0;
                updateOutput(slider.id + 'Output', 0);
            });
        }
    </script>
</body>
</html>
