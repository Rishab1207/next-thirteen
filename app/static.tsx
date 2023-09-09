import { cachedAxios, fetchMethod, unCachedAxios } from "@/actions/cache";
import React from "react";

const Static = async () => {
	const fetchData = await fetchMethod("1");
	const cachedAxiosData = await cachedAxios("1");
	const unCachedAxiosData = await unCachedAxios("1");

	return (
		<div className="space-y-5 mt-5 w-3/4 mx-auto">
			<div className="grid grid-cols-3 ">
				<section>
					<h3 className="font-semibold">Fetch Data</h3>
					<pre>
						<code>{JSON.stringify(fetchData, null, 2)}</code>
					</pre>
				</section>

				<section>
					<h3 className="font-semibold">Cached Axios Data</h3>
					<pre>
						<code>{JSON.stringify(cachedAxiosData, null, 2)}</code>
					</pre>
				</section>

				<section>
					<h3 className="font-semibold">Uncached Axios Data</h3>
					<pre>
						<code>{JSON.stringify(unCachedAxiosData, null, 2)}</code>
					</pre>
				</section>
			</div>
		</div>
	);
};

export default Static;
