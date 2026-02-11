
export interface DialogueLine {
  id: string;
  speaker: string;
  text: string;
}

export interface SpeakerConfig {
  voice: string;
  // This will be used to add prefixes like "Say cheerfully:" to the text for emotional tone.
  promptPrefix: string; 
  emotion: string;
  volume: number;
  speed: string;
  seeds: number[]; // Array of 5 seeds
  toneDescription: string;
  temperature: number; // Added temperature for speech variability
}

export interface Voice {
  name: string;
  id: string;
  isCustom?: boolean;
  // Which pre-built voice to use for playback of custom voices
  baseVoiceId?: string; 
  // Recommended tone description found during analysis
  toneDescription?: string;
}

export interface TextModel {
  id: string;
  name: string;
  description: string;
}

// Added VoiceName enum to satisfy dependencies in VoiceSelector
export enum VoiceName {
  Kore = 'Kore',
  Puck = 'Puck',
  Charon = 'Charon',
  Zephyr = 'Zephyr',
  Fenrir = 'Fenrir',
  Enceladus = 'Enceladus'
}
