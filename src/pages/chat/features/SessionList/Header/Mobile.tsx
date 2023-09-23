import { ActionIcon, MobileNavBar } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { MessageSquarePlus, Settings2 } from 'lucide-react';
import Router from 'next/router';
import { memo } from 'react';

import AvatarWithUpload from '@/features/AvatarWithUpload';
import { useSessionStore } from '@/store/session';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    color: ${token.colorText};
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
  `,
  top: css`
    position: sticky;
    top: 0;
  `,
}));

const Header = memo(() => {
  const { styles } = useStyles();
  const [createSession] = useSessionStore((s) => [s.createSession]);

  return (
    <MobileNavBar
      center={<span className={styles.logo}>Sapiens🧬LABS</span>}
      left={<AvatarWithUpload size={28} style={{ marginLeft: 8 }} />}
      right={
        <>
          <ActionIcon icon={MessageSquarePlus} onClick={() => createSession()} />
          <ActionIcon
            icon={Settings2}
            onClick={() => {
              Router.push({ pathname: `/settings` });
            }}
          />
        </>
      }
    />
  );
});

export default Header;
