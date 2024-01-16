<script>
	import {
		downIcon,
		failed_colour,
		failed_icon,
		good_colour,
		good_icon,
		upIcon
	} from '$lib/common.js';
	import Vuln from '$lib/Vuln.svelte';
	import Test from '$lib/Test.svelte';
	import Icon from '@iconify/svelte';

	export let data;

	let scan_status_icon = good_icon;
	let scan_status_colour = good_colour;

	let test_status_icon = good_icon;
	let test_status_colour = good_colour;

	if (data.scan_status != 'passed') {
		scan_status_icon = failed_icon;
		scan_status_colour = failed_colour;
	}

	if (data.test_status != 'passed') {
		test_status_icon = failed_icon;
		test_status_colour = failed_colour;
	}
</script>

<div class="flex flex-col mt-6 mb-6 mx-4 md:grid md:grid-cols-12 md:grid-cols-12 md:gap-4 md:mx-0">
	<div class="col-span-2">
		<div class="mr-0 md:mr-2 md:mb-0 mb-2" style="background-color: var(--brand)">
			<dl class="divide-y divide-gray-100">
				<div class="px-4 py-6 lg:grid lg:grid-cols-3 lg:gap-4 text-white">
					<dt class="text-sm font-semibold leading-6">Name</dt>
					<dd class="mt-1 text-sm leading-6 lg:col-span-2 lg:mt-0">{data.image_name}</dd>
				</div>
				<div class="px-4 py-6 lg:grid lg:grid-cols-3 lg:gap-4 text-white">
					<dt class="text-sm font-semibold leading-6">ID</dt>
					<dd class="mt-1 text-sm leading-6 lg:col-span-2 lg:mt-0">{data.image_name}</dd>
				</div>
				<div class="px-4 py-6 lg:grid lg:grid-cols-3 lg:gap-4 text-white">
					<dt class="text-sm font-semibold leading-6">K8S Version</dt>
					<dd class="mt-1 text-sm leading-6 lg:col-span-2 lg:mt-0">{data.k8s_version}</dd>
				</div>
				<div class="px-4 py-6 lg:grid lg:grid-cols-3 lg:gap-4 text-white">
					<dt class="text-sm font-semibold leading-6">Build Date</dt>
					<dd class="mt-1 text-sm leading-6 lg:col-span-2 lg:mt-0">{data.build_date}</dd>
				</div>
			</dl>
		</div>
	</div>
	<div class="md:grid md:grid-cols-12 col-span-10">
		<div class="col-span-6 order-1 mx-0 mb-2 md:order-0 md:mx-2 md:mb-0">
			<div class="text-white h-24 pt-8" style="background-color: var(--brand)">
				<h3 class="text-2xl text-center font-semibold leading-7">Vulnerability Information</h3>
				<div class="flex flex-row w-40 m-auto">
					<Icon class="mt-1" bind:icon={scan_status_icon} bind:color={scan_status_colour} />
					<span class="text-l font-semibold">Scan status: {data.scan_status}</span>
				</div>
			</div>
			<div class="grid grid-gap-4 divide-y divide-gray-900">
				{#if data.scan_data.length == 0}
					<div class="bg-white flex flex-col p-4 md:p-6">
						<h3 class="text-2xl">No vulnerabilities - Bravo!</h3>
					</div>
				{:else}
					{#each data.scan_data as vuln}
						<Vuln {vuln}></Vuln>
					{/each}
				{/if}
			</div>
		</div>
		<div class="col-span-6 order-0 mx-0 mb-2 md:order-1 md:mx-2 md:mb-0">
			<div
				class="text-white h-24 pt-8 grid justify-items-center"
				style="background-color: var(--brand)"
			>
				<div>
					<h3 class="text-2xl text-center font-semibold leading-7">Test Information</h3>
				</div>
				<div class="flex justify-items-center">
					<Icon class="mt-1" bind:icon={test_status_icon} bind:color={test_status_colour} />
					<span class="text-l font-semibold">Test status: {data.test_status}</span>
				</div>
			</div>
			<div class="divide-y divide-gray-900">
				{#each data.test_data as test}
					<Test {test}></Test>
				{/each}
			</div>
		</div>
	</div>
</div>
