import { useState } from "react";
import "./styles.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

export default function App() {

  const [textToCopy, setTextToCopy] = useState();
  const[iscopied , setcopied] = useClipboard(textToCopy);

  const[lang, setlang] = useState();

  const language = () => {
    var lan = document.getElementById('language').value;
    setlang(lan);
  }

  const sl = () =>{
    SpeechRecognition.startListening({ continuous: true, language:lang })
  };
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <>
      <div className="App">
        <h1>Speech to text recognition</h1>
        <div className="lang-container">
        <label htmlFor="language">Choose language : &nbsp;</label>
        <select className="lang" name="language" id="language" onChange={language}>
        <option value="en-IN">English</option>
        <option value="es-ES">Spanish</option>
        <option value="fr-FR">French</option>
        <option value="de-DE">German</option>
        <option value="ja-JP">Japanese</option>
        <option value="ko-KR">Korean</option>
        <option value="zh-CN">Chinese</option>
        <option value="ru-RU">Russian</option>
        <option value="ar-SA">Arabic</option>
        <option value="he-IL">Hebrew</option>
        <option value="el-GR">Greek</option>
        <option value="la">Latin</option>
        <option value="pt-BR">Portuguese</option>
        <option value="it-IT">Italian</option>
        <option value="nl-NL">Dutch</option>
        <option value="tr-TR">Turkish</option>
        <option value="hi-IN">Hindi</option>
        <option value="te-IN">Telugu</option>
        <option value="bn-IN">Bengali</option>
        <option value="ta-IN">Tamil</option>
        <option value="mr-IN">Marathi</option>
        <option value="ur-IN">Urdu</option>
        <option value="gu-IN">Gujarati</option>
        <option value="kn-IN">Kannada</option>
        <option value="ml-IN">Malayalam</option>
        <option value="pa-IN">Punjabi</option>
        <option value="as-IN">Assamese</option>
        <option value="ks-IN">Kashmiri</option>
        <option value="ne-IN">Nepali</option>
        <option value="si-LK">Sinhala</option>
        <option value="th-TH">Thai</option>
        <option value="my-MM">Burmese</option>
        <option value="sa-IN">Sanskrit</option>
        </select>
        </div>
        <div className="main-content" onClick={() => setTextToCopy(transcript)}>{transcript}
        <div className="button">
          <button onClick={sl}>start listening</button>
          <button onClick={SpeechRecognition.stopListening}>
            stop listening
          </button>
          <button onClick={setcopied}>{iscopied ? 'Copied' : 'Copy to clipboard'}</button>
        </div>
        </div>       
      </div>
    </>
  );
}
