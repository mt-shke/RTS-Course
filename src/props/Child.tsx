interface ChildProps {
	color: string;
	onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
	return <div>{color}</div>;
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
	return (
		<div>
			Hi there
			{color}
			{children}
		</div>
	);
};
