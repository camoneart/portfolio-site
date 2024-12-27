'use client';

import { useEffect, useState } from 'react';
import { Howl } from 'howler';
import { Volume2, VolumeX } from 'lucide-react';
import styles from './AudioPlayer.module.css';

interface AudioPlayerProps {
  src: string;
  size?: number;
  color?: string;
  className?: string;
  initialVolume?: number;
}

const AudioPlayer = ({
  src, // 再生する音声ファイルのパス
  size = 24, // デフォルト: 24px
  color = 'currentColor', // デフォルト: 現在のテキスト色
  className = 'audio-button', // デフォルト: 空文字
  initialVolume = 0.5 // デフォルト: 50%の音量
}: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [sound, setSound] = useState<Howl | null>(null);

  useEffect(() => {
    // コンポーネントマウント時に音声を読み込む
    const newSound = new Howl({
      src: [src],
      volume: initialVolume,
      html5: true,
      autoplay: false,
      loop: true,
      onplay: () => {
        setIsPlaying(true);
      },
      onpause: () => {
        setIsPlaying(false);
      },
      onstop: () => {
        setIsPlaying(false);
      },
      onloaderror: (id, error) => {
        console.error('Error loading audio:', error);
      },
      onplayerror: (id, error) => {
        console.error('Error playing audio:', error);
      }
    });

    setSound(newSound);

    // クリーンアップ
    return () => {
      if (newSound) {
        newSound.unload();
      }
    };
  }, [src, initialVolume]);

  const handleClick = () => {
    if (!sound) return;

    if (!isPlaying) {
      // 再生開始
      sound.volume(isMuted ? 0 : initialVolume);
      sound.play();
    } else {
      // ミュート/アンミュート切り替え
      setIsMuted(!isMuted);
      sound.volume(isMuted ? initialVolume : 0);
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`sticky inset-0 ${styles["audio-button"]} ${className}`}
      aria-label={isPlaying ? (isMuted ? "Unmute" : "Mute") : "Play"}
    >
      {isMuted || !isPlaying ? (
        <VolumeX size={size} color={color} className={styles['audio-mute']} />
      ) : (
        <Volume2
          size={size}
          color={color}
          className={styles['audio-play']}
        />
      )}
    </button>
  );
};

export default AudioPlayer;