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

    <!-- เพิ่มคำถามจนถึงข้อที่ 12 -->

    <button class="submit-btn" onclick="calculateScore()">ดูคะแนน</button>

    <script>
        // Function to update the output when slider is moved
        function updateOutput(outputId, value) {
            document.getElementById(outputId).innerText = value;
        }
    </script>
</body>
</html>

