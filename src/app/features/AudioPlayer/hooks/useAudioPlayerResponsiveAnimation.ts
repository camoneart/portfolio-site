import useResponsiveAnimation from '@/app/hooks/useResponsiveAnimation';

const useAudioPlayerResponsiveAnimation = () => {
  return useResponsiveAnimation({ mobileDelay: 1.8, desktopDelay: 2.6 });
};

export default useAudioPlayerResponsiveAnimation;