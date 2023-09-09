import axios from "axios";
import { cache } from "react";

/**
 * Todo - test cache function on prod
 *
 * 3 functions
 *
 * Create 3 function taking an input and return o/p coressponding to that i/p
 *
 * expectation - same request with same parameter should get cached for 15 mins
 *
 * client side - request
 * SSR
 *
 * Identify -
 * 1. send a parameter from FE to check the if on different parameters for a request do we get the same response or not?
 * 2. if client side request is cached or not
 * 3. if SSR requests are cached or not
 *
 * - fetch - data should be updated after 5 seconds and if the data requested have different parameter then data should be related to that specific parameter
 * - axios with cache - data should be updated after 5 seconds and if the data requested have different parameter then data should be related to that specific parameter
 * - axios without cache - data should be updated on each reload
 */

const URL = "https://64baaf385e0670a501d6887f.mockapi.io/users/";

export const fetchMethod = async (id: string) => {
	const users = await (await fetch(URL + id)).json();

	console.log({ users });

	return users;
};

export const cachedAxios = cache(async (id: string) => {
	const users = (await axios.get(URL + id)).data;

	console.log({ users });

	return users;
});

export const unCachedAxios = async (id: string) => {
	const users = (await axios.get(URL + id)).data;

	console.log({ users });

	return users;
};
