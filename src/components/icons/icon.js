import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconCodepen,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconPlayStore,
  IconStar,
  IconTwitter,
  IconZap,
  IconStackOverflow,
} from './';

const Icon = ({ name, ...rest }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore {...rest} />;
    case 'Codepen':
      return <IconCodepen {...rest} />;
    case 'External':
      return <IconExternal {...rest} />;
    case 'Folder':
      return <IconFolder {...rest} />;
    case 'Fork':
      return <IconFork {...rest} />;
    case 'GitHub':
      return <IconGitHub {...rest} />;
    case 'Instagram':
      return <IconInstagram {...rest} />;
    case 'Linkedin':
      return <IconLinkedin {...rest} />;
    case 'Loader':
      return <IconLoader {...rest} />;
    case 'Logo':
      return <IconLogo {...rest} />;
    case 'PlayStore':
      return <IconPlayStore {...rest} />;
    case 'Star':
      return <IconStar {...rest} />;
    case 'Twitter':
      return <IconTwitter {...rest} />;
    case 'Zap':
      return <IconZap {...rest} />;
    case 'StackOverflow':
      return <IconStackOverflow {...rest} />;
    default:
      return <IconExternal {...rest} />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
