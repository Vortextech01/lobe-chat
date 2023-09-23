import Link from 'next/link';
import { PropsWithChildren, memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import AppLayout from '../../layout/AppLayout';
import { useStyles } from './features/Banner/style';

const WelcomeLayout = memo<PropsWithChildren>(({ children }) => {
  const { styles } = useStyles();

  return (
    <AppLayout>
      <Center
        className={styles.layout}
        flex={1}
        height={'100vh'}
        horizontal
        style={{ position: 'relative' }}
      >
        <Link href={'/'}>
          <span className={styles.logo}>🧬SapiensIA</span>
        </Link>
        <Flexbox className={styles.view} flex={1} style={{ maxWidth: 1024 }}>
          {children}
        </Flexbox>
      </Center>
    </AppLayout>
  );
});

export default WelcomeLayout;
