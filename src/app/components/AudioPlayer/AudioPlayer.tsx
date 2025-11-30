"use client";

import { useEffect, useState, useCallback, memo } from "react";
import { Howl } from "howler";
import { Volume2, VolumeX } from "lucide-react";
import styles from "./AudioPlayer.module.css";

interface AudioPlayerProps {
  src: string;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  initialVolume?: number;
}

const AudioPlayer = memo(
  ({
    src,
    width = 17,
    height = 17,
    color = "currentColor",
    className = "audio-button",
    initialVolume = 0.7,
  }: AudioPlayerProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [sound, setSound] = useState<Howl | null>(null);

    // handleClickをメモ化 - 再生中は Howl の mute API でサウンドを制御する
    const handleClick = useCallback(() => {
      if (!sound) return;

      // 再生前
      if (!isPlaying) {
        sound.mute(isMuted); // 現在のミュート状態を反映
        sound.play();
        return;
      }

      // 再生中: ミュート状態をトグル
      setIsMuted((prevMuted) => {
        const nextMuted = !prevMuted;
        sound.mute(nextMuted);
        return nextMuted;
      });
    }, [sound, isPlaying, isMuted]);

    useEffect(() => {
      const newSound = new Howl({
        src: [src],
        volume: initialVolume,
        html5: true,
        autoplay: false,
        loop: true,
        onplay: () => setIsPlaying(true),
        onpause: () => setIsPlaying(false),
        onstop: () => setIsPlaying(false),
        onloaderror: (_, error) => console.error("Error loading audio:", error),
        onplayerror: (_, error) => console.error("Error playing audio:", error),
      });

      setSound(newSound);
      return () => {
        newSound.unload();
      };
    }, [src, initialVolume]);

    return (
      <button
        onClick={handleClick}
        className={`hidden md:block md:sticky md:inset-0 ${styles["audio-button"]} ${className}`}
        aria-label={isPlaying ? (isMuted ? "Unmute" : "Mute") : "Play"}
      >
        {isMuted || !isPlaying ? (
          <VolumeX width={width} height={height} color={color} className={styles["audio-mute"]} />
        ) : (
          <Volume2 width={width} height={height} color={color} className={styles["audio-play"]} />
        )}
      </button>
    );
  }
);

AudioPlayer.displayName = "AudioPlayer";

export default AudioPlayer;
