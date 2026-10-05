/**
 * Excel Master - Speech Synthesis & Voice Narration Engine
 * Reads formula explanations aloud in Gujarati, Hindi, or English.
 */

const VoiceAssistant = {
  synth: window.speechSynthesis || null,
  isSpeaking: false,
  currentUtterance: null,

  speak(text, onEndCallback) {
    if (!this.synth) {
      alert("Text-to-Speech is not supported in this browser.");
      return;
    }

    // If already speaking, cancel
    this.stop();

    const lang = I18N.currentLang;
    const utterance = new SpeechSynthesisUtterance(text);
    this.currentUtterance = utterance;

    // Pick suitable voice
    const voices = this.synth.getVoices();
    let voice = null;

    if (lang === 'gu') {
      voice = voices.find(v => v.lang.startsWith('gu')) || 
              voices.find(v => v.lang.startsWith('hi')) || 
              voices.find(v => v.lang.startsWith('en-IN')) || 
              voices[0];
      utterance.lang = voice ? voice.lang : 'hi-IN';
    } else if (lang === 'hi') {
      voice = voices.find(v => v.lang.startsWith('hi')) || 
              voices.find(v => v.lang.startsWith('en-IN')) || 
              voices[0];
      utterance.lang = voice ? voice.lang : 'hi-IN';
    } else {
      voice = voices.find(v => v.lang.startsWith('en-IN') || v.lang.startsWith('en-US')) || voices[0];
      utterance.lang = voice ? voice.lang : 'en-US';
    }

    if (voice) utterance.voice = voice;
    utterance.rate = 0.95; // Slightly slower for clear educational delivery
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.updateVoiceButtons(true);
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.updateVoiceButtons(false);
      if (typeof onEndCallback === 'function') onEndCallback();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      this.updateVoiceButtons(false);
    };

    this.synth.speak(utterance);
  },

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isSpeaking = false;
    this.updateVoiceButtons(false);
  },

  toggleSpeech(text) {
    if (this.isSpeaking) {
      this.stop();
    } else {
      this.speak(text);
    }
  },

  updateVoiceButtons(speaking) {
    const btn = document.getElementById('voiceNarrationBtn');
    if (btn) {
      if (speaking) {
        btn.classList.add('btn-speaking');
        btn.innerHTML = `⏹️ ${I18N.t('voiceStop')}`;
      } else {
        btn.classList.remove('btn-speaking');
        btn.innerHTML = `🔊 ${I18N.t('voiceListen')}`;
      }
    }
  }
};

// Pre-load voices on browser ready
if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}
