import styled from 'styled-components';

import {
  MdFastForward,
  MdOutlineLightbulb,
  MdMoneyOff,
  MdOutlineSearch,
  MdOutlineDragIndicator,
  MdDeleteForever,
  MdArrowDropDown,
  MdClose,
  MdCheckBoxOutlineBlank,
  MdRadioButtonUnchecked,
  MdControlPoint,
  MdOutlineWarning,
  MdAccountCircle,
  MdLogout,
  MdContentCopy,
} from 'react-icons/md';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';

interface IconProps {
  size: string;
  withhover?: 'false' | 'true';
}

export const FastForwardIcon = styled(MdFastForward)<IconProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid transparent;
  transition: all 300ms;
  border-radius: 50%;

  &:hover {
    border: 2px solid
      ${({ theme, withhover }) =>
        withhover === 'true' ? theme.colors.primary : 'transparent'};
  }
`;

export const LightbulbIcon = styled(MdOutlineLightbulb)<IconProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid transparent;
  transition: all 300ms;
  border-radius: 50%;

  &:hover {
    border: 2px solid
      ${({ theme, withhover }) =>
        withhover === 'true' ? theme.colors.primary : 'transparent'};
  }
`;

export const MoneyOffIcon = styled(MdMoneyOff)<IconProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid transparent;
  transition: all 300ms;
  border-radius: 50%;

  &:hover {
    border: 2px solid
      ${({ theme, withhover }) =>
        withhover === 'true' ? theme.colors.primary : 'transparent'};
  }
`;

export const SearchIcon = styled(MdOutlineSearch)<IconProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid transparent;
  transition: all 300ms;
  border-radius: 50%;

  &:hover {
    border: 2px solid
      ${({ theme, withhover }) =>
        withhover === 'true' ? theme.colors.primary : 'transparent'};
  }
`;

export const DragIcon = styled(MdOutlineDragIndicator)<IconProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid transparent;
  transition: all 300ms;
  border-radius: 50%;
  transform: rotateZ(90deg);
  cursor: pointer;

  &:hover {
    border: 2px solid
      ${({ theme, withhover }) =>
        withhover === 'true' ? theme.colors.primary : 'transparent'};
  }
`;

export const DeleteIcon = styled(MdDeleteForever)<IconProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid transparent;
  transition: all 300ms;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 2px solid
      ${({ theme, withhover }) =>
        withhover === 'true' ? theme.colors.primary : 'transparent'};
  }
`;

export const ArrowDropDownIcon = styled(MdArrowDropDown)<IconProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid transparent;
  transition: all 300ms;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 2px solid
      ${({ theme, withhover }) =>
        withhover === 'true' ? theme.colors.primary : 'transparent'};
  }
`;

export const CloseIcon = styled(MdClose)<IconProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid transparent;
  transition: all 300ms;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid
    ${({ theme, withhover }) =>
      withhover === 'true' ? theme.colors.primary : 'transparent'};
  &:hover {
    transform: rotate(90deg);
  }
`;

export const CloseIconDanger = styled(MdClose)<IconProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: ${({ theme }) => theme.colors.red};
  border: 2px solid transparent;
  transition: all 300ms;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid
    ${({ theme, withhover }) =>
      withhover === 'true' ? theme.colors.red : 'transparent'};
`;

export const CheckboxUncheckedIcon = styled(MdCheckBoxOutlineBlank)<IconProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid transparent;
  transition: all 300ms;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 2px solid
      ${({ theme, withhover }) =>
        withhover === 'true' ? theme.colors.primary : 'transparent'};
  }
`;

export const WarnIcon = styled(MdOutlineWarning)<IconProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: ${({ theme }) => theme.colors.warning};
  border: 2px solid transparent;
  transition: all 300ms;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 2px solid
      ${({ theme, withhover }) =>
        withhover === 'true' ? theme.colors.primary : 'transparent'};
  }
`;

export const RadioButtonUncheckedIcon = styled(
  MdRadioButtonUnchecked
)<IconProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid transparent;
  transition: all 300ms;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 2px solid
      ${({ theme, withhover }) =>
        withhover === 'true' ? theme.colors.primary : 'transparent'};
  }
`;

export const AddIcon = styled(MdControlPoint)<IconProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid transparent;
  transition: all 300ms;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 2px solid
      ${({ theme, withhover }) =>
        withhover === 'true' ? theme.colors.primary : 'transparent'};
  }
`;

export const UserIcon = styled(MdAccountCircle)<IconProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid transparent;
  transition: all 300ms;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 2px solid
      ${({ theme, withhover }) =>
        withhover === 'true' ? theme.colors.primary : 'transparent'};
  }
`;

export const LogoutIcon = styled(MdLogout)<IconProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid transparent;
  transition: all 300ms;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 2px solid
      ${({ theme, withhover }) =>
        withhover === 'true' ? theme.colors.primary : 'transparent'};
  }
`;

export const ContentCopyIcon = styled(MdContentCopy)<IconProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid transparent;
  transition: all 300ms;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 2px solid
      ${({ theme, withhover }) =>
        withhover === 'true' ? theme.colors.primary : 'transparent'};
  }
`;

export const GoogleIcon = styled(FaGoogle)<IconProps>`
  width: 64px;
  height: 64px;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 300ms;
  border-radius: 50%;
  opacity: 1;
  cursor: pointer;

  &:hover {
    opacity: ${({ withhover }) => (withhover === 'true' ? '0.75' : '1')};
  }
`;

export const FacebookIcon = styled(FaFacebook)<IconProps>`
  width: 64px;
  height: 64px;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 300ms;
  border-radius: 50%;
  opacity: 1;
  cursor: pointer;

  &:hover {
    opacity: ${({ withhover }) => (withhover === 'true' ? '0.75' : '1')};
  }
`;

export const GithubIcon = styled(FaGithub)<IconProps>`
  width: 64px;
  height: 64px;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 300ms;
  border-radius: 50%;
  opacity: 1;
  cursor: pointer;

  &:hover {
    opacity: ${({ withhover }) => (withhover === 'true' ? '0.75' : '1')};
  }
`;
