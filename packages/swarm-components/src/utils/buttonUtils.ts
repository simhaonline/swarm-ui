import { ButtonProps } from '../Button';

type Props = ButtonProps;

/**
 *
 * @param {*} props
 *
 */
export const getButtonType = (props: Props): string => {
	let buttonType = 'default';

	if (props.disabled) {
		buttonType = 'disabled';
	} else if (props.reset) {
		buttonType = 'reset';
	} else if (props.primary) {
		buttonType = 'primary';
	} else if (props.neutral) {
		buttonType = 'neutral';
	} else if (props.bordered) {
		buttonType = 'bordered';
	} else if (props.inverted) {
		buttonType = 'inverted';
	}

	return buttonType;
};

export const getSwarmSize = (props: Props): string => {
	if (props.size) {
		return props.size;
	}
	let size = 'default';
	if (props.large) {
		size = 'large';
	} else if (props.small) {
		size = 'small';
	}
	return size;
};

export const getIconPosition = (props: Props): string => {
	if (props.iconOnly) {
		return 'only';
	}
	return props.children ? (props.right ? 'right' : 'left') : 'only';
};
