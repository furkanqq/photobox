import styles from './index.module.scss';
import cn from 'classnames';

import { XContainer } from '@/src/components/XContainer';
import { XButton } from '@/src/components/XButton';
import { XImage } from '@/src/components/XImage';

interface XBannerProps {
  buttonTitle?: string;
  bg: 'light' | 'dark';
  button?: boolean;
  title: string;
  image: string;
  desc: string;
}

export default function XBanner({
  button = false,
  buttonTitle,
  bg = 'dark',
  title,
  image,
  desc
}: XBannerProps) {
  return (
    <div className={cn(bg === 'dark' ? styles.banner : styles.bannerLight)}>
      {bg === 'dark' && <div className={styles.noise}></div>}

      <XContainer className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <p>{desc}</p>
          {button && <XButton color="primary">{buttonTitle}</XButton>}
        </div>
        <div className={styles.image}>
          <XImage alt="banner-image" height={200} src={image} width={200} />
        </div>
      </XContainer>
    </div>
  );
}
