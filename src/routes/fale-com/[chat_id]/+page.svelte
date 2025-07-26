<script lang="ts">
    let { data } = $props();

    function getAlignment({ from }: any) {
        return from === 'a' ? 'self-end' : 'self-start';
    }

    function getBgColor({ from }: any) {
        return from === 'a' ? 'bg-blue-200' : 'bg-stone-200';
    }

    function showMessageInput(ev: Event) {
        console.log('showMessageInput', ev);
    }

    function navigateBack(ev: Event) {
        console.log('navigateBack', ev);
    }

    function showProfile(ev: Event) {
        console.log('showProfile', ev);
    }
</script>

<div class="flex flex-col h-screen">
    <div class="flex flex-col-reverse grow px-2">
        {#each data.messages as message}
            <div class="{getBgColor(message)} {getAlignment(message)} mb-2 text-[14px] py-1 px-2 w-max rounded-lg">{message.text}</div>
        {/each}
    </div>
    <div class="flex h-[56px] w-full items-center justify-center gap-2">
        <button class="h-[40px] w-[40px] bg-blue-500 text-white text-[14px] font-bold rounded-full" onclick={navigateBack} aria-label="Voltar para página anterior"><i class="fa-solid fa-arrow-left"></i></button>
        <button class="h-[40px] w-[120px] bg-blue-500 text-white text-[14px] font-bold rounded-full" onclick={showMessageInput}>Digitar</button>
        <button class="h-[40px] w-[40px] bg-stone-300 rounded-full text-stone-400 text-[34px] overflow-hidden" onclick={showProfile} aria-label="Mostrar informacões do perfil"><i class="fa-solid fa-user"></i></button>
    </div>
</div>
