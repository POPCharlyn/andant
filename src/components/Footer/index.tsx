import { useIntl } from 'umi';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '惠尔智能有限公司出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Whale Dynamic',
          title: 'Whale Dynamic',
          href: 'http://www.whaledynamic.com/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
