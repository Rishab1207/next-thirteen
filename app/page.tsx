"use client";

import { cachedAxios, fetchMethod, unCachedAxios } from "@/actions/cache";
import { FormEvent, useState } from "react";

export default function Home() {
	const [slug, setSlug] = useState("");

	const [fetchData, setFetchData] = useState("");
	const [cachedAxiosData, setCachedAxiosData] = useState("");
	const [unCachedAxiosData, setUnCachedAxiosData] = useState("");

	const [loading, setLoading] = useState(false);

	const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);

		const fetchData = await fetchMethod(slug);
		const cachedAxiosDataData = await cachedAxios(slug);
		const unCachedAxiosData = await unCachedAxios(slug);

		setFetchData(JSON.stringify(fetchData, null, 2));
		setCachedAxiosData(JSON.stringify(cachedAxiosDataData, null, 2));
		setUnCachedAxiosData(JSON.stringify(unCachedAxiosData, null, 2));

		setLoading(false);
	};

	return (
		<main>
			{loading && <div>loading...</div>}

			<div className="space-y-5  w-3/4 mx-auto">
				<form onSubmit={onSubmitHandler} className="my-2">
					<input
						type="text"
						value={slug}
						onChange={(e) => setSlug(e.target.value)}
						className="caret-black w-4/5 px-4 py-2"
					/>
					<button type="submit" className="bg-blue-600 text-white px-4 py-2">
						submit
					</button>
				</form>

				<div className="grid grid-cols-3 ">
					<section>
						<h3 className="font-semibold">Fetch Data</h3>
						<pre>
							<code>{fetchData}</code>
						</pre>
					</section>

					<section>
						<h3 className="font-semibold">Cached Axios Data</h3>
						<pre>
							<code>{cachedAxiosData}</code>
						</pre>
					</section>

					<section>
						<h3 className="font-semibold">Uncached Axios Data</h3>
						<pre>
							<code>{unCachedAxiosData}</code>
						</pre>
					</section>
				</div>
			</div>
		</main>
	);
}
