<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>แบบประเมินอิอิ</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>แบบประเมิน</h1>

    <!-- Domain: Emotion (ข้อ 1-5) -->
    <section class="emotion-question-section">
        <h2>Emotion Domain</h2>
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
    </section>

    <!-- Domain: Confidence in performance (ข้อ 6-10) -->
    <section class="confidence-question-section">
        <h2>Confidence in Performance Domain</h2>
        <div class="question-container">
            <label for="q6">คำถามที่ 6: คุณรู้สึกหงุดหงิดเพียงใด ที่ต้องนึกถึงเข่าที่บาดเจ็บเวลาเล่นกีฬา</label><br>
            <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q6" oninput="updateOutput('q6Output', this.value)">
            <span id="q6Output" class="output">0</span>
        </div>

        <div class="question-container">
            <label for="q7">คำถามที่ 7: คุณมั่นใจเพียงใดว่าการบาดเจ็บเข่าจะไม่ทำให้ประสิทธิภาพในการเล่นกีฬาลดลง</label><br>
            <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q7" oninput="updateOutput('q7Output', this.value)">
            <span id="q7Output" class="output">0</span>
        </div>

        <div class="question-container">
            <label for="q8">คำถามที่ 8: คุณรู้สึกเพียงใดว่าคุณสามารถทำกิจกรรมต่าง ๆ ในชีวิตประจำวันได้เหมือนเดิม</label><br>
            <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q8" oninput="updateOutput('q8Output', this.value)">
            <span id="q8Output" class="output">0</span>
        </div>

        <div class="question-container">
            <label for="q9">คำถามที่ 9: คุณคิดว่าคุณจะสามารถกลับไปเล่นกีฬาได้ด้วยประสิทธิภาพเดิมหลังจากฟื้นฟูอาการบาดเจ็บ</label><br>
            <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q9" oninput="updateOutput('q9Output', this.value)">
            <span id="q9Output" class="output">0</span>
        </div>

        <div class="question-container">
            <label for="q10">คำถามที่ 10: คุณรู้สึกเพียงใดว่าคุณสามารถควบคุมความเครียดและกังวลเกี่ยวกับอาการบาดเจ็บได้</label><br>
            <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q10" oninput="updateOutput('q10Output', this.value)">
            <span id="q10Output" class="output">0</span>
        </div>
    </section>

    <!-- Domain: Risk appraisal (ข้อ 11-12) -->
    <section class="risk-appraisal-question-section">
        <h2>Risk Appraisal Domain</h2>
        <div class="question-container">
            <label for="q11">คำถามที่ 11: คุณรู้สึกเพียงใดว่าคุณสามารถควบคุมการบาดเจ็บที่เข่าไม่ให้เกิดซ้ำได้</label><br>
            <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q11" oninput="updateOutput('q11Output', this.value)">
            <span id="q11Output" class="output">0</span>
        </div>

        <div class="question-container">
            <label for="q12">คำถามที่ 12: คุณมีความมั่นใจเพียงใดว่าคุณสามารถลดความเสี่ยงการบาดเจ็บในอนาคต</label><br>
            <input type="range" min="0" max="100" step="10" value="0" class="slider" id="q12" oninput="updateOutput('q12Output', this.value)">
            <span id="q12Output" class="output">0</span>
        </div>
    </section>

    <!-- Button to calculate score and navigate to summary.html -->
    <button class="submit-btn" onclick="calculateScore()">ดูคะแนน</button>

    <script src="script.js"></script>
</body>
</html>
