import * as React from 'react';
import { Icon } from './Icon';
import { ButtonProps } from './Button';
import { getButtonType, getSwarmSize, getIconPosition } from './utils/buttonUtils';


const LinkButton = (props: ButtonProps): React.AnchorHTMLAttributes<ButtonProps> => {
	// destructuring to not pass invalid attributes to node
	const {
		icon,
		right,
		grow,
		children,
		bordered, // eslint-disable-line no-unused-vars
		neutral, // eslint-disable-line no-unused-vars
		primary, // eslint-disable-line no-unused-vars
		inverted, // eslint-disable-line no-unused-vars
		small, // eslint-disable-line no-unused-vars
		...other
	} = props;

	const buttonType = getButtonType(props);
	const width = grow ? 'grow' : 'default';

	return (
		<a
			data-swarm-link={buttonType}
			data-swarm-size={getSwarmSize(props)}
			data-icon={getIconPosition(props)}
			data-swarm-width={width}
			{...other}
		>
			{icon ? (
				<span>
					{right ? (
						<>
							{children}
							<Icon shape={icon} />
						</>
					) : (
						<>
							<Icon shape={icon} />
							{children}
						</>
					)}
				</span>
			) : (
				children
			)}
		</a>
	);
};

export { LinkButton };
