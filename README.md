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

        .container, .question-container {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin: 20px;
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

        .hidden {
            display: none;
        }

        @media (max-width: 600px) {
            .container, .question-container {
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

    <!-- หน้าแบบประเมิน -->
    <div id="assessmentPage" class="hidden">
        <h1>แบบประเมิน</h1>

        <!-- คำถามทั้งหมดเรียงต่อเนื่องกัน (ข้อ 1-12) -->
        <div class="question-container">
            <label for="q1">คำถามที่ 1: คุณมั่นใจเพียงใดว่าจะสามารถเล่นกีฬาได้ดีในระดับเดิม</label><br>
            <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q1" oninput="updateOutput('q1Output', this.value)">
            <span id="q1Output" class="output">0</span>
        </div>

        <!-- เพิ่มคำถามที่เหลือ -->

        <button class="submit-btn" onclick="showResults()">ดูคะแนน</button>
    </div>

    <script>
        // ฟังก์ชันเปลี่ยนหน้าไปยังแบบประเมิน
        function nextPage() {
            document.getElementById('introPage').classList.add('hidden');
            document.getElementById('assessmentPage').classList.remove('hidden');
        }

        // ฟังก์ชันอัพเดตผลลัพธ์ของ slider
        function updateOutput(outputId, value) {
            document.getElementById(outputId).innerText = value;
        }

        // ฟังก์ชันคำนวณคะแนนรวม
        function showResults() {
            let totalScore = 0;
            const questionIds = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12'];
            questionIds.forEach(id => {
                totalScore += parseInt(document.getElementById(id).value, 10);
            });

            alert(`คะแนนรวม: ${totalScore}`);
        }
    </script>

</body>
</html>
