<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>แบบประเมิน</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .question-container {
            margin: 20px;
        }
        .slider {
            width: 80%;
        }
        .output {
            font-weight: bold;
            margin-left: 10px;
        }
    </style>
</head>
<body>
    <h1>แบบประเมิน</h1>

    <!-- Domain: Emotion (ข้อ 1-5) -->
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

    <!-- Domain: Confidence in performance (ข้อ 6-10) -->
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

    <!-- Domain: Risk appraisal (ข้อ 11-12) -->
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

    <script>
        function updateOutput(outputId, value) {
            document.getElementById(outputId).innerText = value;
        }
    </script>
</body>
</html>
