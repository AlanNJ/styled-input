import React, { useEffect, useRef, useState } from "react";
import "./inputcomponent.css";

type InputProps = {
	type?: string;
	height?: number;
	fontColor?: string;
	width?: number;
	fontSize?: number;
	value?: string;
	background?: string;
	borderColor?: string;
	inputType?: string;
	children: React.ReactNode;
};

const InputComponent = ({
	type,
	height,
	fontColor,
	width,
	fontSize,
	background,
	borderColor,
	inputType,
	children,
}: InputProps) => {
	const [value, setValue] = useState("");
	const [matched, setMatched] = useState(false);

	const inputRef = useRef<HTMLInputElement | null>(null);
	const labelRef = useRef<HTMLSpanElement | null>(null);
	var focusedFontSize: number = (fontSize && fontSize - fontSize / 3) || 15;
	useEffect(() => {
		if (value && inputRef.current) {
			if (type === "email") {
				var validRegex =
					/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
				if (value.match(validRegex)) {
					console.log("matched");
					setMatched(true);
				} else {
					setMatched(false);
				}
			} else if (type === "number") {
				value.length === 10 ? setMatched(true) : setMatched(false);
			}
		}
	}, [value]);
	console.log(value);
	// value.length ? matched : null;
	if (inputRef.current?.focus()) {
		console.log("hello");
	}
	const focusLabel = (e: any) => {
		if (inputRef.current && labelRef.current) {
			labelRef.current.style.border = borderColor
				? `2px solid ${borderColor}`
				: "2px solid #00dfc4";
		}
	};
	const unfocusLabel = (e: any) => {
		if (inputRef.current && labelRef.current) {
			labelRef.current.style.border = `none`;
		}
	};

	return (
		<div className="container">
			<div
				className="input-wrapper"
				style={{
					height: height ? `${height}px` : "40px",
					width: width ? `${width}px` : "400px",
				}}
			>
				<div>
					<input
						ref={inputRef}
						type={`${inputType}`}
						onChange={(e) => setValue(e.target.value)}
						value={value}
						className={value && "typed-input"}
						style={{
							background: background ? `${background}` : "rgb(59, 64, 83)",
							color: fontColor ? `${fontColor}` : "white",
						}}
						onFocus={(e) => focusLabel(e)}
						onBlur={(e) => unfocusLabel(e)}
					/>

					<span
						ref={labelRef}
						className={value ? "typed" : "place"}
						style={
							!value
								? {
										color: fontColor ? `${fontColor}` : "white",
										fontSize: fontSize ? `${fontSize}px` : "1em",
								  }
								: {
										color: fontColor ? `${fontColor}px` : "white",
										background: borderColor ? `${borderColor}` : "#00dfc4",
										fontSize: `${focusedFontSize}px`,
								  }
						}
					>
						{children}
					</span>
				</div>
				{matched && value && (
					<div
						id="tick-mark"
						style={{ left: width ? `${width}px` : "400px" }}
					></div>
				)}
				{value && !matched && (
					<div
						className="cross-mark"
						style={{ left: width ? `${width}px` : "400px" }}
					></div>
				)}
			</div>
		</div>
	);
};

export default InputComponent;
