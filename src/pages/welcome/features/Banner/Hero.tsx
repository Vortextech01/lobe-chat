import { useResponsive } from 'antd-style';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { genSize, useStyles } from './style';
import Image from 'next/image';

const Hero = memo<{ width: number }>(({ width }) => {
  const size = useMemo(
    () => ({
      base: genSize(width / 3.5, 240),
      desc: genSize(width / 50, 14),
      logo: genSize(width / 3.8, 180),
      title: genSize(width / 20, 32),
    }),
    [width],
  );

  const { styles } = useStyles(size.base);
  const { mobile } = useResponsive();
  const { t } = useTranslation('welcome');

  return (
    <>
      <Image
        src="https://chat.sapienslaboratories.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F85CA3CED-D66F-41BC-A48B-4C2323FB8A9F.1d48b05f.gif&w=256&q=75"
        width={size.logo}
        height={size.logo}
        alt="Logo"
        style={{ marginTop: -size.logo / 5 }}
      />
      <div className={styles.title} style={{ fontSize: size.title }}>
        <span style={mobile ? { fontSize: '1.0em' } : {}}>🧬Sapiens</span>
        {mobile ? <br /> : ' '}
        {t('slogan.title')}
      </div>
      <div className={styles.desc} style={{ fontSize: size.desc }}>
        {t('slogan.desc1')}
      </div>
    </>
  );
});

export default Hero;
