import useResponsiveAnimation from '@/app/hooks/useResponsiveAnimation';

const useFooterResponsiveAnimation = () => {
  return useResponsiveAnimation({ mobileDelay: 2, desktopDelay: 1.4 });
};

export default useFooterResponsiveAnimation;