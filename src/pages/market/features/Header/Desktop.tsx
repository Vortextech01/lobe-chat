import { ChatHeader, Icon } from '@lobehub/ui';
import { Button } from 'antd';
import { createStyles } from 'antd-style';
import { Bot } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { AGENTS_INDEX_GITHUB } from '@/const/url';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    color: ${token.colorText};
    fill: ${token.colorText};
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
  `,
}));

const Header = memo(() => {
  const { styles } = useStyles();
  const { t } = useTranslation('market');

  return (
    <ChatHeader
      left={
        <Link href={'/'}>
          <a className={styles.logo}>
            <span>SapiensLabs</span>
            <span className="discover-label">Discover</span>
          </a>
        </Link>
      }
      right={
        <Button
          icon={<Icon icon={Bot} />}
          onClick={() => window.open(AGENTS_INDEX_GITHUB, '__blank')}
        >
          {t('submitAgent')}
        </Button>
      }
    />
  );
});

export default Header;
