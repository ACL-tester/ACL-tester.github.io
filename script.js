// เมื่อผู้ใช้กดประเมินผลเสร็จ
function evaluateResults() {
  // เก็บคะแนนของแต่ละ Domain
  const emotionScore = calculateEmotionScore();
  const confidenceScore = calculateConfidenceScore();
  const riskAppraisalScore = calculateRiskAppraisalScore();

  // เช็คเกณฑ์การผ่านของแต่ละ Domain
  const emotionResult = checkCutoff(emotionScore);
  const confidenceResult = checkCutoff(confidenceScore);
  const riskAppraisalResult = checkCutoff(riskAppraisalScore);

  // เปลี่ยนไปหน้าสรุปผล
  displayResults(emotionResult, confidenceResult, riskAppraisalResult);
}

// ฟังก์ชันเช็คเกณฑ์การผ่าน
function checkCutoff(score) {
  if (score < 65) {
    return "ไม่ผ่าน (ควรฝึก noncontact nonpivot)";
  } else if (score >= 65 && score <= 80) {
    return "ผ่าน (ฝึก noncontact pivot ได้)";
  } else {
    return "ผ่าน (สามารถกลับไปแข่งขันได้)";
  }
}

// ฟังก์ชันแสดงผลลัพธ์
function displayResults(emotionResult, confidenceResult, riskAppraisalResult) {
  // แสดงคะแนนรวม
  document.getElementById('emotionResult').innerText = emotionResult;
  document.getElementById('confidenceResult').innerText = confidenceResult;
  document.getElementById('riskAppraisalResult').innerText = riskAppraisalResult;

  // แสดงข้อที่ไม่ผ่านพร้อมแนะนำท่าฝึก
  if (emotionResult.includes("ไม่ผ่าน")) {
    displayExercises('emotion');
  }
  if (confidenceResult.includes("ไม่ผ่าน")) {
    displayExercises('confidence');
  }
  if (riskAppraisalResult.includes("ไม่ผ่าน")) {
    displayExercises('riskAppraisal');
  }
}

// ฟังก์ชันแนะนำท่าฝึก
function displayExercises(domain) {
  let exerciseList = "";
  if (domain === 'emotion') {
    exerciseList = getEmotionExercises();
  } else if (domain === 'confidence') {
    exerciseList = getConfidenceExercises();
  } else if (domain === 'riskAppraisal') {
    exerciseList = getRiskAppraisalExercises();
  }
  
  document.getElementById('exerciseList').innerHTML = exerciseList;
}

// ตัวอย่างการแนะนำท่าฝึกใน Emotion domain
function getEmotionExercises() {
  return `
    <h4>แนะนำท่าฝึกสำหรับ Emotion</h4>
    <ul>
      <li>Imagery + Progressive relaxation</li>
      <li>Pawanmuktasana series: Goolf Nama, Goolf Chakra, Poorna Titali, Janu Naman</li>
    </ul>
  `;
}
