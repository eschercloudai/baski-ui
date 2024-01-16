<script>
    import {downIcon, failed_colour, failed_icon, good_colour, good_icon, upIcon} from "$lib/common.js";
    import Icon from '@iconify/svelte';

    export let test;
    let test_status_icon = good_icon;
    let test_status_colour = good_colour;
    let toggledIcon = downIcon;

    if (test.completed != "true") {
        test_status_icon = failed_icon;
        test_status_colour = failed_colour;
    }

    let toggle = () => {
        if (toggledIcon == downIcon) {
            toggledIcon = upIcon;
        } else {
            toggledIcon = downIcon;
        }
    };

</script>
<div class="bg-white flex flex-col p-4">
    <details class="">

        <summary class="flex flex-row place-content-between">
            <div class="flex-col">
                <div><span class="text-l"><span class="font-semibold">Test:</span> {test.name}</span></div>
                <div>
                    <div class="flex justify-items-center ">
                        <span class="text-l font-semibold">Successful:</span>
                        <Icon class="mt-1" bind:icon={test_status_icon} bind:color={test_status_colour}/>
                    </div>
                </div>
            </div>
            <div class="">
                <Icon bind:icon={toggledIcon} width="48" height="48"/>
            </div>
        </summary>
        {test.description}
    </details>
</div>
<style>

</style>