import useResponsiveAnimation from '@/app/hooks/useResponsiveAnimation';

const useHeaderTitleResponsiveAnimation = () => {
  return useResponsiveAnimation({ mobileDelay: 1.6, desktopDelay: 6 });
};

export default useHeaderTitleResponsiveAnimation;
