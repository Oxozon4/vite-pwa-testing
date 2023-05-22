import {
  FastForwardIcon,
  LightbulbIcon,
  MoneyOffIcon,
  SearchIcon,
  DragIcon,
  DeleteIcon,
  ArrowDropDownIcon,
  CloseIcon,
  CloseIconDanger,
  CheckboxUncheckedIcon,
  RadioButtonUncheckedIcon,
  WarnIcon,
  AddIcon,
  GoogleIcon,
  FacebookIcon,
  GithubIcon,
  UserIcon,
  LogoutIcon,
  ContentCopyIcon,
} from './Icon-styled';

interface IconProps {
  variant:
    | 'Fast'
    | 'Efficient'
    | 'Free'
    | 'Search'
    | 'Drag'
    | 'Delete'
    | 'ArrowDown'
    | 'Close'
    | 'CloseDanger'
    | 'CheckboxUnchecked'
    | 'RadioButtonUnchecked'
    | 'Add'
    | 'Google'
    | 'Facebook'
    | 'Github'
    | 'Warning'
    | 'User'
    | 'Logout'
    | 'ContentCopy';
  size?: string;
  withhover?: 'true' | 'false';
}

const Icon = ({ variant, size = '128px', withhover = 'true' }: IconProps) => {
  return (
    <>
      {variant === 'Fast' && (
        <FastForwardIcon size={size} withhover={withhover} />
      )}
      {variant === 'Efficient' && (
        <LightbulbIcon size={size} withhover={withhover} />
      )}
      {variant === 'Free' && <MoneyOffIcon size={size} withhover={withhover} />}
      {variant === 'Search' && <SearchIcon size={size} withhover={withhover} />}
      {variant === 'Drag' && <DragIcon size={size} withhover={withhover} />}
      {variant === 'Delete' && <DeleteIcon size={size} withhover={withhover} />}
      {variant === 'ArrowDown' && (
        <ArrowDropDownIcon size={size} withhover={withhover} />
      )}
      {variant === 'Close' && <CloseIcon size={size} withhover={withhover} />}
      {variant === 'CloseDanger' && (
        <CloseIconDanger size={size} withhover={withhover} />
      )}
      {variant === 'CheckboxUnchecked' && (
        <CheckboxUncheckedIcon size={size} withhover={withhover} />
      )}
      {variant === 'RadioButtonUnchecked' && (
        <RadioButtonUncheckedIcon size={size} withhover={withhover} />
      )}
      {variant === 'Add' && <AddIcon size={size} withhover={withhover} />}
      {variant === 'Google' && <GoogleIcon size={size} withhover={withhover} />}
      {variant === 'Facebook' && (
        <FacebookIcon size={size} withhover={withhover} />
      )}
      {variant === 'Github' && <GithubIcon size={size} withhover={withhover} />}
      {variant === 'Warning' && <WarnIcon size={size} withhover={withhover} />}
      {variant === 'User' && <UserIcon size={size} withhover={withhover} />}
      {variant === 'Logout' && <LogoutIcon size={size} withhover={withhover} />}
      {variant === 'ContentCopy' && (
        <ContentCopyIcon size={size} withhover={withhover} />
      )}
    </>
  );
};

export default Icon;
