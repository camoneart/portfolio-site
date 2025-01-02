import useResponsiveAnimation from '@/app/hooks/useResponsiveAnimation';

const useFooterResponsiveAnimation = () => {
  return useResponsiveAnimation({ mobileDelay: 2.2, desktopDelay: 2.8 });
};

export default useFooterResponsiveAnimation;