import React from 'react';

const base = "http://localhost:3000";
const garage = `${base}/garage`;
const winners = `${base}/winners`;
	 
export const getCars = async (page, limit) => {
 const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
 return {
	 items: await response.json(),
	 count: response.headers.get('X-Total-Count')
 };

};
export const getWinners = async (page, limit) => {
 const response = await fetch(`${winners}?_page=${page}&_limit=${limit}`);
 return {
	 items: await response.json(),
	 count: response.headers.get('X-Total-Count')
 };

};

export const createCar = async (body) => (await fetch(garage, {
	method: 'POST',
	body: JSON.stringify(body),
	headers: {
	'Content-Type': 'application/json'
	},
})).json();

export const deleteCar = async (id) => ( await fetch(`${garage}/${id}`, {method: 'DELETE'})).json();

const Api = () => {

	return(<div></div>);
};

export default Api;
