import React, {useState, useEffect, useRef} from 'react'
import Fade from '@mui/material/Fade';
import Lottie from "lottie-react";
import './styles/App.scss'
// lottie 引入
import lottie_hand from "./json/Hand.json";
import lottie_hand_blue from "./json/Hand_blue.json";
import lottie_KV from "./json/Proofpoint_KV.json";
// svg 引入
// import { imagesSVG } from './lib/imagesSVG'

function App() {
  const [page, setPage] = useState("home"); // 用來跳轉畫面
  const [question, setQuestion] = useState(0); // 題目
  const [answer, setAnswer] = useState("none"); // 答案
  const lottieRef = useRef(); // 綁定 transition lottie 來控制開始播放

  // 禁止右鍵
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
  
  // 獲取裝置高度
  useEffect(() => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  const handleStartAnimation = () => {
    lottieRef.current.play();
    setPage("start");
    generateRandomNumbers();
  };

  const handleAnimationFinish = () => {
    setPage("start");
  };

  const handleBackToHome = () => {
    postResult();
    setPage("home");
    setQuestion(0);
    setAnswer("none");
    lottieRef.current.goToAndStop(0, true);
  }
  
  const postResult = () => {
    fetch('https://proj.uppcdn.net/api/swg-game-proofpoints', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: { Question: question, Answer: answer } }),
    })
      .then(response => {
        if (!response.ok) { throw new Error('Error sending data to server'); }
        return response.json();
      })
      .then(data => {
        console.log('Data sent successfully', data);
      })
      .catch(error => {
        console.error('Error sending data to server', error);
      });
  };
  
  // 生成隨機數
  const generateRandomNumbers = () => {
    const newRandomNumbers = Math.floor(Math.random() * 13) + 1;;
    setQuestion(newRandomNumbers);
  };

  console.log('question ' + question)
  console.log('answer ' + answer)

  const question1 = <div className="question_text"><div className="question_answer">Gmail</div> 會自動阻擋超過 99.9% 的垃圾郵件、網路詐騙內容和惡意軟體，並保護全球超過 15 億個收件匣。</div>
  const question2 = <div className="question_text"><div className="question_answer">Gmail</div> 每天自動阻擋超過 1 億次<div className="inlineBlock">網路釣魚攻擊。</div></div>
  const question3 = <div className="question_text">當你可能要造訪危險的網站時，<div className="question_answer">Chrome</div> 的安全瀏覽功能會發出警示，提醒你留意危險和詐騙網站，避免密碼遭竊或電腦中毒。</div>
  const question4 = <div className="question_text"><div className="question_answer">Chrome</div> 的安全瀏覽功能每天阻擋超過 3 百萬次網路攻擊。</div>
  const question5 = <div className="question_text">超過 99% 的使用者在透過 <div className="question_answer">Google 搜尋</div>結果造訪網站時不會看到垃圾內容。</div>
  const question6 = <div className="question_text"><div className="question_answer">Google 密碼管理工具</div>可以協助你設定、儲存及管理所有密碼，並在密碼因資料侵害事件而外洩時提醒你。</div>
  const question7 = <div className="question_text"><div className="question_answer">Google 密碼管理工具</div>每天都會檢查 10 億個密碼，確認密碼是否因資料侵害事件而外洩。</div>
  const question8 = <div className="question_text"><div className="question_answer">Google Pay</div> 每天加密超過 1.1 億筆使用者付款資訊。</div>
  const question9 = <div className="question_text"><div className="question_answer">Google Play 安全防護</div>服務每天會掃描 1250 億個安裝於 Android 系統的應用程式，檢查當中是否有惡意<div className="inlineBlock">軟體。</div></div>
  const question10 = <div className="question_text"><div className="question_answer">Google 相簿</div><br/>每天加密 40 億張相片。</div>
  const question11 = <div className="question_text"><div className="question_answer">Google Meet</div> 在視訊會議期間，系統會加密所有傳輸中的資料，並阻止未受邀的對象加入會議。</div>
  const question12 = <div className="question_text"><div className="question_answer">Google 帳戶設定</div>每年有數億使用者使用安全設定檢查功能強化 Google 帳戶<div className="inlineBlock">安全。</div></div>
  const question13 = <div className="question_text"><div className="question_answer">Google 帳戶設定</div>每週有超過 5 億使用者使用密碼安全檢查功能。</div>

  const right =
    <div className="result_answer">
      <div className="svg_box">
        <img className="img" src="images/v.png" alt="" />
      </div>
      <div className="text right">
        答對了！
      </div>
    </div>

  const wrong =
    <>
      <div className="result_answer">
        <div className="svg_box">
          <img className="img" src="images/x.png" alt="" />
        </div>
        <div className="text wrong">
          答錯了！
        </div>
      </div>
      <div className="correct_text">
        正確答案：
      </div>
    </> 


  return (
    <div className="App">
      <div className="bg">
        {/* 圖片預載 */}
        <div className="img_preloading">
          <img className="img" src="images/swg.png" alt="" />
          <img className="img" src="images/v.png" alt="" />
          <img className="img" src="images/x.png" alt="" />
          <img className="img" src="images/gmail.png" alt=""/>
          <img className="img" src="images/chrome.png" alt=""/>
          <img className="img" src="images/search.png" alt=""/>
          <img className="img" src="images/password.png" alt=""/>
          <img className="img" src="images/pay.png" alt=""/>
          <img className="img" src="images/play.png" alt=""/>
          <img className="img" src="images/photo.png" alt=""/>
          <img className="img" src="images/meet.png" alt=""/>
          <img className="img" src="images/account.png" alt=""/>
        </div>
        <div className="bg_kv">
          <Lottie
            className="lottie_kv"
              animationData={lottie_KV}
              loop={false}
              autoplay={false}
              lottieRef={lottieRef}
            onComplete={handleAnimationFinish}
          />
        </div>
        <div className="container">
          <div className="wrap">
            {/* 前言 */}
            {page === 'home' && (
              <Fade in={page === 'home'} timeout={600}>
                <div className="intro">
                  <div className="intro_content">
                      每項 Google 產品的設計均以安全性為考量。
                      <br/>每天有數十億人使用 Google 尋找可靠的資訊、
                      <br/>規劃前往目的地的路線、與親朋好友聯繫等等。
                      <br/>當你使用 Google 的產品和服務時，
                      <br/>我們有責任保護你的個人資訊隱私和安全。
                    </div>
                    <div className="btn" onClick={handleStartAnimation}>
                      <div className="btn_box">
                        <div className="btn_text">開始遊戲</div>
                        <Lottie className="icon_hand" animationData={lottie_hand} loop={true} />
                    </div>
                  </div>
                </div>
              </Fade>
            )}
            {/* 題目＆選項區 */}
            {page === 'start' && answer === 'none' && (
              <Fade in={page === 'start'} timeout={1500}>
                <div className="question_container">
                  <div className="question_content">
                    <div className="swg_logo">
                      <img className="img" src="images/swg.png" alt="" />
                    </div>
                    <div className="question_title">
                      請點選你認為下列敘述符合哪項產品
                    </div>
                      {
                        question === 1 ? question1 :
                        question === 2 ? question2 :
                        question === 3 ? question3 :
                        question === 4 ? question4 :
                        question === 5 ? question5 :
                        question === 6 ? question6 :
                        question === 7 ? question7 :
                        question === 8 ? question8 :
                        question === 9 ? question9 :
                        question === 10 ? question10 :
                        question === 11 ? question11 :
                        question === 12 ? question12 : question13
                      }
                    </div>
                  <div className="question_icon">
                    <div className="icon_box" onClick={()=> setAnswer("gmail")}>
                      <img className="img" src="images/gmail.png" alt="" />
                    </div>
                    <div className="icon_box" onClick={()=> setAnswer("chrome")}>
                      <img className="img" src="images/chrome.png" alt="" />
                    </div>
                    <div className="icon_box" onClick={()=> setAnswer("search")}>
                      <img className="img" src="images/search.png" alt="" />
                    </div>
                    <div className="icon_box" onClick={()=> setAnswer("password")}>
                      <img className="img" src="images/password.png" alt="" />
                    </div>
                    <div className="icon_box" onClick={()=> setAnswer("pay")}>
                      <img className="img" src="images/pay.png" alt="" />
                    </div>
                    <div className="icon_box" onClick={()=> setAnswer("play")}>
                      <img className="img" src="images/play.png" alt="" />
                    </div>
                    <div className="icon_box" onClick={()=> setAnswer("photo")}>
                      <img className="img" src="images/photo.png" alt="" />
                    </div>
                    <div className="icon_box" onClick={()=> setAnswer("meet")}>
                      <img className="img" src="images/meet.png" alt="" />
                    </div>
                    <div className="icon_box" onClick={()=> setAnswer("account")}>
                      <img className="img" src="images/account.png" alt="" />
                    </div>
                  </div>
                </div>
              </Fade>
            )}
            {/* 公布解答區 */}
            {answer !== 'none' && (
              <Fade in={page === 'start'} timeout={1500}>
                <div className="result_container" onClick={handleBackToHome}>
                  <div className="result_box">
                    <div className="result_content">
                      <div className="swg_logo">
                        <img className="img" src="images/swg.png" alt="" />
                      </div>
                      {
                        question === 1 ? question1 :
                        question === 2 ? question2 :
                        question === 3 ? question3 :
                        question === 4 ? question4 :
                        question === 5 ? question5 :
                        question === 6 ? question6 :
                        question === 7 ? question7 :
                        question === 8 ? question8 :
                        question === 9 ? question9 :
                        question === 10 ? question10 :
                        question === 11 ? question11 :
                        question === 12 ? question12 : question13
                      }
                    </div>
                    <div className="result_icon">
                      {question === 1 && answer === "gmail" && right }
                      {question === 2 && answer === "gmail" && right }
                      {question === 3 && answer === "chrome" && right }
                      {question === 4 && answer === "chrome" && right }
                      {question === 5 && answer === "search" && right }
                      {question === 6 && answer === "password" && right }
                      {question === 7 && answer === "password" && right }
                      {question === 8 && answer === "pay" && right }
                      {question === 9 && answer === "play" && right }
                      {question === 10 && answer === "photo" && right }
                      {question === 11 && answer === "meet" && right }
                      {question === 12 && answer === "account" && right }
                      {question === 13 && answer === "account" && right}
                      
                      {question === 1 && answer !== "gmail" && wrong}
                      {question === 2 && answer !== "gmail" && wrong }
                      {question === 3 && answer !== "chrome" && wrong }
                      {question === 4 && answer !== "chrome" && wrong }
                      {question === 5 && answer !== "search" && wrong }
                      {question === 6 && answer !== "password" && wrong }
                      {question === 7 && answer !== "password" && wrong }
                      {question === 8 && answer !== "pay" && wrong }
                      {question === 9 && answer !== "play" && wrong }
                      {question === 10 && answer !== "photo" && wrong }
                      {question === 11 && answer !== "meet" && wrong }
                      {question === 12 && answer !== "account" && wrong }
                      {question === 13 && answer !== "account" && wrong}
                      
                      <div className="icon_box">
                        {question === 1 &&  <img className="img" src="images/gmail.png" alt=""/> }
                        {question === 2 &&  <img className="img" src="images/gmail.png" alt=""/> }
                        {question === 3 &&  <img className="img" src="images/chrome.png" alt=""/> }
                        {question === 4 &&  <img className="img" src="images/chrome.png" alt=""/> }
                        {question === 5 &&  <img className="img" src="images/search.png" alt=""/> }
                        {question === 6 &&  <img className="img" src="images/password.png" alt=""/> }
                        {question === 7 &&  <img className="img" src="images/password.png" alt=""/> }
                        {question === 8 &&  <img className="img" src="images/pay.png" alt=""/> }
                        {question === 9 &&  <img className="img" src="images/play.png" alt=""/> }
                        {question === 10 && <img className="img" src="images/photo.png" alt=""/> }
                        {question === 11 && <img className="img" src="images/meet.png" alt=""/> }
                        {question === 12 && <img className="img" src="images/account.png" alt=""/> }
                        {question === 13 && <img className="img" src="images/account.png" alt=""/> }
                      </div>
                    </div>
                  </div>
                  <div className="btn_back">
                      <div className="btn_box">
                        <div className="btn_text">點選任一處回到首頁</div>
                        <Lottie className="icon_hand" animationData={lottie_hand_blue} loop={true} />
                    </div>
                  </div>
                </div>
              </Fade>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
