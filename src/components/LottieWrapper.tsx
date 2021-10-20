import { LottieAnimation, LottieAnimationProps } from 'react-lottie-tools';

interface LottieWrapperProps {
  className?: string;
}

export default function LottieWrapper({
  animation,
  frames,
  currentTimeline,
  speed,
  style,
  onClick,
  justPlayInView,
  inViewSettings,
  className,
}: LottieWrapperProps & LottieAnimationProps) {
  return (
    <div className={className}>
      <LottieAnimation
        animation={animation}
        frames={frames}
        currentTimeline={currentTimeline}
        speed={speed}
        style={style}
        onClick={onClick}
        justPlayInView={justPlayInView}
        inViewSettings={inViewSettings}
      />
    </div>
  );
}

