<script>
    import {downIcon, failed_colour, failed_icon, good_colour, good_icon, upIcon} from "$lib/common.js";
    import Icon from '@iconify/svelte';

    export let image_id;
    export let image_name;
    export let k8s_version;
    export let build_date;
    export let scan_status;
    export let test_status;

    let scan_status_icon = good_icon
    let scan_status_colour = good_colour

    let test_status_icon = good_icon
    let test_status_colour = good_colour

    if (scan_status != "passed") {
        scan_status_icon = failed_icon
        scan_status_colour = failed_colour
    }

    if (test_status != "passed") {
        test_status_icon = failed_icon
        test_status_colour = failed_colour
    }


</script>
<a href="/image/{image_id}" class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
    <span class="text-l font-semibold mb-2">{image_name}</span>
    <span class="text-m font-semibold mb-2">Image: <span class="text-sm">{image_id}</span></span>
    <span class="text-m font-semibold mb-2">K8S Version: <span class="text-sm">{k8s_version}</span></span>
    <span class="text-m font-semibold mb-2">Build Date: <span class="text-sm">{build_date}</span></span>

    <div class="p-4">
        <div class="flex flex-row py-4">
            <Icon class="mt-1" bind:icon={scan_status_icon} bind:color={scan_status_colour}/>
            <span class="text-l font-semibold">Scan status: {scan_status}</span>
        </div>
        <div class="flex flex-row">
            <Icon class="mt-1" bind:icon={test_status_icon} bind:color={test_status_colour}/>
            <span class="text-l font-semibold">Test status: {test_status}</span>
        </div>
    </div>
</a>
<style>

</style>