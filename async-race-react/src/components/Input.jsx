import React from 'react';

const Input = () => {
	return (
		<div className="garage-input-container">
			<div className="garage-input">
				<div className="car-name-input-container">
					<input className="car-name-input" type="text" maxlength="16" placeholder="type a car name" value="" />
					<button className="apply-btn">Apply</button>
					<button className="create-btn">Create</button>
				</div>
				<div className="car-update-input-container">
					<input className="car-select-input" type="text" maxlength="16" placeholder="select a car to update" value="" />
					<button className="apply-btn">Apply</button>
					<button className="update-btn">Update</button>
				</div>
				<div className="garage-btn-container">
					<button className="race-btn">Race</button>
					<button disabled="" className="reset-btn">Reset</button>
					<button className="generate-btn">Generate Cars</button>
				</div>
			</div>
		</div>
	);
};
export default Input;
