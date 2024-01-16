<script>
    import {downIcon, upIcon} from "$lib/common.js";
    import Icon from "@iconify/svelte";

    export let vuln;

    let toggledIcon = downIcon
    let toggle = () => {
        if (toggledIcon == downIcon) {
            toggledIcon = upIcon;
        } else {
            toggledIcon = downIcon;
        }
    };

</script>

<div class="bg-white flex flex-col p-4 md:p-6">
    <details on:toggle={toggle}>
        <summary class="flex flex-row place-content-between">
            <div class="flex-col">
                <div><span class="font-semibold">Package:</span> {vuln.PkgName}</div>
                <div><span class="font-semibold">ID:</span> {vuln.VulnerabilityID}</div>
                <div><span class="font-semibold">Sev:</span> {vuln.Severity}</div>
            </div>
            <div class="">
                <Icon bind:icon={toggledIcon} width="48" height="48"/>
            </div>
        </summary>
        <div>{vuln.Description}</div>
        <div class="grid justify-items-center my-4">
            <table class="border-collapse border border-slate-400 text-center">
                <thead>
                <tr>
                    <th class="px-2 py-1 border border-slate-300">Installed Version</th>
                    <th class="px-2 py-1 border border-slate-300">Fixed In</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="px-2 py-1 border border-slate-300">{vuln.InstalledVersion}</td>
                    <td class="px-2 py-1 border border-slate-300">{vuln.FixedVersion}</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="grid justify-items-center my-4">
            <table class="border-collapse border border-slate-400 text-center">
                {#if vuln.CVSS.nvd != null}
                    <thead>
                    <tr>
                        <th class="px-2 py-1 border border-slate-300" colspan="4">NVD</th>
                    </tr>
                    <tr>
                        <th class="px-2 py-1 border border-slate-300">V2 Score</th>
                        <th class="px-2 py-1 border border-slate-300">V2 Vector</th>
                        <th class="px-2 py-1 border border-slate-300">V3 Score</th>
                        <th class="px-2 py-1 border border-slate-300">V3 Vector</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="px-2 py-1 border border-slate-300">{vuln.CVSS.nvd.V2Score}</td>
                        <td class="px-2 py-1 border border-slate-300">{vuln.CVSS.nvd.V2Vector}</td>
                        <td class="px-2 py-1 border border-slate-300">{vuln.CVSS.nvd.V3Score}</td>
                        <td class="px-2 py-1 border border-slate-300">{vuln.CVSS.nvd.V3Vector}</td>
                    </tr>
                    </tbody>
                {/if}

                {#if vuln.CVSS.ghsa != null}
                    <thead>
                    <tr>
                        <th class="px-2 py-1 border border-slate-300" colspan="4">GHSA</th>
                    </tr>
                    <tr>
                        <th class="px-2 py-1 border border-slate-300">V2 Score</th>
                        <th class="px-2 py-1 border border-slate-300">V2 Vector</th>
                        <th class="px-2 py-1 border border-slate-300">V3 Score</th>
                        <th class="px-2 py-1 border border-slate-300">V3 Vector</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="px-2 py-1 border border-slate-300">{vuln.CVSS.ghsa.V2Score}</td>
                        <td class="px-2 py-1 border border-slate-300">{vuln.CVSS.ghsa.V2Vector}</td>
                        <td class="px-2 py-1 border border-slate-300">{vuln.CVSS.ghsa.V3Score}</td>
                        <td class="px-2 py-1 border border-slate-300">{vuln.CVSS.ghsa.V3Vector}</td>
                    </tr>
                    </tbody>
                {/if}

                {#if vuln.CVSS.redhat != null}
                    <thead>
                    <tr>
                        <th class="px-2 py-1 border border-slate-300" colspan="4">Redhat</th>
                    </tr>
                    <tr>
                        <th class="px-2 py-1 border border-slate-300">V2 Score</th>
                        <th class="px-2 py-1 border border-slate-300">V2 Vector</th>
                        <th class="px-2 py-1 border border-slate-300">V3 Score</th>
                        <th class="px-2 py-1 border border-slate-300">V3 Vector</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="px-2 py-1 border border-slate-300">{vuln.CVSS.redhat.V2Score}</td>
                        <td class="px-2 py-1 border border-slate-300">{vuln.CVSS.redhat.V2Vector}</td>
                        <td class="px-2 py-1 border border-slate-300">{vuln.CVSS.redhat.V3Score}</td>
                        <td class="px-2 py-1 border border-slate-300">{vuln.CVSS.redhat.V3Vector}</td>
                    </tr>
                    </tbody>
                {/if}
            </table>
        </div>
    </details>
</div>
<style>

</style>